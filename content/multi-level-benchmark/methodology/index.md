---
title: Multi-level Benchmarking Methodologies
description: >
  Multi-level benchmarking methodologies
---

# Multi-level benchmarking methodologies

## Efficiency-oriented methodologies

{% assign mnr = site.multi-level-methodologies | where: "page-id", "MNR" | first %}
- <a href="{{ mnr.url | prepend: site.baseurl }}">Metric Noise Resource (MNR)</a> (2022)

In a nutshell, the MNR methodology aims to analyse and optimize the power consumption of quantum computers at different levels of the quantum stack. Since high-fidelity quantum operations demand a greater power consumption, identifying optimal operating points—where power usage is minimized and success probability is maximized—is highly desirable. The MNR approach provides valuable insight into these optimal *sweet spots*, enabling more efficient and reliable quantum computing.

