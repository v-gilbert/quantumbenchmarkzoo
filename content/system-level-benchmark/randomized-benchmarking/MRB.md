---
title: Mirror Randomized Benchmarking
description: >
  Mirror Randomized Benchmarking
---

# Mirror Randomized Benchmarking (MRB)

## Motivations
- Finding a scalable protocol which do not require heavy classical processing to evaluate the output of the quantum circuit

## Protocol
- The initial state $$\rho_0$$ is prepared with a random layer of single-qubit Clifford gate (24 possible gates). This layer is inversed at the end of the circuit.
- An $$l$$-depth circuit contains $$l/2$$ layers of $$\mu$$-distributed random gates $$G_1, G_2, ... G_{l/2}$$ and $$l/2$$ layers of the reversed gates.
- The layers of random gates are interleaved with random Pauli gates that are used to twirl the noise (yellow boxes).
- The figure of merit for success is computed from the hamming distance between the sampled and success bitstring.

<div class="center">
  <img src="/img/system-level-benchmark/randomized/RB-mirror.png" class="img_large" alt="Quantum circuit associated to the Mirror randomized benchmarking protocol"/>
</div>

## Limitations
- If the errors of $$\mu$$-distributed gates and their inverse are correlated, MRB slightly underestimates the error rate of the gate set.

# References

{% bibliography --cited %}