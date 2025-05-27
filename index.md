---
description: >
  Presentation of the QuantumBenchmarkZoo: main objective, features and 
  other interesting resources.
---

# Welcome to Quantum Benchmark Zoo !
{% assign ak = site.nav.Zoo | where: "page-id", "acknowledgments" | first %}

Quantum Benchmark Zoo aims to give an overview on the protocols and studies established to evaluate the **performance** of **quantum computers**. This is a living survey, so feel free to <a href="{{ site.git.repository_url }}/blob/master/README.md" target="_blank">contribute</a>.  
Should you find any error or omission, either propose a pull request on our <a href="{{ site.git.repository_url }}" target="_blank">github</a> or contact the maintainer with a <a href="mailto:contact@quantumbenchmarkzoo.org">mail</a>.  
Any kind of help is welcomed and will be <a href="{{ ak.url | prepend: site.baseurl }}">acknowledged</a>.

# Our concerns

At the time of writing, quantum benchmarking protocols and experiments are flourishing, with several scientific papers published each day. This website aims to objectively describe each protocol to build a trustworthy catalog of benchmarking approaches. The second aim is to carefully report benchmark results using these protocols, verifying that the experiment complies with the protocol definition and reporting any variation in the protocol.

# Map of the zoo

*Click the node to reduce or expand it.*

<div class="my-mind-map" id="mind-map">
{%  include mindmap.html %}
</div>

# Website in construction

This website is still under construction. Any kind of help is welcomed !


<!--
## Zoo map

Put an image with the map of the website (2 colors: created and on creation)
-->

<!--
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
-->