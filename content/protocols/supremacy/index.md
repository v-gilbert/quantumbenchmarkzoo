---
datatable: true
description: >
  Protocols used for quantum supremacy experiments
---

# Quantum supremacy

The comparison between quantum and classical computers can be based on various criteria, such as processing time, computational accuracy, and energy consumption. Quantum supremacy refers to experiments demonstrating that a quantum computer can solve a specific computational task significantly faster than a classical computer. These tasks are typically designed to be exceptionally challenging for classical systems, requiring exponentially scaling resources with the problem size. While such tasks may not have practical applications, they serve as a proof of concept for the superior computational power of quantum systems.

## Protocols

{% assign rcs = site.supremacy-protocols | where: "page-id", "random-circuit-sampling" | first %}
- <a href="{{ rcs.url | prepend: site.baseurl }}">Random Circuit Sampling (RCS)</a>

{% assign bs = site.supremacy-protocols | where: "page-id", "boson-sampling" | first %}
- <a href="{{ bs.url | prepend: site.baseurl }}">Boson Sampling (BS)</a>

{% assign qsim = site.supremacy-protocols | where: "page-id", "quantum-simulation" | first %}
- <a href="{{ qsim.url | prepend: site.baseurl }}">Quantum simulation (Qsim)</a>

## Experiments

### Taxonomy
**RCS**: Random Circuit Sampling.\
**GBS**: Gaussian Boson Sampling.\
**Qsim**: Quantum simulation.\
**n**: Number of qubits involved in the experiment.\
**m**: Number of layers for the RCS experiments, Number of modes for GBS experiments.\
**Challenged**: Litterature that either improve the classical simulation or question some parts of the claim.\
**Weakly refuted**: Litterature improving classical simulation with new algorithms suggesting classical computers powerfull enough could break the claim.\
**Refuted**: Litterature providing classical experiments that surpasses the supremacy claim.

### Summary

This summary is an adaptation of the table provided by R. Larose in {% cite larose2024brief %} (Table 1.).

{% include tables/supremacy.html %}


## References
{% bibliography --cited %}