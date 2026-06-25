---
title: AppQSim
description: >
    AppQSim is a benchmark suite for quantum Hamiltonian simulation problems developed by Quantinuum and partially available in the QUARK benchmark suite.
datatable: true
navbar-page-id: benchmark-suites
---

{% assign quark = site.benchmarking-suites | where: "page-id", "QUARK" | first %}

# AppQSim benchmark suite

The AppQSim benchmark suite was introduced in 2025 by E. Granet et al. {% cite granet2025appqsim %}. This benchmark initiative is led by the company <a href="https://www.quantinuum.com/" target="_blank">Quantinuum</a> and has been partially integrated into the <a>BenchQC project</a> with the <a href="{{ quark.url | prepend: site.baseurl }}">QUARK framework</a>.

## Motivation

The main motivation behind this benchmark suite is to provide a dedicated framework for evaluating the performance of quantum computers on Hamiltonian simulation problems. The authors justify this focus by noting that Hamiltonian simulation is, at the time of writing, underrepresented in existing quantum benchmarking suites.

## Architecture

The AppQSim benchmark suite introduces 5 problems that rely on Hamiltonian simulation. Each problem is associated with a set of instances and a score representing the quantum computer's ability to solve them. The authors evaluate the benchmark problems against several qualitative criteria:
* **Application-oriented**: defines if the benchmark instances represent a concrete useful problems.
* **Scalability**: a benchmark is scalable if the classical resources scale polynomially with the problem size.
* **Relatively cheap to run**: a good benchmark should be relatively cheap to run (relatively low number of gates and shots)
* **Difficult to spoof**: the benchmark's outcome should not be easy to replicate by chance or through workarounds. The authors' spoofing definition does not encompass classical spoofing.
* **Hardware-agnostic**: The benchmarking protocol should not favor one platform over others (e.g., instances requiring all-to-all connectivity are considered favorable to architectures that are fully connected).

The following table summarizes the problems used in AppQSim, along with their characteristics (the justification can be found in the problem subsections of the article {% cite granet2025appqsim %}).

{% include tables/benchmark-suite-AppQSim-instances-table.html %}
<script type="text/javascript">
    $(document).ready(function() {
      $('.benchmark-suite-AppQSim-instances-table').DataTable(
        {
          "pageLength": 10,
          "ordering": false,
          "drawCallback": function(settings){ 
             MathJax.typesetPromise(); 
          }
        } 
      );
    });
</script>

## Benchmark instances

### Simulation of conducting materials

The benchmark uses a free-fermion model inspired by Hubbard-model dynamics, chosen so that the exact observable can be computed classically at large system sizes. The score used to assess the performance of the quantum computer is a problem-agnostic score called the *minimum distinguishability cost*, which computes the minimum number of gates required to certify distinguishability between the quantum computer's output and that of a perfect ideal quantum emulator.

### Computation of static observable at low temperature

The authors take as a benchmark instance a model describing a specific material, whose Hamiltonian is defined on a kagome lattice. They approximate the adiabatic evolution using a finite number of Trotter steps and minimize the resulting expectation value. The score is built from the expectation value, penalized by two standard deviations meaning that the penalty decreases as statistical uncertainty decreases.

### Simulation of Nuclear Magnetic Resonance (NMR)

For this application area, the authors create a benzene molecule as the benchmarking instance. The NMR problem aims to determine the values of spin-spin coupling coefficients $$J_{i,j}$$ for the benzene molecule. The ideal NMR spectrum is obtained from the free induction decay signal, built from the ideal coefficients $$J_{i,j}$$. The score corresponds to the mean-squared error between the ideal $$J_\mathrm{ideal}$$ and estimated $$J_\mathrm{est}$$ coefficients found using the quantum computer.

### Ground state energy computation

The benchmark instance considers a linear chain of hydrogen atoms. The authors use a randomized algorithm to avoid Trotter errors when evaluating the quantum computer's ability to implement a ground-state preparation circuit for the chain of atoms. A passing test is then built from the expectation value of an ancilla observable used as a proxy for measuring the correct implementation of the randomized algorithm. The final score is the largest size for which the test is passing. This method avoids costly samples to meet chemical accuracy but does not directly verify the ground-state energy of the system.

### Optimization

The benchmark instance consists of max-cut instances on 3-regular graphs. The final score is the maximum problem size for which the quantum computer can return the optimal solution with probability $$1/2$$. This size is determined by whether the quantum computer can solve at least one instance of the max-cut problem for that size.


## Devices being benchmarked

The article {% cite granet2025appqsim %} benchmarks quantum emulators with different levels of simulated noise. The authors do not evaluate real quantum hardware.

## Limitations

The benchmark instances used in AppQSim are closer to research-relevant tasks than real industrial tasks. Indeed, some instance problems are very specific and not representative of industrial workload, such as the computation of free fermions inspired by the Hubbard model, the computation of electronic configurations of linear chains of atoms or random 3-regular graph max-cut instance problems.

A second limitation is that the benchmark suite is not fully accessible online, with only the part on "simulation of conducting materials" available in the <a href="{{ quark.url | prepend: site.baseurl }}">QUARK framework</a>.

## Implementation

Currently, there is no public implementation of the protocol. The experiment on conducting materials has been implemented in the <a href="{{ quark.url | prepend: site.baseurl }}">QUARK framework</a> and is available in the project <a href="https://github.com/QUARK-framework/QUARK/tree/main/src/modules/applications/simulation/free_fermion" target="_blank">Github repository</a>. The data from the study {% cite granet2025appqsim %} are available on <a href="https://zenodo.org/records/17224041" target="_blank">Zenodo</a>.

## References

{% bibliography --cited %}