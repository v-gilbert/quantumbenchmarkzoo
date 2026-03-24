---
title: Quantum tomography
datatable: true
description: >
  
navbar-page-id: tomography
---

# Quantum tomography

Quantum tomography protocols are based on reconstructing the density matrix of quantum states. These protocols can be used to infer the fidelity of quantum processes, such as initialization, processing operations, and measurements.

## List of protocols 

{% assign state-tomography = site.tomography | where: "page-id", "state-tomography" | first %}
- <a href="{{ state-tomography.url | prepend: site.baseurl }}">Quantum State Tomography (QST)</a>

In a nutshell, quantum state tomography is a method for measuring a quantum system in different orthogonal bases to reconstruct the density matrix corresponding to the actual quantum state.


{% assign process-tomography = site.tomography | where: "page-id", "process-tomography" | first %}
- <a href="{{ process-tomography.url | prepend: site.baseurl }}">Quantum Process Tomography (QPT)</a>

In a nutshell, quantum process tomography is a method for reconstructing the linear map associated with a quantum process, which describes quantum operations (e.g., a quantum gate). It permits a precise characterization of the behavior of a quantum operation.