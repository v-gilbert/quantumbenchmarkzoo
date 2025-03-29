---
description: >
  Application benchmarking protocols
---

# Application Benchmarking Protocols

## Protocols based on Optimization problems
{% assign qscore = site.application-protocols | where: "page-id", "q-score-protocol" | first %}
- <a href="{{ qscore.url | prepend: site.baseurl }}">Q-score protocol</a>\
In a nutshell, the Q-score protocol assesses the ability of quantum computers to solve specific optimization problems. It begins by selecting a representative optimization problem, such as MaxCut, along with a well-defined subset of instances (e.g., graphs with an average edge density of $$0.5$$). Within this subset, two theoretical values are derived: the optimal solution cost (the best achievable objective function value) and the expected cost of a randomly generated solution. A threshold is then defined from these two values. The Q-score defines the maximum instance size for which the quantum or classical algorithm returns better solution costs than the threshold.
