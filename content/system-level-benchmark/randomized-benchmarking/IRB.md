---
title: Interleaved Randomized Benchmarking
description: >
  Interleaved Randomized Benchmarking (IRB): a method that estimates the error rate of a specific gate by interleaving it with random Clifford gates.
---

{% assign multi-qubit-CRB = site.randomized-benchmarking-protocols | where: "page-id", "multi-qubit-CRB" | first %}

#  Interleaved Randomized Benchmarking (IRB)

## Motivation

The Interleaved Randomized Benchmarking (IRB) protocol was proposed in 2012 by E. Magesan et al. {% cite magesan2012efficient %} after the <a href="{{ multi-qubit-CRB.url | prepend: site.baseurl }}" target="_blank">multi-qubit Clifford Randomized Benchmarking</a> protocol. The IRB aims to evaluate the average error rate of individual Clifford gates, which was impossible with the multi-qubit CRB method (which evaluates the average error rate of a Clifford group).

## Protocol

The protocol consists of two experiments. The first experiment involves running a <a href="{{ multi-qubit-CRB.url | prepend: site.baseurl }}" target="_blank">multi-qubit CRB</a> to extract the decay parameter $$\alpha_\mathrm{crb}$$ and the corresponding Error Per Clifford $$r_\mathrm{crb}$$. The following figure recalls the circuit corresponding to the multi-qubit CRB protocol:

<div class="center">
  <img src="/img/system-level-benchmark/randomized/IRB-1.png" class="img-medium" alt="Quantum circuit associated to the multi-qubit clifford randomized benchmarking protocol"/>
</div>

The second experiment aims to evaluate the error rate of the n-qubit Clifford gate of interest $$G$$. The gate $$G$$ is interleaved with the random $$n$$-qubit Clifford gates $$g_1$$ up to $$g_l$$. The final gate $$g_\mathrm{end}$$ aims to reverse the complete sequence of gates.

<div class="center">
  <img src="/img/system-level-benchmark/randomized/IRB-2.png" class="img-large" alt="Quantum circuit associated to the multi-qubit clifford randomized benchmarking protocol"/>
</div>

This second experiment aims to extract the decay parameter $$\alpha_\mathrm{irb}$$ and the corresponding error rate $$r_\mathrm{irb}$$. In practise, $$\alpha_\mathrm{irb}$$ should decay faster than $$\alpha_\mathrm{crb}$$ due to the additional inserted gates $$G$$. The infidelity $$r_\mathrm{G}$$ of the gate $$G$$ is then estimated with the following approximation:

$$r_\mathrm{G} \approx r_\mathrm{crb} - r_\mathrm{irb}.$$

This method also extracts bounds on the true error rate of G (see equation 5 of {% cite magesan2012efficient %}).

## Assumptions

- This protocol relies on the same assumptions of the <a href="{{ multi-qubit-CRB.url | prepend: site.baseurl }}" target="_blank">multi-qubit CRB protocol</a> (i.e., noise should be depolarizing and Markovian).
- The noise variation between the Clifford gates $$g_i$$ should be small. Bounds on the error rate can be estimated (see Step 3 of the protocol in {% cite magesan2012efficient %}).

## Limitations

- This protocol inherits from the same limitations of the <a href="{{ multi-qubit-CRB.url | prepend: site.baseurl }}" target="_blank">multi-qubit CRB protocol</a> (as depth scaling and dependence on compilation strategies).
- As mentioned in {% cite Hashim2024 %} and {% cite epstein2014investigating %}, the errors associated with the gate $$G$$ can coherently add or cancel with the errors of the Clifford gate, leading to unreliable estimation of the gate fidelity in some cases. It can lead to large differences between the measured error rate $$r_\mathrm{G}$$ and the true error rate $$\epsilon_\mathrm{G}$$ associated with the gate $$r_\mathrm{G}$$.
- It has been shown in {% cite epstein2014investigating %} that the fidelity estimation is inaccurate when the interleaved gate has a much lower error rate than the average error rate of the Clifford gates.

## Extensions

The IRB protocol has been extended to other gates that are not from the Clifford group (see {% cite harper2017estimating %} for the evaluation of the T gate and {% cite Garion2021 %} for the assessment of the control-phase gate).

## Implementation

A tutorial for implementing IRB is available in the <a href="https://gitlab.npl.co.uk/qc-metrics-and-benchmarks/qcmet/-/tree/main/tutorials/gate_execution_quality_metrics/randomized_benchmarking/interleaved_clifford_randomised_benchmarking" target="_blank">QCMet software repository</a>.  
An implementation of the IRB protocol developed by IQM is available in their <a href="https://github.com/iqm-finland/iqm-benchmarks/tree/main" target="_blank">Benchmark suite</a>.  
Another implementation is available in the <a href="https://pygsti.readthedocs.io/en/latest/autoapi/pygsti/protocols/rb/index.html#pygsti.protocols.rb.InterleavedRBDesign" target="_blank">pyGSTi library</a>.  

## References
{% bibliography --cited %}