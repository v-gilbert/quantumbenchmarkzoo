---
description: >
  Protocols used for randomized benchmarking
---

# Randomized Benchmarking Protocols

Randomized Benchmarking (RB) protocols evaluate the ability of the quantum computer to reliably perform quantum operations. The global idea is to use varied-length random quantum circuit based on a specific gate set to quantify the average error rate of the gate set. The length is denoted $$l$$ and varied with different values $$l \in \{l_1, l_2, ..., l_k\}$$. The random circuits are built in a way that the measurement of the qubit yield a deterministic output bitstring. If the bitstring is measured, the computation is considered a success, otherwise, a failure. The average probability of sucess is extracted for each circuit length $$l$$ and is used to fit an exponential decay function of the sucess probability: 

$$ p_\mathrm{success}(l) = A \alpha^l + B $$

where $$A$$, $$B$$ and $$\alpha$$ are the fit parameters. The states prepartion and measurement errors are absorbed in the coefficients $$A$$ and $$B$$. In this fit, $$\alpha$$ is related to the average error rate by $$r = 1 - \alpha - (1-\alpha)/d$$ where $$d = 2^n$$ is the size of the Hilbert space. 

Following the classification done by J. Helsen et al. {% cite PRXQuantum.3.020357 %}, a randomized benchmarking experiment is composed of the following key components:
- $$\mathbb{G}$$: A **group of gates** which are applied during the RB protocol. The $$l$$ gates composing the sequence are drawn from this group. This group is a subgroup of the unitary group (e.g. Clifford group).
- $$\{l_1, l_2, ..., l_k\}$$: A **set of sequence lengths** that denote the length of the random sequence of gates. These lengths are used to fit the exponential decay function.
- $$\phi_r$$: A **reference implementation** $$\phi_r$$ mapping each gate $$g \in \mathbb{G}$$ to its ideal implementation. The decomposition of this single gate to elementary gates used by the quantum computer should be specified.
- $$\nu$$: A **probability distribution** (or a set of probability distribution) $$\nu$$ defining how each gate $$g$$ is selected from the group $$\mathbb{G}$$. In almost all cases, this distribution is a uniform distribution.
- $$g_{end}$$: An **ending gate**. It is usually used to revert the action of the sequence of gate over the initial state. In this case, the success bitstring is the initial state.
- $$\rho_0$$: An **input state**. In many cases, the input state is just the pure state $$\ket{000...0}$$.
- $$\{\Pi_i\}_{i \in \mathcal{I}}$$: A **Positive Operator Value Measure** (generalization of the projective measurement).

A generic quantum circuit can be drawn from these specifications with the initial gate $$\rho_0$$ followed by the $$l$$ sequences of gates and the POVM:

<div class="center">
  <img src="/img/system-level-benchmark/randomized/RB-general-protocol.png" class="img-medium" alt="General quantum circuit associated to the randomized benchmarking protocol"/>
</div>

The fitting of the exponential function is based on the assumption that:
- The noise is both time and gate independent
- The noise is Markovian (assumption done in almost all RB protocols), i.e., the noise does not depend on previous gates operations.

The reader can refer to the references {% cite Hashim2024 %}, {% cite PRXQuantum.3.020357 %} for a high overview over the different RB protocols. The reader may also refer to the gentle introduction on RB in {% cite silva2024hands %}.
<!--
The initial protocol of RB was proposed by J. Emerson {% cite emerson2005scalable %} and was based on the unitary group. The probability distribution related to this protocol is dictated by the Haar measure. However, the implementation of unitaries generated from the random Haar measure remained challenging (as it requires an exponential number of gates in function of the number of qubits). An approximation of the Haar measure for a subset of unitaries called unitary t-design was proposed by C. Dankert et al. {% cite dankert2009exact %}. The idea is to simulate the Haar measure with a polynomial function that will mimic the Haar measure up to degree $$t$$. Using this method, they are able to create quantum circuits with $$O(n^2)$$ gates for $$t=2$$. 
-->

# Clifford Randomized Benchmarking

## Single-qubit Clifford Randomized Benchmarking

