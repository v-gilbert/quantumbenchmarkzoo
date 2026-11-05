---
title: Myriad-Q
description: >
  The MYRIAD-Q methodology aggregates quantum computing benchmarks into a single score using decision-maker preferences and multi-criteria analysis.
navbar-page-id: aggregated-scores
---

<div id="myriad-Q"></div>

# MYRIAD-Q 

In {% cite barbaresco2024bacq %}, F. Barbaresco et al. present a methodology to aggregate benchmarking scores to a single final score according to decision-maker preferences.

## Motivation

The motivations are numerous. The authors claim that existing figures of merit for measuring the performance of quantum computers are too technical and require other methodologies to derive operational indicators of performance associated with quantum computers. To address this gap, the proposed method aims to develop an assessment framework that can serve as a long-term tool for evaluating the performance of quantum computing systems.

## Protocol

The protocol is based on quantum applications across four domains in which quantum computers are believed to offer computational advantages:
- Quantum simulation
- Optimization
- Linear system solving
- Prime factorization

Several figures of merit (also called criteria) are identified for each domain. These figures of merit are then aggregated into a single score using Multi-Criteria Decision Aiding Analysis (MCDA) techniques in accordance with the MYRIAD-Q methodology.  
The first step involves normalizing each figure of merit using a *marginal utility* function. This function maps the values of each criterion onto a common scale within the range $$\mathopen{[} 0, \infty \mathclose{[}$$. For each figure of merit, $$k$$ different values are selected. The decision maker is asked to rank these values in a preferred order $${x_1, x_2, ..., x_k}$$, and to identify the rate of satisfaction for which $$x_i$$ is preferred to $$x_{i-1}$$. A six-level scale quantifies the rate of satisfaction from *very weak gain* to *extreme gain*. The *marginal utility* function $$u_i$$ associated with each criterion is then built, reflecting the subjective preference of the decision maker.  
The second step aggregates the normalized utility values using the two-additive Choquet integral. This approach permits to model potential overlaps between criteria. For instance, a high utility $$u_i$$ in one criterion may strongly correlate with a high utility $$u_j$$ in another. To determine the interaction coefficients required for the Choquet integral, the decision-maker is presented with hypothetical scenarios and asked to express preferences between them, along with corresponding satisfaction levels. An example scenario might ask whether a configuration with a high score in $$u_i$$​ and a low score in $$u_j$$​ is preferable to the inverse. From these comparative assessments, the Choquet integral's parameters are derived algorithmically.

## Limitations

As mentionned by the authors, the MYRIAD-Q score strongly depends on the decision maker subjective point of view, this figure of merit cannot be compared unless the exact same detailed protocol is replicated. 

## References

{% bibliography --cited %}