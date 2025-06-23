---
title: Multi-qubit Clifford Randomized Benchmarking
description: >
  Multi-qubit Clifford Randomized Benchmarking (CRB)
---

# Multi-qubit Clifford Randomized Benchmarking (CRB)

## Motivations

{% assign single-qubit-CRB = site.randomized-benchmarking-protocols | where: "page-id", "single-qubit-CRB" | first %}
<!-- TODO: ref to single qubit RB -->
The primary motivation behind the development of multi-qubit Clifford Randomized Benchmarking was to generalize the <a href="{{ single-qubit-CRB.url | prepend: site.baseurl }}" target="_blank">single-qubit randomized benchmarking</a> protocol to systems comprising multiple qubits. This extended protocol was introduced in 2010 by E. Magesan et al. {% cite magesan2011scalable %}.

## Protocol

The protocol utilizes the multi-qubit Clifford group $$C_n$$ to benchmark a quantum system with $$n$$ qubits. For each sequence length $$l$$, Clifford gates are uniformly and efficiently sampled from $$C_n$$ {% cite Koenig2014 %}. Each gate of the Clifford group is efficiently decomposed in a sequence of single and two-qubit gates, with depth scaling as $$O(n^2 / \log(n))$$. The inverse unitary $$R$$ is efficiently computed from the sequence $$g_lg_{l-1}...g_1$$ {% cite gottesman1997stabilizer %}, and a final unitary $$P$$ consists of a uniformly random Pauli gate $$P$$. The success metric is the probability of observing the Identity up to the random Pauli gate. It is estimated for the different lengths $$l$$ and used to fit the exponential decay function.

<div class="center">
  <img src="/img/system-level-benchmark/randomized/RB-clifford-multi-qubit.png" class="img-medium" alt="Quantum circuit associated to the multi-qubits clifford randomized benchmarking protocol"/>
</div>

## Assumptions

- This protocol assumes that the noise model is Markovian.

## Limitations

- One limitation identified by the community concerns the depth scaling associated with the decomposition of each gate of the Clifford group $$C_n$$. As the number of qubits increases, the implementation becomes increasingly challenging, and circuit fidelity tends to degrade rapidly in the presence of noise.

- The output fidelity of the quantum circuit also strongly depends on the compilation process used to map each Clifford gate to the gate set natively used by the quantum computer. Inefficiencies or suboptimal strategies in this step can significantly impact the benchmarking results.

# References
{% bibliography --cited %}