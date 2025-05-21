---
description: >
  Single-qubit Clifford Randomized Benchmarking
---

# Single-qubit Clifford Randomized Benchmarking

## Motivations
- Create a protocol that is resistant to state preparation and measurement (SPAM) errors.
- Obtain a better scalability compared to process tomography.

## Protocol
- Each gate $$G_i$$ consist of a rotation pulse of the Clifford group combined with a rotation pulse $$P_i$$ that depolarize the noise (under markovian assumption).
- The invertion gate $$R$$ is efficiently computed from the sequence {% cite gottesman1997stabilizer %} to get an eigenstate of the measurement basis.
- The success metric is the probability of observing the final determinist state. It is estimated for different lengths $$l$$ and used to fit the exponential decay function.

<div class="center">
  <img src="/img/system-level-benchmark/randomized/RB-clifford-single-qubit.png" class="img-medium" alt="Quantum circuit associated to the single-qubit clifford randomized benchmarking protocol"/>
</div>

## Limitations
- This protocol can only benchmark a single qubit.
- This protocol is only using gates from the Clifford group.

Litterature: {% cite knill2008randomized %}
