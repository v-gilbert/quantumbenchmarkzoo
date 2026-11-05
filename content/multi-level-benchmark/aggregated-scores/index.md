---
title: Aggregated scores
description: >
  Aggregated score methodologies
navbar-page-id: aggregated-scores
---

# Aggregated scores

## List of quantum-specific methodologies

{% assign myriadq = site.aggregated-scores | where: "page-id", "Myriad-Q" | first %}
- <a href="{{ myriadq.url | prepend: site.baseurl }}">Myriad-Q</a> (2024) {% cite barbaresco2024bacq %}: In a nutshell, the MYRIAD-Q methodology aggregates multiple quantum computing performance metrics into a single score based on decision-maker preferences. It uses Multi-Criteria Decision Analysis (MCDA) to normalize individual metrics according to subjective utility functions and combine them using a Choquet integral, which accounts for interactions between criteria. The resulting score reflects the decision-maker's priorities.

{% assign quas = site.aggregated-scores | where: "page-id", "QuAS" | first %}
- <a href="{{ quas.url | prepend: site.baseurl }}">Quantum Application Score (QuAS)</a> (2024) {% cite mesman2024quas %}: In a nutshell, the Quantum Application Score (QuAS) methodology combines multiple Key Performance Indicators (KPIs) into a single score to evaluate quantum computer performance on optimization problems. It analyzes the trade-offs between KPIs, such as solution quality and runtime, by approximating Pareto fronts and computing the areas under the resulting curves across different problem sizes.

{% assign metriq-score = site.aggregated-scores | where: "page-id", "Metriq-score" | first %}
- <a href="{{ metriq-score.url | prepend: site.baseurl }}">Metriq Score</a> (2026) {% cite cosentino2026metriq %}: In a nutshell, the Metriq Score methodology aggregates results from multiple system-level and application-level quantum benchmarking protocols into a single performance score. Individual benchmark results are first combined across circuit or problem sizes, normalized against a reference quantum computer, and then aggregated using a weighted average.

## References
{% bibliography --cited %}