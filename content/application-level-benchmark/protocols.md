---
title: Application-level Protocols
description: >
  Application benchmarking protocols
---

# Application Benchmarking Protocols

## Protocols using volumetric representations

{% assign vb = site.application-protocols | where: "page-id", "volumetric-benchmark" | first %}
<!--
- <a href="{{ vb.url | prepend: site.baseurl }}">Volumetric benchmark</a>
-->

{% assign aq = site.application-protocols | where: "page-id", "algorithmic-qubit" | first %}
- <a href="{{ aq.url | prepend: site.baseurl }}">Algorithmic qubit</a> (2020)

In a nutshell, the number of algorithmic qubits evaluates the ability of quantum computers to run a quantum circuit reliably. This protocol is quite close to the volumetric benchmark protocol. This protocol assesses the performance of the quantum computer in running a diverse set of predefined quantum circuits.

## Protocols based on optimization problems
{% assign qscore = site.application-protocols | where: "page-id", "q-score-protocol" | first %}
- <a href="{{ qscore.url | prepend: site.baseurl }}">Q-score protocol</a> (2021)

In a nutshell, the Q-score protocol assesses the ability of quantum computers to solve specific optimization problems. It begins by selecting a representative optimization problem, such as MaxCut, along with a well-defined subset of instances (e.g., graphs with an average edge density of $$0.5$$). Within this subset, two theoretical values are derived: the optimal solution cost (the best achievable objective function value) and the expected cost of a randomly generated solution. A threshold is then defined from these two values. The Q-score defines the maximum instance size for which the quantum or classical algorithm returns better solution costs than the threshold.

## Protocols based on learning sampling tasks

{% assign qbas = site.application-protocols | where: "page-id", "qbas" | first %}
- <a href="{{ qbas.url | prepend: site.baseurl }}">qBAS-score protocol</a> (2018)

In a nutshell, the qBAS-score defines the ability of a variational quantum computer to learn and sample a predefined output distribution. This protocol is an instantiation of a more general framework used to benchmark gate-based quantum computers. The protocol is based on two major steps: An output sampling distribution is selected, and the first step consists of creating a fixed-depth variational quantum circuit whose parameters are optimized to mimic the output chosen sampling distribution. Once the parameters have been optimized, the qBAS score evaluates the performance of the quantum computer at approximating the sampling task. This score is based on the $$F_1$$ score, a well-defined metric used in classical machine learning.

