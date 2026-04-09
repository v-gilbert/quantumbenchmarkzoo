---
title: Supermarq
description: >
  Supermarq is an application-oriented benchmark for assessing the performance of quantum computer and evaluating the coverage of the benchmarking instance set.
navbar-page-id: benchmark-suites
---

{% assign fidelity = site.nav.FOM | where: "page-id", "fidelities-errors" | first %}
{% assign irb = site.randomized-benchmarking-protocols| where: "page-id", "IRB" | first %}

# SupermarQ: a hardware-agnostic quantum benchmark

The SupermarQ benchmark suite {% cite tomesh2022supermarq %} was initially proposed in 2022 and defines a framework and a set of instances for benchmarking quantum computers using application-level figures of merit. The company <a href="https://infleqtion.com/" target="_blank">Infleqtion</a> is still updating this framework, which is part of the <a href="https://infleqtion.com/quantum-software/" target="_blank">Superstarq quantum software platform</a>.

## Motivation

The motivation for this benchmark suite is to compare the performance of different quantum computer architectures in a hardware-agnostic way. This benchmark draws inspiration from the classical benchmark suite PARSEC {% cite Bienia2008 %}, which was designed to evaluate multithreaded applications. SupermarQ benchmark suite also introduces a list of criteria used to quantify how the benchmark set stresses the quantum process unit.

## Architecture 

The SupermarQ benchmark suite is structured around a set of quantum subroutines and applications that collectively ensure a representative coverage of quantum workloads. Each benchmark is described by a feature vector capturing different aspects of how a program stresses the quantum processor. The following features are used to evaluate the coverage of the benchmark suite:
* **Communication (CO)**: Captures how different qubits of the system need to interact with each other when executing the quantum circuit.
* **Critical depth (CD)**: Reflects how the program is serialized.
* **Entanglement ratio (E)**: Measures how much the program relies on multi-qubit gates compared to single-qubit gates.
* **Parallelism (P)**: Indicates the amount of parallelism available in the quantum program (quantum operations occurring simultaneously).
* **Liveness (L)**: Describes how actively qubits are processed by quantum operations versus sitting idle during execution.
* **Measurement (M)**: Tracks how often intermediate measurements are used, which can introduce additional noise. This feature is primarily used for error-correction benchmarks.

These features, normalized to $$[0, 1]$$, produce a 6-dimensional space used to quantify the coverage of a benchmark set. This coverage can then be represented as a radar chart:

<div class="center">
  <img src="/img/multi-level-benchmark/framework/Supermarq-radar.png" class="img-very-small" alt="Radar representation for an instance of the SupermarQ benchmarking tool"/>
</div>

Each benchmark is reported with a benchmark score that depends on the type of application/quantum routine being benchmarked, along with the instance's coverage. The authors then assess the Pearson correlation coefficient between the score and each feature used to define the coverage.

## Benchmark instances

The framework includes both quantum subroutine and application-oriented benchmarks. 

### Quantum sub-routines

The benchmark suite involves the test of a series of quantum computing sub-routines:
* **GHZ state generation**: assesses the system's ability to produce multipartite entangled states, with the <a href="{{ fidelity.url | prepend: site.baseurl }}#hellinger-fidelity" target="_blank">Hellinger fidelity</a> serving as the benchmark.
* **Mermin-Bell benchmark**: builds on GHZ states to validate the device's quantum behavior, using the expectation value of the Mermin operator to compute the benchmark score.
* **Error correction**: evaluates error-correction routines such as bit flip and phase flip repetition codes, using the <a href="{{ fidelity.url | prepend: site.baseurl }}#hellinger-fidelity" target="_blank">Hellinger fidelity<a> as the benchmark score.

### Application benchmark

The benchmark suite also involves tests on a series of algorithms used for applications:
* **QAOA**: builds on Ising problems such as the Sherrington-Kirkpatrick and Max-Cut problems, where the expectation value of the experiment is compared to the expectation value of an ideal noiseless emulation to set the benchmark score.
* **VQE**: encodes the 1D transverse-field Ising model to find its ground-state energy. This benchmark uses the same score as for the QAOA.
* **Hamiltonian simulation**: encodes the 1D transverse-field Ising model using Trotterization and compares the expectation value of the experiment and the expectation value of an ideal noiseless emulation to set the benchmark score.

### Extensions

The SupermarQ benchmark suite has been extended to include other system-level benchmarks such as <a>Cross-entropy benchmarking</a>, <a href="{{ irb.url | prepend: site.baseurl }}" target="_blank">Interleaved Randomized Benchmarking</a>, Symmetric Stabilizer Benchmarking {% cite tsai2025benchmarking %} and SU(2) benchmarking.

## Devices being benchmarked

The framework permits connections to different types of quantum computers:
* IonQ trapped-ion quantum systems via <a href="https://aws.amazon.com/braket/pricing/" target="_blank">Amazon Braket</a>.
* IBM superconducting quantum systems via <a href="https://www.ibm.com/quantum/qiskit" target="_blank">IBM Qiskit</a>.
* AQT trapped-ion quantum systems.

Simulators:
* <a href="https://www.ibm.com/quantum/qiskit" target="_blank">Qiskit</a> simulator
* <a href="https://quantumai.google/cirq" target="_blank">Cirq</a> simulator

## Implementation

The <a href="https://github.com/Infleqtion/client-superstaq/tree/main/supermarq-benchmarks" target="_blank">SupermarQ framework source code</a> is open source and was last updated on 30/07/2025. 

The instances used in the initial publication of the benchmark suite are available on <a href="https://zenodo.org/records/5786391#.ZFEGbJHP1hE" target="_blank">Zenodo</a>.

## References

{% bibliography --cited %}
