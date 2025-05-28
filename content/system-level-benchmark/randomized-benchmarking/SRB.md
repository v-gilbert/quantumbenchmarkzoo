---
title: Simultaneous Randomized Benchmarking
description: >
  Simultaneous Randomized Benchmarking
---

# Simultaneous Randomized Benchmarking

## Motivations
- Definition of a protocol that quantifies the rate of cross-talk errors arising during the parallel execution of quantum gates.
- Evaluation of the correlations in the error rates.

## Protocol
We illustrate the protocol for the case of single-qubit Clifford group simultaneous RB on a two-qubit chip.
- The protocol begins with the standard RB protocol performed for each qubit (see Step 1): A single-qubit Clifford RB is executed on one qubit while others are kept idle. The decay parameters $$\alpha_1$$ and $$\alpha_2$$ are then extracted respectively for qubit 1 and qubit 2. 
- In a second step, a single-qubit RB is run simultaneously on both qubits, enabling the extraction of three decay parameters (see Step 2): $$\alpha_{1 \vert 2}$$, $$\alpha_{2 \vert 1}$$ and $$\alpha_{12}$$. The parameters $$\alpha_{1 \vert 2}$$ and $$\alpha_{2 \vert 1}$$ are obtained from measurements of the first and second qubit. The joint decay parameter $$\alpha_{12}$$ is retrieved from the measurements of qubit 1 and 2.
- The values $$\alpha_{1}$$ and $$\alpha_{1 \vert 2}$$ (resp. $$\alpha_{2}$$ and $$\alpha_{2 \vert 1}$$) can be used to measure the errors added on qubit 1 (resp. 2) due to simultaneous quantum gates operations on qubit 2 (resp. 1). 
- Potential correlations in the errors are obtained with the value $$\alpha_{12} -\alpha_{1 \vert 2} \alpha_{2 \vert 1}$$.

<div class="center">
  <img src="/img/system-level-benchmark/randomized/RB-simultaneous.png" class="img-medium" alt="Quantum circuit associated to the simultaneous randomized benchmarking protocol"/>
</div>

## Limitations

<!-- Add something on the limitations -->

<!-- 
### Protocol Assumptions

- Quantum noise can be represented by a quantum operation that do not depend on the choice of the unitary.
- Quantum noise has low variations in error-rate over the gate set.
- The correlation time of the environment is much longer than the time of a single operation.
- Randomization depolarize the noise (Clifford gates have the property of depolarizing the noise). It avoids to use the self-inversion.
- The depolarization probability of $$\frac{\pi}{2}$$ pulses does not depend on the previous pulse in the calculation.
-->


Litterature: {% cite Gambetta2012 %}, {% cite McKay2019 %}, {% cite mckay2023benchmarking %}

# References

{% bibliography --cited %}