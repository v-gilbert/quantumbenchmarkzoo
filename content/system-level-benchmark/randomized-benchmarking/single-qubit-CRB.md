---
description: >
  Single-qubit Clifford Randomized Benchmarking
---

# Single-qubit Clifford Randomized Benchmarking

## Motivations

Single qubit randomized benchmarking was first proposed by E. Knill et al. {% cite knill2008randomized %} in 2007. At the time, process tomography was the most commonly used method to benchmark quantum gates. However, this method does not scale when the system size grows, and it becomes challenging to identify low error rates. A second issue associated with process tomography is that the error related to state preparation and measurements cannot be distinguished from the quantum gate error. RB method has been designed to be resistant to State preparation and Measurement (SPAM) errors.

## Protocol

The circuit associated to single-qubit RB is depicted in the figure. Each gate $$G_i$$ consist of a rotation pulse of the Clifford group combined with a rotation pulse $$P_i$$ that depolarize the noise (under markovian assumption). The invertion gate $$R$$ is efficiently computed from the sequence {% cite gottesman1997stabilizer %} to get an eigenstate of the measurement basis. The success metric is the probability of observing the final determinist state. It is estimated for different lengths $$l$$ and used to fit the exponential decay function.

<div class="center">
  <img src="/img/system-level-benchmark/randomized/RB-clifford-single-qubit.png" class="img-medium" alt="Quantum circuit associated to the single-qubit clifford randomized benchmarking protocol"/>
</div>

## Limitations

- This protocol can only benchmark single-qubit gates.
- This protocol is only using gates from the Clifford group.
- As many RB approaches, this protocols assumes that the model of noise is Markovian.

# References
{% bibliography --cited %}