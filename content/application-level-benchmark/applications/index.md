---
title: Applications
description: >
  Application-oriented benchmarks. Recaps the benchmarking results of the litterature for use cases and applications
---

# Applications

## Factorization

<!-- Add In a nutshell section there and link to the detailed page -->

{% assign factorization = site.applications-benchmarks | where: "page-id", "factorization" | first %}

Link to the factorization details: <a href="{{ factorization.url | prepend: site.baseurl }}">Factorization Applications</a>