---
description: >
  Protocols used for randomized benchmarking
---

# Randomized Benchmarking Protocols

## Sampling problems

{% assign hog = site.randomized-protocols.sampling-problems | where: "page-id", "hog-problem" | first %}
- <a href="{{ hog.url | prepend: site.baseurl }}">Heavy Output Generation Problem</a>

## Quantum volume protocols

{% assign qv = site.randomized-protocols.volume-benchmarks | where: "page-id", "quantum-volume" | first %}
- <a href="{{ qv.url | prepend: site.baseurl }}">Quantum Volume</a>

## Randomized benchmarking protocols

Page in construction ...