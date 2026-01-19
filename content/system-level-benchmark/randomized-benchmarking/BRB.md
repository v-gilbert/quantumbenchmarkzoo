---
title: Binary Randomized Benchmarking
description: >
  Binary Randomized Benchmarking: a quantum benchmarking method using Pauli eigenstates and random gate sequences, without motion reversal.
navbar-page-id: randomized-benchmarks
---

#  Binary Randomized Benchmarking (BRB)

{% assign multi-qubit-CRB = site.randomized-benchmarking-protocols | where: "page-id", "multi-qubit-CRB" | first %}
{% assign DRB = site.randomized-benchmarking-protocols | where: "page-id", "DRB" | first %}
{% assign SRB = site.randomized-benchmarking-protocols | where: "page-id", "SRB" | first %}
{% assign MRB = site.randomized-benchmarking-protocols | where: "page-id", "MRB" | first %}

## Motivations
The Binary Randomized Benchmarking (BRB) protocol was proposed in 2023 by J. Hines et al. in {% cite Hines2024 %}. It initially aims to be more scalable than <a href="{{ multi-qubit-CRB.url | prepend: site.baseurl }}" target="_blank">multi-qubit Clifford RB</a> and <a href="{{ DRB.url | prepend: site.baseurl }}" target="_blank">Direct RB</a> by removing the stabilizer initialization that requires $$O \left(n^2 / \log(n) \right)$$ single and two-qubit gate depth.

## Protocol
The main difference between BRB and other existing RB protocols is that it does not implement an identity where the whole computation gets cancelled by the $$g_\mathrm{end}$$ gate. The initial state $$\rho_0$$ is obtained with a layer of single-qubit gates (yellow boxes in the figure) that prepare the $$+1$$ eigenstate of a uniformly randomly chosen $$n$$-qubit Pauli Operator. The following sequence of $$g_i$$ gates is built according to the user's probability distribution $$\mu$$ (as in the DRB protocol). The last layer $$g_\mathrm{end}$$ is a single-qubit gate layer (yellow boxes in the figure) that transforms the quantum state into a tensor product of $$Z$$ and $$I$$ operators. The success metric is the probability of observing the $$+1$$ eigenstate of the tensor product (the output is generally not deterministic, meaning that $$50\%$$ of bitstrings are considered successes and others are failure). The success probability permits reconstructing the average error rate of a single layer of random gates $$g_i$$.  
Interestingly, the authors of BRB explain that this protocol may be better suited for a combination with <a href="{{ SRB.url | prepend: site.baseurl }}" target="_blank">Simultaneous Randomized Benchmarking</a> than multi-qubit Clifford RB or Direct RB, essentially owing to the the state preparation and measurement layers that are more simply implemented in BRB. They also show that the BRB protocol provides a more precise estimation of the fidelity than the <a href="{{ MRB.url | prepend: site.baseurl }}" target="_blank">Mirror Randomized Benchmarking protocol</a>.

<div class="center">
  <img src="/img/system-level-benchmark/randomized/RB-BiRB.png" class="img-medium" alt="Quantum circuit associated to the Binary randomized benchmarking protocol"/>
</div>

## Assumptions
- This protocol assumes that the noise model is Markovian, meaning that the noise of a gate does not depend on the sequence of previous gates (history-independent).
- The average error of all gates is depolarizing.
- The sampled average fidelity of the random sequences must quickly converge to the average for all possible sequences, as only a small fraction of all possible sequences is being implemented.
- The error should be locally randomized (the basis of the error should be randomized on the $$X$$, $$Y$$, and $$Z$$ axis) and delocalized (see II.B of {% cite Hines2024 %} for mathematical details). These properties ensures that the fidelity will fit an exponential decay. 

## Limitations 

- This protocol can benchmark any set of gates able to generate the Clifford group, but it only scales well for the benchmarking of Clifford gate sets.

## Extension

This protocol has been extended to benchmark mid-circuit measurements in {% cite Hothem2025 %}.

## Implementation

An implementation of the BRB protocol is available in the <a href="https://pygsti.readthedocs.io/en/latest/autoapi/pygsti/protocols/index.html#pygsti.protocols.BinaryRBDesign" target="_blank">pyGSTi library</a>.

## References

{% bibliography --cited %}