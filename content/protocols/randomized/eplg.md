---
description: >
  Error Per Layered Gate
---

# Error Per Layered Gate Protocol

The Error Per Layered Gate Protocol (EPLG) was introduced in 2023 by D. C. McKay et al. to benchmark the performance of gate-based quantum computers. This benchmark, developped by IBM, aims to evaluate the performance of a whole quantum computer chip (Contrary to the quantum volume that focuses on a specific subset of qubits). It also permits to rapidly extract lower bounds on 2-qubit error rates.

The protocol consits in selecting $$n$$ qubits from the quantum chip used to implement an interconnection pattern using 2-qubit gates (e.g., CNOT, SWAP, CZ etc.). This pattern may not be fully implemented in depth-1 (i.e., fully parallelized gates). Instead, this interconnection pattern is devided in several subsets (called layers), which all have depth-1 parallel gate application (see Fig. 1). 

For each layer $$m$$, the error of the gates is measured using simultaneous randomized benchmarking (see Fig. 2). The fidelity extracted with the RB protocol permits to obtain a fidelity per layer (when $$i$$ denotes the qubit):

$$LF_m = \prod_i F_{i, m}$$

The full layer fidelity is then defined as:

$$LF = \prod_m LF_{m}$$

It is then used to define the error per layer gate:

$$EPLG = 1 - LF^{1/n_{2q}}$$

where $n_{2q}$ defines the number of 2-qubit gates in all the layers.

## Assumptions

This protocol makes several assumptions. First, the equation that computes $$LF_m$$ is only valid if there is no cross-talk errors. The second expression defining $$LF$$ defines a lower bound on the error and is only a good approximation if the error is low. The protocol stipulates that the barriers should be enforced and that the error on all the qubits should be measured.

This protocol relies on simultaneous RB and hence, assume that the noise is Markovian. 

Additionnaly, dynamical decoupling is allowed.