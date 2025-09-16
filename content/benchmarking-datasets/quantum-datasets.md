---
title: Quantum Datasets
description: >
  Datasets for benchmarking quantum computer performance across various abstraction levels from the application level to the pulse level.
---

{% assign modified = page.path | max_last_modified: "tables/QV-table.html" %}

# Quantum Datasets

## Benchmarking datasets

This section gathers datasets specifically used for the benchmarking of quantum computers. These datasets are classified using an extension of the quantum compilation flow introduced by N. Quetschlich et al. in {% cite quetschlich2023mqt %}. The compilation flow consists of several abstraction levels, ranging from high-level application descriptions to hardware-specific implementations:
1. **Application level**: The instance is described as a problem without the quantum circuit implementation.
2. **Algorithmic level**: The problem is formulated as a quantum circuit composed of high-level blocks that do not consider the quantum computer's topology or gate set (hardware-agnostic). For example, a block could be a variational quantum algorithm layer or a quantum Fourier transform.
3. **Target-independent level**: The circuit defined at the algorithmic level is synthesized in high-level building blocks. It is done by specifying the parameters of parametrized gates and decomposing high-level blocks (for example, decomposing a QFT block into two-qubit and single-qubit quantum gates).
4. **Target-dependent native gate set level**: The circuit is synthesized into a gate set compatible with the quantum computer.
5. **Target-dependent mapped level**: The quantum circuit is synthesized to consider the layout of the qubit connectivity. This step might involve additional operations such as SWAP gates to comply with the connectivity constraints of the quantum hardware.
The datasets are presented by creation date.
6. **Pulse-level**: The quantum circuit is further synthesized to a physical pulse sequence that represents the physical interactions with the qubits.

The following table relates each dataset to the abstraction level it benchmarks.

{% include tables/quantum-dataset-table.html %}
<script type="text/javascript">
    $(document).ready(function() {
      $('.quantum-dataset-table').DataTable(
        {
          "pageLength": 10,
          "drawCallback": function(settings){ 
            MathJax.Hub.Queue(["Typeset", MathJax.Hub]); 
          }
        } 
      );
    });
</script>

## Quantum Machine Learning (QML) datasets

<!--
## HamLib 

The Hamiltonian Library (HamLib), introduced by N. PD. Sawaya et al. in 2023 {% cite sawaya2024hamlib %} gathers a large dataset of qubit-based Hamiltonians for problem sizes from 2 to 1000 qubits. This library provides Hamiltonians based on the <a href="https://github.com/quantumlib/OpenFermion" target="_blank">OpenFermion's Google library</a> {% cite mcclean2020openfermion %}. The dataset features Pauli representation of the Hamiltonian of the problem and provides Hamiltonians related to different applications:
- **Optimization** (Binary and discrete optimization)
- **Condensed matter** models (Bose Hubbard, Fermi Hubbard, Heisenberg, Lattices, and Transverse Field Ising models)
- **Chemistry** (electronic and vibrational structures)

The <a href="https://portal.nersc.gov/cfs/m888/dcamps/hamlib/" target="_blank">dataset</a> is publicly available, and the authors also provide <a href="https://github.com/Azulene-Labs/hamlib_functions" target="_blank">tools</a> to easily interact with the content of the dataset.

## VeriQBench

VeriQBench, introduced by K. Chen et al in 2022 {% cite chen2022veriqbench %} gathers high-level description of quantum circuits for problem sizes 

in OpenQASM 2.0 to benchmark quantum computers. The <a href="https://github.com/Veri-Q/Benchmark" target="_blank">dataset</a> is publicly available.

## MQTBench

Munich Quantum Toolkit Benchmark Library (MQTBench), introduced by N. Quetschlich et al. in 2022 {% cite quetschlich2023mqt %} is a dataset designed to facilitate the benchmarking of gate-based quantum computers. The authors designed a circuit library to benchmark each level of abstraction of the compilation flow. This flow consists of several abstraction levels, ranging from high-level algorithmic descriptions to hardware-specific implementations:
- **Algorithmic level**: The description of the quantum circuit is composed of high-level blocks that do not consider the quantum computer's topology or gate set (hardware-agnostic). For example, a block could be a variational quantum algorithm layer or a quantum Fourier transform.
- **Target-independent level**: The circuit defined at the algorithmic level is synthesized in high-level building blocks. It is done by specifying the parameters of parametrized gates and decomposing high-level blocks (for example, decomposing a QFT block into two-qubit and single-qubit quantum gates).
- **Target-dependent native gate set level**: The circuit is synthesized into a gate set compatible with the quantum computer.
- **Target-dependent mapped level**: The quantum circuit is synthesized to consider the layout of the qubit connectivity. This step might involve additional operations such as SWAP gates to comply with the connectivity constraints of the quantum hardware.

Based on this compilation flow, the authors present a list of benchmarking instances that target each level of the compilation flow. The dataset includes diverse quantum circuits, covering a range of system sizes from 2 to 130 qubits. The <a href="https://www.cda.cit.tum.de/mqtbench/" target="_blank">dataset</a> is publicly available. 
For the two most hardware-specific levels of the compilation flow, MQTBench provides benchmarks targeting several leading quantum computing platforms, including those developed by:
- IBM
- Rigetti
- Oxford Quantum Circuits
- IonQ
- Quantinuum

## RevLib

The RevLib was introduced in 2008 by R. Wille et al. {% cite Wille2008 %} and consists of a collaborative library implementing reversible functions. The <a href="https://www.revlib.org/" target="_blank">dataset</a> is publicly available. This library contains several functions with their associated quantum circuit defined in a <a href="https://www.revlib.org/documentation.php" target="_blank">specific format</a>. The aim of this library was at first to evaluate the gate-level synthesis to compare compilation algorithms. This library does not seem to be maintained anymore.


-->

<!-- Ajouter un tableau sur les différents circuits implémentés par librairie-->
## Other datasets references

The reader may refer to other maintained datasets references:  
- <a href="https://pennylane.ai/datasets/" target="_blank">Pennylane datasets</a>

## References

{% bibliography --cited %}