---
title: Algorithmic Qubit
datatable: true
description: >
  The algorithmic qubit benchmark from IonQ evaluates quantum computer performance across algorithms like QFT, QPE, and VQE using classical fidelity metrics.
---
{% assign modified = page.path | max_last_modified: "tables/aq-table.html" %}

# Algorithmic qubit benchmark

## Benchmarking results

**List of acronyms:**  
**AC**: Advanced Compilation method  
**CE**: Constructor Evaluation (checked if the evaluation is done by the chip manufacturer)  
**COI**: Conflict of Interest  
**EM**: Error mitigation  
**SP**: Scientific paper (checked if a scientific paper explain the results)  

<!-- Avoid issue with citations -->
<!-- {% cite algorithmicQubitsPerf %} -->
{% include tables/aq-table.html %}
<script type="text/javascript">
    $(document).ready(function() {
      $('.aq-table').DataTable(
        {
          "pageLength": 100,
          "drawCallback": function(settings){ 
            MathJax.Hub.Queue(["Typeset", MathJax.Hub]); 
          }
        } 
      );
    });
</script>

## Motivation

The Algorithmic Qubit (AQ) benchmark, introduced by IonQ in 2020 {% cite algorithmicQubits %} is derived from the Volumetric benchmarking protocol {% cite lubinski2023application %}. The main motivation presented by the authors is to define a single number figure of merit to evaluate the performance of quantum computers for solving a representative set of quantum algorithms.

## Protocol

A detailed description of the AQ protocol is available in an associated GitHub repository {% cite algorithmicQubitsProtocol %}. The protocol consists of sampling the output distribution of a quantum circuit and comparing this output to the ideal output distribution by computing the classical fidelity.

For validating a $$n$$ AQ, several algorithms are used to generate the following quantum circuits using $$n$$ qubits:
- 3 circuits based on the Quantum Fourier Transform
- 3 circuits based on the Quantum Phase Estimation
- 3 circuits based on the Amplitude Estimation
- 1 circuit based on the Monte Carlo Sampling algorithm
- 3 circuits based on a VQE simulation
- 1 circuit based on a Hamiltonian simulation

Each circuit is then compiled to a fixed gate set consisting of $$CX$$, $$R_x$$, $$R_y$$, and $$R_z$$ using Qiskit compiler 0.34.2, with compilation seed set to $$0$$. The depth and width of the compiled circuit are recorded as $$w_d$$ and $$w_c$$ (these quantities are used to build the volumetric plot).

It is important to emphasize that this first compilation step is performed solely to determine the quantities $$w_d$$ and $$w_c$$. Subsequently, the circuit may be further compiled and optimized before execution on the quantum device. The only restriction is that the final circuit run on the quantum computer must implement the same unitary transformation as the initial circuit. Error mitigation techniques are permitted, provided that their application is clearly reported. Each circuit is sampled $$n_\mathrm{shot}$$ times. For each circuit, the ideal sampling probability is denoted by $$\widetilde{p}_c$$ and the experimentally obtained distribution by $$p_c$$. The classical fidelity $$F(p_c, \widetilde{p}_c)$$ is computed and the statistical error $$\epsilon_c$$ is extracted:  
<!-- Link to the fidelity -->

$$ \epsilon_c = \sqrt{\frac{F \left(p_c, \widetilde{p}_c \right) \left(1-F \left(p_c, \widetilde{p}_c \right) \right)}{n_\mathrm{shots}}} $$

The number of algorithmic qubits associated with a quantum computer is defined as the largest size $$n$$ such that all generated circuits satisfying $$w_c \le n$$ and depth $$\sqrt{w_d} \le n$$ achieve a fidelity beyond the validity threshold $$F(p_c, \widetilde{p}_c) - \epsilon_c > 0.37$$.

<!-- Ajouter des plots concernant l'algorithmic qubit-->

## Limitations

This protocol has been criticized for several reasons discussed in {% cite debunkingAlgorithmicQubit %}. The authors highlight the problematic role of error mitigation techniques, which can artificially enhance the apparent performance of quantum computers and reduce the observed performance gap between different devices. They demonstrate that certain error mitigation methods, particularly those not expected to scale favorably with system size, can lead to misleading results. Additionally, they point out concerns regarding the use of Qiskit compiler version 0.34.2 for calculating the number of CX gates and hence, depth of the circuit. As this compilation method is used to compute the values used in the heatmaps $$w_d$$ and $$w_c$$, a suboptimal compilation could artificially inflate a device's reported performance. In particular, the authors show that alternative compilers can significantly reduce the overall number of gates (especially for the largest circuits).  

Another limitation of the protocol is the restricted number of different circuits used during the benchmark which could affect the robustness of the results.

## Implementation

The implementation of the Algorithmic Qubit benchmark is hosted by ionQ on GitHub and can be consulted <a href="https://github.com/ionq/QC-App-Oriented-Benchmarks" target="_blank">here</a>.

## References

{% bibliography --cited %}