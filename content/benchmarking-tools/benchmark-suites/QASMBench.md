---
title: QASMBench
description: >
    QASMBench is a benchmark suite targetting low-level and cross-platform benchmarking by providing a serie of small-scale quantum algorithms implemented in OpenQASM
datatable: true
navbar-page-id: benchmark-suites
---

{% assign fidelity = site.nav.FOM | where: "page-id", "fidelities-errors" | first %}
{% assign tomography = site.nav.System-level | where: "page-id", "tomography" | first %}

# QASMBench benchmark suite

The QASMBench benchmark suite {% cite li2023qasmbench %} was introduced in 2020. This benchmark initiative is led by academics from <a href="https://www.pnnl.gov/quantum-information-sciences" target="_blank">Pacific Northwest National Laboratory</a> (PNNL), USA. The suite targets low-level benchmarks and is built around OpenQASM as a common assembly-level representation for circuits.

## Motivation

The motivation for this benchmark suite is to ease quantum software-hardware co-design by providing a set of methods for the verification and validation of quantum computers. QASMBench is intended to provide a broad benchmark set spanning many domains, while also adding more informative circuit-level figures of merit than width and depth alone.

## Architecture

The QASMBench benchmark suite implements a set of quantum algorithms and subroutines in the OpenQASM assembly language to assess the performance of a quantum computer. The benchmark instances are organized in three categories:
* **Small-scale** instances: consist of instances with 2-5 qubits, allowing intensive benchmarking of quantum computers using <a href="{{ tomography.url | prepend: site.baseurl }}" target="_blank">tomography</a>.
* **Medium-scale** instances: consists of instances from 6-15 qubits.
* **Large-scale** instances: contain benchmark instances with more than 15 qubits for testing large-scale quantum computers.

The QASMBench benchmark suite also introduces 6 figures of merit to better analyze and characterize the performance of quantum computers over quantum algorithms and subroutines. These figures of merit are:
* **Circuit width**: defines the number of qubits used for the quantum circuit.
* **Circuit depth**:  length of the critical path (number of sequential gate layers) after decomposition into OpenQASM gates.
* **Gate density**: ratio of executed gates to the total available circuit spacetime (width × depth), indicating how densely operations are packed.
* **Retention lifespan**: defines the longest qubit lifespan during the circuit. For each qubit, the lifespan is the time spent between its first and last uses (gate operation).
* **Measurement density**: ratio of the number of measurements to the circuit spacetime (width x depth), indicating how often final and intermediate measurements are used in the quantum circuit.
* **Entanglement variance**: defines variance in the number of two-qubit gates applied per qubit, where high variance means that groups of qubits are more connected than others.

The 6 different metrics are computed for each instance. The final benchmark score is based on the Hellinger fidelity evaluated from the ideal emulation of the quantum circuit and the actual experimental run on the quantum computer.

## Benchmark instances

The following table integrates table 3., 4. and 5. from {% cite li2023qasmbench %} with description of small-scale instances:

{% include tables/benchmark-suite-QASMBench-instances-table.html %}
<script type="text/javascript">
    $(document).ready(function() {
      $('.benchmark-suite-QASMBench-instances-table').DataTable(
        {
          "pageLength": 10,
          "drawCallback": function(settings){ 
            MathJax.Hub.Queue(["Typeset", MathJax.Hub]); 
          }
        } 
      );
    });
</script>

## Devices being benchmarked

The framework permits connections to different types of quantum computers:
* Rigetti superconducting quantum systems <a href="https://docs.rigetti.com/qcs/references/rigetti-provider-for-qiskit" target="_blank">via Qiskit provider</a>
* IBM superconducting quantum systems via <a href="https://www.ibm.com/quantum/qiskit" target="_blank">IBM Qiskit</a>.
* IonQ trapped-ion quantum systems via <a href="https://learn.microsoft.com/fr-fr/azure/quantum/provider-ionq" target="_blank">Microsoft Azur</a>.
* Quantinuum trapped-ion quantum systems via <a href="https://learn.microsoft.com/fr-fr/azure/quantum/provider-quantinuum" target="_blank">Microsoft Azur</a>.

## Limitation

The QASMBench benchmark suite focuses on low-level benchmarks and hence on small quantum systems. Because it relies on the computation of the  <a href="{{ fidelity.url | prepend: site.baseurl }}#hellinger-fidelity" target="_blank">Hellinger fidelity</a>, it is not suitable for generalization to large instances. Other figures of merit than the Hellinger fidelity should be used for large-scale quantum circuits. 

The figures of merit defined in the benchmark suite are computed according to the OpenQASM standard gate set. It might not be representative of real circuits run on real physical quantum computers.

## Implementation

The <a href="https://github.com/pnnl/QASMBench" target="_blank">QASMBench source code</a> is open source and was last updated on 20/01/2025. 

## References

{% bibliography --cited %}