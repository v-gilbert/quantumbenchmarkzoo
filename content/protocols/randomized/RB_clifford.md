---
description: >
  Clifford Randomized Benchmarking
---

The Standard Clifford Randomized Benchmarking method is introduced by E. Knill in {% cite knill2008randomized %}. This method is developped in collaboration with the NIST (National Institute of Standards and Technology). It has been extended to the group of multi-qubit Clifford gates in {% cite magesan2011scalable %}.
<!--
It is by design robust to State Preparation and Measurements (SPAM) errors. The aim is to evaluate the average error rate per quantum operation on a single qubit. In RB, the average error per gate is obtained by measuring the increase in error probability as the gate sequence length increases.
-->

# Single-qubit Clifford Randomized Benchmarking

The protocol consists in building sequences of gates of different lengths $$l \in \{l_1, l_2, ..., l_N\}$$. For each length, a random sequence of gates $$(G_1, G_2, ..., G_l)$$ is generated where $$G_i$$ is a $$\frac{\pi}{2}$$ rotation pulse from the Clifford Group of the form $$e^{\pm i \sigma_a \pi/4}$$ where $$a$$ is chosen uniformely among $$\{x, y\}$$. The noise is depolarized owing to the randomly generated sequence $$(P_1, P_2, ..., P_{l+2})$$ gates where $$P_i$$ is a $$\pi$$ rotation pulse from the Clifford Group of the form $$e^{\pm i \sigma_b \pi/2}$$ where $$b$$ is chosen uniformely from $$\{0, x, y, z\}$$. In this case, $$\sigma_0$$ denotes the identity. The measurement of the quantum state is done in the $$z$$-basis. For ideal implementation, the final measurement has to be deteminist. The gate $$R$$ is defined from the ideal application of $$(G_1, G_2, ..., G_l)$$ to the state $$\ket{0}$$, to transform the state $$G_l...G_2G_1\ket{0}$$ to an eigenstate of the measurement operator in the $$z$$-basis. Hence, $$R$$ is a $$\frac{\pi}{2}$$ pulse of the form $$e^{\pm i \sigma_c \pi/4}$$ where $$c \in \{x, y\}$$ is chosen according to the result of the ideal computation. For every gate $$G_i$$, $$$P_i$$ and $$R$$, $$\pm$$ is chosen uniformely at random. Single Clifford gates have a the corresponding circuit:

<!-- Circuit randomized benchmarking -->

This circuit is then measured $$N_e$$ times to estimate the probability of observing the ideal state in the $$z$$-basis (denoted probability of sucess). This probability of sucess, computed from the different lengths $$l \in \{l_1, l_2, ..., l_N\}$$ is then used to fit the exponential function to extract the average gate fidelity.

<!--
Each sequence of fixed length $$(G_1, G_2, ..., G_l)$$ is run with several sets of Pauli gates $$(P_1, P_2, ..., P_{l+2})$$.
-->

# Multi-qubit Clifford Randomized Benchmarking

The protocol is similar for multi-qubit clifford gates presented in {% cite magesan2011scalable %} by E. Magesan et al. For each sequence length a random sequence of gates is uniformely and efficiently sampled from the $$n$$-qubit Clifford group {% cite Koenig2014 %}. The invertion gate is then efficiently commputed for this sequence {% cite gottesman1997stabilizer %}. The probability of sucess (i.e., probability of observing an identity operation) is then computed from these circuits and used to fit the exponential function.

E. Magesan et al. also propose another fitting function that measure the degree of gate-dependence in the errors:

$$ A p^m + B + C(m-1)(q-p^2)p^{m-2} $$

where $$A$$, $$B$$ and $$C$$ absorb the SPAM errors and $$(q-p^2)$$ measure the degree of gate-dependence in the error.

# Protocol Assumptions

- Quantum noise can be represented by a quantum operation that do not depend on the choice of the unitary.
- Quantum noise has low variations in error-rate over the gate set.
- The correlation time of the environment is much longer than the time of a single operation.
- Randomization depolarize the noise (Clifford gates have the property of depolarizing the noise). It avoids to use the self-inversion.
- The depolarization probability of $$\frac{\pi}{2}$$ pulses does not depend on the previous pulse in the calculation.

<!-- The noise is Markovian -->