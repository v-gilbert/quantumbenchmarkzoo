---
title: QED-C Benchmark suite
description: >
  
navbar-page-id: multi-level-methodologies
---

# QED-C benchmark suite

The QED-C benchmark suite {% cite lubinski2023application %} was introduced in 2021. The development of this benchmark suite is supported by the <a href="https://quantumconsortium.org/">Quantum Economic Development Consortium</a> (QED-C), USA. The initial development included both quantum companies (IonQ, D-Wave Systems, Quantinuum, Rigetti, Quantum Circuit Inc) and research institutions such as the Sandia National Laboratories, Princeton University and Colorado School of Mines.

## Motivation

The motivation for this benchmark suite is to create a set of quantum circuits for evaluating the performance of quantum computers in executing quantum applications. The initial contribution {% cite lubinski2023application %} focuses on quantum circuits; analog quantum computers were added to the framework {% cite lubinski2024optimization %} in 2023. This suite is open source and aims to be an evolving codebase.

## Architecture

The benchmark suite is initially built upon the <a>Volumetric Benchmark methodology</a> {% cite BlumeKohout2020 %} aiming at representing the performance of a quantum computer at running a quantum circuit with respect to its width and depth in a 2-dimensional map. The benchmark suite is composed of four main components:
* A set of algorithms $$\mathbb{A}$$ used for the benchmark. 
* For each algorithm and a specified size $$n$$, there is a recipe which turns the algorithm into a quantum circuit (in a hardware-agnostic gate set). It forms a circuit set $$\mathbb{C}_n$$ for each size $$n$$.
* A procedure to randomly select the circuit from the circuit set.
* A method for analyzing the data.

An individual benchmark experiment consists of fixing the following parameters:
* The size $$n$$ for the algorithm being tested (equivalent to the circuit with, i.e., the number of qubits).
* The number of circuits being evaluated that are drawn from the set $$\{C\}_n$$.
* The number of shots defining the number of execution of the quantum circuit on the quantum computer.

<!-- Figure with an example of volumetric benchmark -->

The architecture of the QED-C benchmark suite was updated in 2025 to improve its modularity and ease the integration of other benchmark suites {% cite patel2025platform %}. In this work, the authors illustrate architectural enhancements by integrating the <a>pyGSTi</a> benchmark suite, which targets low-level and system-level benchmarking, and by integrating CUDA-Q to enable distributed quantum simulations.

### Fidelity

The authors use a normalized fidelity derived from the <a>classical fidelity</a> to measure the success of running the quantum circuit. The classical fidelity between two distributions $$p$$ and $$\tilde{p}$$ over a bitstring $$x$$ of $$n$$ bits is expressed as: 

$$ F(p, \tilde{p}) = \left( \sum_{x \in \{0, 1\}^n} \sqrt{p(x)\tilde{p}(x)}\right)^2 $$

The authors of {% cite lubinski2023application %} then normalize this fidelity with respect to a random uniform distribution $$p_\mathrm{uni}$$. Let $$p$$ be the ideal and $$\tilde{p}$$ the distribution corresponding to the output of the quantum computer. The normalized fidelity is computed as:

$$ F_\mathrm{norm}(p, \tilde{p}) = \max \left\{ \frac{F(p, \tilde{p}) - F(p, p_\mathrm{uni})}{1-F(p, p_\mathrm{uni})} , 0 \right\} $$

A detailed discussion on the limitations of this figure of merit is given in the section III.G of {% cite lubinski2023application %}.

### Circuit depth

The authors assume that the circuit is expressed in terms of the gate set $$\{ rx, ry, rz, CNOT \}$$ to get rid of a hardware-dependent gate set. This popular universal gate set allows the quantum circuit to be expressed in a hardware- and algorithmically independent way. The authors also assume that gates on distinct sets of qubits can be applied in parallel and that the quantum chip is fully connected. The depth of the circuits expressed with this gate set is called the *normalized depth* and is used to define the reference depth in the volumetric plots. For each benchmark on a specific quantum computer, the circuit is then transpiled to the hardware-specific gate set.

### Time

The authors of {% cite lubinski2023application %} suggest measuring the quantum computer’s computation time in two different ways:
* **Total execution time (wall clock time)**:  the time required to complete a given number of shots, including all associated classical pre- and post-processing steps. These include circuit compilation, parameter optimization (e.g., in variational circuits), communication between classical and quantum hardware, and execution on the quantum processor.
* **Quantum execution time**: the time needed to run a specific number of shots on a quantum computer while excluding any classical pre- and post-processing, focusing solely on the execution of the quantum circuit itself.