Motivations: 
- Create a protocol that is resistant to state preparation and measurement (SPAM) errors.
- Obtain a better scalability compared to process tomography.

Protocol:
- Each gate $$G_i$$ consist of a rotation pulse of the Clifford group combined with a rotation pulse $$P_i$$ that depolarize the noise (under markovian assumption).
- The invertion gate $$R$$ is efficiently computed from the sequence {% cite gottesman1997stabilizer %} to get an eigenstate of the measurement basis.
- The success metric is the probability of observing the final determinist state. It is estimated for different lengths $$l$$ and used to fit the exponential decay function.

<div class="center">
  <img src="/img/system-level-benchmark/randomized/RB-clifford-single-qubit.png" class="img-medium" alt="Quantum circuit associated to the single-qubit clifford randomized benchmarking protocol"/>
</div>

Limitations:
- This protocol can only benchmark a single qubit.
- This protocol is only using gates from the Clifford group.

Litterature: {% cite knill2008randomized %}

## Multi-qubit Clifford Randomized Benchmarking (CRB)

Motivations:
- Extend the single-qubit RB to multi-qubit clifford group $$C_n$$.

Protocol:
- For each sequence length, Clifford gates are uniformely and efficiently sampled from $$C_n$$ {% cite Koenig2014 %}. The depth of the quantum circuit associated to each $$C_n$$ grows as $$O(n^2 / \log(n))$$.
- The invertion unitary $$R$$ is efficiently computed from the sequence {% cite gottesman1997stabilizer %}. The final unitary $$P$$ is a uniformely random Pauli gate.
- The success metric is the probability of observing the Identity. It is estimated for different lengths $$l$$ and used to fit the exponential decay function.

<div class="center">
  <img src="/img/system-level-benchmark/randomized/RB-clifford-multi-qubit.png" class="img-medium" alt="Quantum circuit associated to the multi-qubits clifford randomized benchmarking protocol"/>
</div>

Limitations:
- Each gate of the Clifford group $$C_n$$ has an implementation cost of $$O(n^2 / \log(n))$$ single and two qubit gates
- Strongly dependent on the compilation step

Litterature: {% cite magesan2011scalable %}

# Other gate set Randomized Benchmarking

## Direct Randomized Benchmarking (DRB)

Motivations: 
- A single gate of a Clifford group $$\mathbb{C}_n$$ requires $$O(n^2 / \log(n))$$ one and two-qubit gates, which leads to relatively deep circuits for a large number of qubits. Hence, CRB cannot be evaluated on a large number of qubits as the fidelity becomes vanishingly small.
- Provide the ability to benchmark custom gate sets other than the clifford group (e.g. the native gate set of a quantum computer).

Protocol:
- A random n-qubit stabilizer state is created to form $$\rho_0$$.
- Each gate is build from the user's probability distribution $$\mu$$ (e.g. each layer $$g_i$$ having $$1/4$$ probability of having a single CNOT, with the rest composed of random single-qubit rotations). The group should be able to generate gates of the $$\mathbb{C}_n$$ Clifford group.
- The ending gate project the state of a random computational basis state.
- The success metric is the probability of observing the final bitstring $$b$$. The success probability strongly depends on the distribution $$\mu$$ and on the compiler. All these informations should be reported together.

<div class="center">
  <img src="/img/system-level-benchmark/randomized/RB-DRB.png" class="img-medium" alt="Quantum circuit associated to the direct randomized benchmarking protocol"/>
</div>

Limitations: 
- Stabilizer initialization and measurement implementations still require $$O(n^2 / \log(n))$$ gates.
- The protocol is not scalable as it requires to emulate the output of the quantum circuit to define the bitstring $$b$$.

Litterature: {% cite proctor2019direct %}, {% cite polloreno2023theory %}

Implementations: 

## Binary Randomized Benchmarking (BRB)

Motivations:
- Finding a protocol that is more scalable than CRB and DRB (removing starting and ending large circuits as in the DRB protocol).

