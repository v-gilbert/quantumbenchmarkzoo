---
title: Quantum echoes
description: >
---

# Quantum echoes

What is being measured? The quantity being measured in the second-oder out-of-time-order correlator (OTOC^{(2)}).
This task is hard to realized by a classical computer as it involves simulating interferences.

Verifiability argument: This experiment is verifiable as it can be done again on another quantum computer (considering it has a similar architecture (layout of qubits)). If it is done on another quantum computer, it should produce the same results.

# Protocol

The measurement of the second-order out-of-time correlator (OTOC) is done as follows. First, one need to select a set of qubits that will be perturbed by a random Pauli flip during the evolution $$\left{q_b\right}$$ and a qubit that will be measured at the end of the evolution $$q_m$$. The circuit consists in a unitary $$U$$, composed of random single qubit gates and a specific pattern of two -qubit gates (called the scrambling pattern), followed by a perturbation occuring on qubits $$\left{q_b\right}$$ and the inverse of the unitary $$U^\dagger$$. An example of circuit is shown in Fig. 1. The measurement of OTOC^{2k} is done by repeating $$U^\dagger B U$$ $$k$$ times. The supremacy experiment is performed using 63 qubits and setting $$k=2$$. The experiment is run many times to collect the final expectation value corresponding to the qubit $$q_m$$. If $$q_m$$ is in the lightcone of the perturbed qubit (yellow region in fig 1.), the measurement of $$q_m$$ will be impacted by the small perturbation. As the number of cycle increases, the lightcone of $$q_b$$ increases, 



, the qubits are initialized in state $$\ket{0}$$. A single qubit is chosen to be the one that will be measured at the end of the circuit. For measuring OTOC



The experiment is done on a single lattice. The OTOC^{2k} is measured as follows. The Google experiment considered $$k=2$$ meaning that we measure $$OTOC^{2} = C^{4}$$. 