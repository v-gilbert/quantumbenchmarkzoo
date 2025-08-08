---
title: Interleaved Randomized Benchmarking
description: >
  Interleaved Randomized Benchmarking
---

{% assign multi-qubit-CRB = site.randomized-benchmarking-protocols | where: "page-id", "multi-qubit-CRB" | first %}

#  Interleaved Randomized Benchmarking (IRB)

## Motivation

The Interleaved Randomized Benchmarking (IRB) protocol was proposed in 2012 by E. Magesan et al. {% cite magesan2012efficient %} after the <a href="{{ multi-qubit-CRB.url | prepend: site.baseurl }}" target="_blank">multi-qubits Clifford Randomized Benchmarking</a> protocol. The IRB aims to evaluate the average error rate of individual Clifford gates, which was impossible with the multi-qubit CRB method.

## Protocol

The protocol consists of two experiments. The first experiment consists of running a multi-qubit CRB to extract the decay parameter $$\alpha_\mathrm{crb}$$ and the corresponding Error Per Clifford $$r_\mathrm{crb}$$. The following figure recalls the circuit corresponding to the multi-qubit CRB protocol:

<div class="center">
  <img src="/img/system-level-benchmark/randomized/IRB-1.png" class="img-medium" alt="Quantum circuit associated to the multi-qubit clifford randomized benchmarking protocol"/>
</div>

The second experiment aims to evaluate the error rate of the n-qubit Clifford gate of interest $$G$$. The gate $$G$$ is interleaved with random $$n$$-qubit Clifford gates $$g_1$$ up to $$g_l$$. The final gate $$g_\mathrm{end}$$ aims to reverse the complete sequence of gates.

<div class="center">
  <img src="/img/system-level-benchmark/randomized/IRB-2.png" class="img-large" alt="Quantum circuit associated to the multi-qubit clifford randomized benchmarking protocol"/>
</div>

This second experiment aims to extract the decay parameter $$\alpha_\mathrm{irb}$$ and the corresponding error rate $$r_\mathrm{irb}$$. In practise, $$\alpha_\mathrm{irb}$$ should decay faster than $$\alpha_\mathrm{crb}$$ due to the additional inserted gates $$G$$. The infidelity $$r_\mathrm{G}$$ of the gate $$G$$ is then estimated as:

$$r_\mathrm{G} = r_\mathrm{crb} - r_\mathrm{irb}.$$

This method also permits to extract bounds on the true error rate of $$G$$ $$\epsilon_\mathrm{G}$$ (see. equation 5 of {% cite magesan2012efficient %}).

## Assumptions

- The noise variation between the Clifford gates $$g_i$$ should be small.
- This protocol relies on the same assumptions of the multi-qubit CRB protocol (i.e., noise should be depolarizing and Markovian).

## Limitations

- This method does not provide a very reliable estimate of the fidelity of the gate $$G$$ as unitary errors can coherently add or cancel with each others. Consequently, this protocol can produce negative error rates. It can leads to large differences between the measured error rate $$r_\mathrm{G}$$ and the true error rate $$\epsilon_\mathrm{G}$$ associated with the gate $$r_\mathrm{G}$$.
- This protocol inherits from the same limitations of the multi-qubit CRB protocol (as depth scaling and dependence over compilation strategies).

## Extensions

The IRB protocol has been extended to other gates that are not from the Clifford group {% cite harper2017estimating %} {% cite Garion2021 %}.

# References
{% bibliography --cited %}