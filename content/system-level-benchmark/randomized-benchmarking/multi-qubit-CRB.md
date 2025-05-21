---
description: >
  Multi-qubit Clifford Randomized Benchmarking
---

# Multi-qubit Clifford Randomized Benchmarking

## Motivations

- Extend the single-qubit RB to multi-qubit clifford group $$C_n$$.

## Protocol

- For each sequence length, Clifford gates are uniformely and efficiently sampled from $$C_n$$ {% cite Koenig2014 %}. The depth of the quantum circuit associated to each $$C_n$$ grows as $$O(n^2 / \log(n))$$.
- The invertion unitary $$R$$ is efficiently computed from the sequence {% cite gottesman1997stabilizer %}. The final unitary $$P$$ is a uniformely random Pauli gate.
- The success metric is the probability of observing the Identity. It is estimated for different lengths $$l$$ and used to fit the exponential decay function.

<div class="center">
  <img src="/img/system-level-benchmark/randomized/RB-clifford-multi-qubit.png" class="img-medium" alt="Quantum circuit associated to the multi-qubits clifford randomized benchmarking protocol"/>
</div>

## Limitations
- Each gate of the Clifford group $$C_n$$ has an implementation cost of $$O(n^2 / \log(n))$$ single and two qubit gates
- Strongly dependent on the compilation step

Litterature: {% cite magesan2011scalable %}