Protocol:
- The intial state $$\rho_0$$ is obtained by is a single-gates layer that preprare the $$+1$$ eigenstate of a uniformely randomly chosen $$n$$-qubit Pauli Operator.
- Each gate $$g_i$$ is built from the user's probability distribution $$\mu$$ (as in DRB).
- The last layer is a single qubit gate layer that transform the quantum state into a tensor product of $$Z$$ and $$I$$ operators.
- The success metric is the probability of observing the $$+1$$ eigenstate of the tensor product (the output is generally not deterministic, meaning that $$50\%$$ of bitstrings are considered success and to others failure).


<div class="center">
  <img src="/img/system-level-benchmark/randomized/RB-BiRB.png" class="img-medium" alt="Quantum circuit associated to the Binary randomized benchmarking protocol"/>
</div>

Limitations: 
- There is still scaling issues for large circuits as the final layer is computed from 
<!-- Voir si possibilité d'extraire les limites, est-ce que ça scale ? -->

Litterature: {% cite Hines2024 %}

## Mirror Randomized Benchmarking (MRB)

Motivations:
- Finding a scalable protocol which do not require heavy classical processing to evaluate the output of the quantum circuit

Protocol:
- The initial state $$\rho_0$$ is prepared with a random layer of single-qubit Clifford gate (24 possible gates). This layer is inversed at the end of the circuit.
- An $$l$$-depth circuit contains $$l/2$$ layers of $$\mu$$-distributed random gates $$G_1, G_2, ... G_{l/2}$$ and $$l/2$$ layers of the reversed gates.
- The layers of random gates are interleaved with random Pauli gates that are used to twirl the noise (yellow boxes).
- The figure of merit for success is computed from the hamming distance between the sampled and success bitstring.

<div class="center">
  <img src="/img/system-level-benchmark/randomized/RB-mirror.png" class="img_large" alt="Quantum circuit associated to the Mirror randomized benchmarking protocol"/>
</div>


Limitations:
- If the errors of $$\mu$$-distributed gates and their inverse are correlated, MRB slightly underestimates the error rate of the gate set.


#  Randomized Benchmarking for cross talk errors

## Simultaneous Randomized Benchmarking

Motivations:  
- Definition of a protocol that quantifies the rate of cross-talk errors arising during the parallel execution of quantum gates.


Protocol:  
We illustrate the protocol for the case of single-qubit Clifford group simultaneous RB on a two-qubit chip.
- The protocol begins with the standard RB protocol performed for each qubit (see Step 1): A single-qubit Clifford RB is executed on one qubit while others are kept idle. The decay parameters $$\alpha_1$$ and $$\alpha_2$$ are then extracted respectively for qubit 1 and qubit 2. 
- In a second step, a single-qubit RB is run simultaneously on both qubits, enabling the extraction of three decay parameters (see Step 2): $$\alpha_{1 \vert 2}$$, $$\alpha_{2 \vert 1}$$ and $$\alpha_{12}$$. The parameters $$\alpha_{1 \vert 2}$$ and $$\alpha_{2 \vert 1}$$ are obtained from measurements of the first and second qubit. The joint decay parameter $$\alpha_{12}$$ is retrieved from the measurements of qubit 1 and 2.
- The values $$\alpha_{1}$$ and $$\alpha_{1 \vert 2}$$ (resp. $$\alpha_{2}$$ and $$\alpha_{2 \vert 1}$$) can be used to measure the errors added on qubit 1 (resp. 2) due to simultaneous quantum gates operations on qubit 2 (resp. 1). 
- Potential correlations in the errors are obtained with the value $$\alpha_{12} -\alpha_{1 \vert 2} \alpha_{2 \vert 1}$$.

<div class="center">
  <img src="/img/system-level-benchmark/randomized/RB-simultaneous.png" class="img-medium" alt="Quantum circuit associated to the simultaneous randomized benchmarking protocol"/>
</div>

Limitations:
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


## Correlated Randomized Benchmarking
<!-- D. C. McKay, A. W. Cross, C. J. Wood, and J. M. Gambetta, arXive e-print quant-ph/2003.02354 -->


# References

{% bibliography --cited %}

