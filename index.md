---
description: >
  Presentation of the QuantumBenchmarkZoo: main objective, features and 
  other interesting resources.
---

## What is QuantumBenchmarkZoo ?
{% assign ak = site.nav.Zoo | where: "page-id", "acknowledgments" | first %}

The QuantumBenchmarkZoo aims to give an overview on the protocols and studies established to evaluate the performance of quantum computers. This is a living survey, feel free to <a>contribute</a>. Should you find any error or omission, please mail <a>contact@quantumbenchmarkzoo.org</a> or propose a pull request at <a>….</a>. \
Any kind of help is welcomed and will be <a href="{{ ak.url | prepend: site.baseurl }}">acknowledged</a>.

## Sections

- Figures of merit
- Protocols
- Benchmarks
- Frameworks
- Datasets
- Ressource estimation
- Pricing

The section **Figure of merit** introduces common measures used to evaluate the performance of quantum computers. The second section **Protocols** introduces a classification and details each protocol. The compilation of results obtained with each protocol is in section **Benchmarks**. Section **Frameworks** gathers software library initiatives developed to benchmark quantum computers. Section **Datasets** groups existing applications instance sets. Section **Ressource estimation** introduces tools to perform upstream estimation of quantum resources requirements. This is especially relevant for Fault-Tolerant Quantum Computing (FTQC). Section **Pricing** summarizes the cost plans of each company commercializing access to quantum computers.

## Other ressources

For an introduction to classical computing benchmark, we recommend:
- survey 1
- survey 2
- ...

For an introduction to quantum computing benchmark, we recommend:
- survey 1
- survey 2
- ...

# References
{% bibliography --cited %}
