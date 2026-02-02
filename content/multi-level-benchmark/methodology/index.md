---
title: Multi-level Benchmarking Methodologies
description: >
  Multi-level benchmarking methodologies
navbar-page-id: multi-level-methodologies
---

# Multi-level benchmarking methodologies

## Efficiency-oriented methodologies

{% assign mnr = site.multi-level-methodologies | where: "page-id", "MNR" | first %}
- <a href="{{ mnr.url | prepend: site.baseurl }}">Metric Noise Resource (MNR)</a> (2022) {% cite FellousAsiani2023 %}

In a nutshell, the MNR methodology aims to analyse and optimize the power consumption of quantum computers at different levels of the quantum stack. Since high-fidelity quantum operations demand a greater power consumption, identifying optimal operating points—where power usage is minimized and success probability is maximized—is highly desirable. The MNR approach provides valuable insight into these optimal *sweet spots*, enabling more efficient and reliable quantum computing.  

## Volumetric methodologies

{% assign vb = site.multi-level-methodologies | where: "page-id", "VB" | first %}
- <a href="{{ vb.url | prepend: site.baseurl }}">Volumetric Benchmark (VB)</a> (2019) {% cite BlumeKohout2020 %}

In a nutshell, the volumetric benchmark methodology analyses the running success of a set of quantum circuits considering their width (number of qubits) and depth (number of gates). It outlines regions (a combination of width and depth values) where the quantum computer can successfully run the circuit, called capability regions. These regions can then be used to predict the computer's performance running other tasks.

## References
{% bibliography --cited %}