## Benchmark instances

The following table reproduces the instances implemented in the <a href="https://github.com/sri-international/qc-app-oriented-benchmarks" target="_blank">QED-C benchmarking library</a>. The QED-C benchmark suite implements algorithms in various programming languages, including Qiskit, Cirq, Barket, and Cuda-Q. The instances were initially organized into three categories:
* **Tutorial**: Includes algorithms used to introduce concepts in quantum computing.
* **Subroutine**: Part of quantum algorithms that may be used in many different quantum algorithms.
* **Functional**: Complete algorithms that are anticipated to be useful.
* **Application**: Complete algorithm dedicated to a specific application.

The following table lists the benchmarks that have been implemented in the suite:
<!-- table of instances --> 

## Devices being benchmarked

The QED-C benchmark suite has been used to benchmark many different quantum computers. We list the companies having their quantum computers benchmarked and their related publications:
* IonQ (Aria, Harmony), IBM (ibmq\_casablanca, ibmq\_guadalupe, ibmq\_lagos), Quantinuum (H1.1), Rigetti (Aspen-9) in {% cite lubinski2023application %} for the initial evaluation of the benchmark suite.
* D-Wave (Advantage4.1), IonQ (Aria), IBM (ibmq\_algiers, ibmq\_guadalupe) in {% cite lubinski2024optimization %} for solving optimization problems.
* Quantinuum (H1.1) for the HLL algorithm and IBM (ibmq\_guadalupe, ibmq\_algiers, ibm\_brisbane) for VQE algorithms in {% cite lubinski2024quantum %}
* IBM (ibm\_pittsburgh, ibm\_torino) in {% cite patel2025platform %} for QPE, QFT and reinforcement learning tasks.
* IBM (ibm\_strasbourg) in {% cite niu2025practical %} for Hamiltonian simulation tasks.

## Extensions

The QED-C benchmark suite has been extended to evaluate the performance of quantum computers on **optimization problems** in {% cite lubinski2024optimization %}, mainly focusing on the Max-cut problem. In this new publication, the authors introduce a new methodology and diagram for vizualizing the performance profile of quantum computers solving optimization problems. For different instances sizes (y-axis of the plot), the vizualisation shows the time spent and the associated approximation ratio (ratio between average solution costs and the cost of the optimal solution) obtained according with respect to these two parameters: 

<!-- Figure for performance profile -->

The QED-C benchmark suite has been further extended in {% cite lubinski2024quantum %} to implement VQE and the HHL algorithm. In particular, they introduce a new figure of merit to measure the accuracy of the output of the VQE algorithm called the *accuracy ratio* which compute the energy difference between the energy obtained with a Full Configuration Interaction model and the energy obtained with the quantum computer. They also extend their benchmark to machine learning applications for image recognition tasks and add method to consider the impact of optimization and error mitigation on the result sampled by quantum computers. A Quantum Reinforcement learning application have been added to the benchmark suite in {% cite patel2025platform %} to demonstrate the update of the QED-C benchmark suite architecture.

Hamiltonian simulation benchmarking problems were also incorporated into the suite through the work of A. Chatterjee et al. {% cite chatterjee2025comprehensive %}, who integrated five problems from the <a>HamLib</a> data collection in the QED-C benchmark suite. The authors then led benchmarking studies on the Trotterized quantum evolution corresponding to these problems. The authors evaluate these instances by studying Trotterized quantum evolution, using normalized fidelity to assess performance across a range of benchmarking scenarios. These scenarios investigate the impact of Troter and hardware-induced errors. In addition, the authors analyze Hamiltonian simulation using <a>mirror benchmarking</a>. S. Niu et al. {% cite niu2025practical %} also use the QED-C framework to establish new methods for efficiently computing the observables associated with quantum simulation problems.

## Implementation

The <a href="https://github.com/sri-international/qc-app-oriented-benchmarks" target="_blank">QED-C source code</a> is open source and is often updated. The data for the benchmark of the first publication {% cite lubinski2023application %} in hosted on <a href="https://zenodo.org/records/6972744" target="_blank">Zenodo</a>.

## References

{% bibliography --cited %}