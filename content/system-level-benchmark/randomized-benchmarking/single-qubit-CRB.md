---
title: Single-qubit Clifford Randomized Benchmarking
description: >
  Single-qubit Clifford Randomized Benchmarking
---

# Single-qubit Clifford Randomized Benchmarking (CRB)

## Motivations

Single qubit randomized benchmarking was first proposed by E. Knill et al. {% cite knill2008randomized %} in 2007. At the time, process tomography was the most commonly used method to benchmark quantum gates. However, this method does not scale when the system size grows, and it becomes challenging to identify low error rates. A second issue associated with process tomography is that the error related to state preparation and measurements cannot be distinguished from the error of the quantum gate. RB method has been designed to address these two limitations with an implementation that favorably scales with the number of qubits and a way to remove SPAM errors.

## Protocol

The circuit associated to single-qubit CRB is depicted in the figure. Each gate $$G_i$$ consist of a rotation pulse of the Clifford group combined with a rotation pulse $$P_i$$ that depolarize the noise (under markovian assumption). The invertion gate $$R$$ is efficiently computed from the sequence $$G_lG_{l-1}...G_1$$ {% cite gottesman1997stabilizer %} to get an eigenstate of the measurement basis. The success metric is the probability of observing the final determinist state. It is estimated for different lengths $$l$$ and used to fit the exponential decay function.

<div class="center">
  <img src="/img/system-level-benchmark/randomized/RB-clifford-single-qubit.png" class="img-medium" alt="Quantum circuit associated to the single-qubit clifford randomized benchmarking protocol"/>
</div>

## Assumptions

- This protocol assumes that the noise model is Markovian.
<!-- See the impact oof such assumption -->

## Limitations

- This protocol is only valid for estimating the error rate of single-qubit gates of the Clifford group.

# References
{% bibliography --cited %}