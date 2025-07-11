---
title: Presentation
description: >
  Presentation of the QuantumBenchmarkZoo: main objective, features and 
  other interesting resources.
---

# Welcome to Quantum Benchmark Zoo !
{% assign ak = site.nav.Zoo | where: "page-id", "acknowledgments" | first %}

Quantum Benchmark Zoo aims to give an overview of the protocols and studies established to evaluate the **performance** of **quantum computers**. This is a living survey, so feel free to <a href="{{ site.git.repository_url }}/blob/master/README.md" target="_blank">contribute</a>.  
Should you find any error or omission, either propose a pull request on our <a href="{{ site.git.repository_url }}" target="_blank">github</a> or contact the maintainer with a <a href="mailto:contact@quantumbenchmarkzoo.org">mail</a> at the address: **contact@quantumbenchmarkzoo.org**.  
Any kind of help is welcomed and will be <a href="{{ ak.url | prepend: site.baseurl }}" target="_blank">acknowledged</a>.

# Our concerns

At the time of writing, quantum benchmarking protocols and experiments are flourishing, with several scientific papers published daily. This website aims to objectively describe each protocol to build a trustworthy catalog of benchmarking approaches. The second aim is to carefully report benchmark results using these protocols, verifying that the experiment complies with the protocol definition and reporting any variation in the protocol.

# Map of the zoo

*Click the node to reduce or expand it.*

<div class="my-mind-map" id="mind-map">
{%  include mindmap.html %}
</div>

# Website in construction

This website is still under construction. Any kind of help is welcomed !
