---
title: Aggregated Scores
description: >
  Aggregated Scores
---

# Aggregated scores

<div id="myriad-Q"></div>

## MYRIAD-Q aggregated figure of merit (2024)

In {% cite barbaresco2024bacq %}, F. Barbaresco et al. present a methodology to aggregate benchmarking scores to a single final score according to decision-maker preferences.

### Motivation

The motivations are numerous. The authors claim that existing figures of merit for measuring the performance of quantum computers are too technical and require other methodologies to derive operational indicators of performance associated with quantum computers. To address this gap, the proposed method aims to develop an assessment framework that can serve as a long-term tool for evaluating the performance of quantum computing systems.

### Protocol

The protocol is based on quantum applications across four domains in which quantum computers are believed to offer computational advantages:
- Quantum simulation
- Optimization
- Linear system solving
- Prime factorization

Several figures of merit (also called criteria) are identified for each domain. These figures of merit are then aggregated into a single score using Multi-Criteria Decision Aiding Analysis (MCDA) techniques in accordance with the MYRIAD-Q methodology.  
The first step involves normalizing each figure of merit using a *marginal utility* function. This function maps the values of each criterion onto a common scale within the range $$\mathopen{[} 0, \infty \mathclose{[}$$. For each figure of merit, $$k$$ different values are selected. The decision maker is asked to rank these values in a preferred order $${x_1, x_2, ..., x_k}$$, and to identify the rate of satisfaction for which $$x_i$$ is preferred to $$x_{i-1}$$. A six-level scale quantifies the rate of satisfaction from *very weak gain* to *extreme gain*. The *marginal utility* function $$u_i$$ associated with each criterion is then built, reflecting the subjective preference of the decision maker.  
The second step aggregates the normalized utility values using the two-additive Choquet integral. This approach permits to model potential overlaps between criteria. For instance, a high utility $$u_i$$ in one criterion may strongly correlate with a high utility $$u_j$$ in another. To determine the interaction coefficients required for the Choquet integral, the decision-maker is presented with hypothetical scenarios and asked to express preferences between them, along with corresponding satisfaction levels. An example scenario might ask whether a configuration with a high score in $$u_i$$​ and a low score in $$u_j$$​ is preferable to the inverse. From these comparative assessments, the Choquet integral's parameters are derived algorithmically.

### Limitations

As mentionned by the authors, the MYRIAD-Q score strongly depends on the decision maker subjective point of view, this figure of merit cannot be compared unless the exact same detailed protocol is replicated. 

<div id="quas"></div>

## Quantum Application Score (QuAS) (2024)

The Quantum Application Score (QuAS) {% cite mesman2024quas %} was introduced by K. J. Mesman et al. in 2024 and aims to define a framework to compute a single score from different Key Performance Indicators (KPIs) chosen by the user when solving an optimization problem.

### Motivation

The motivation for this framework is to establish a protocol that accommodates multiple degrees of freedom with respect to the problem instances being benchmarked and the performance metrics evaluated. The authors aim to facilitate an equitable analysis across the different KPIs being benchmarked using this method.

### Protocol

The initial stage of the protocol is dedicated to identifying the set of KPIs relevant to the benchmark study. The authors illustrate this with an example involving three primary KPIs: the problem size, the solution quality, and the runtime of the quantum device. In their example, the quality of the solution obtained with the quantum computer is expressed concerning a reference solution found classically.  
For a fixed problem size, data points are collected using different problem instances and varying runtimes. These data points are then plotted in a two-dimensional plane, where one axis represents solution quality and the other runtime. Both axes are normalized to the $$[0, 1]$$ range. The Pareto front between solution quality and runtime is approximated using Lamé curves (see Figure). Data points of the same color correspond to problem instances of the same size. The area under each curve is computed, with larger integrals indicating better performance. These integrals are summed across all problem sizes (blue and red), giving the final QuAS score. The quantum computer achieving the highest QuAS score is identified as the most effective computer for solving the target problem.

<div class="center">
  <img src="/img/application-level-benchmark/QuAS.png" class="img-small" alt="Curves associated with the protocol QuAS"/>
</div>

Each KPI can be weighted according to the user's choice, and offsets can be added to each quantity to normalize the score.

### Limitations

As mentioned by the authors, the QuAS score defines a methodology and not a precise setting of KPIs and weights associated with each KPI. Hence, comparing two QuAS scores from different studies cannot be done.  
The QuAS framework is only adapted to assess the performance of quantum computers on problems in which solutions can be expressed with a single number. This method is not adapted to multi-objective optimization problems.

# References
{% bibliography --cited %}
