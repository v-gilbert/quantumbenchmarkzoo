---
title: Randomized Benchmarking Protocols
description: >
  Randomized Benchmarking protocols
---

{% assign fidelities = site.FOM | where: "page-id", "fidelities-errors" | first %}

# Randomized Benchmarking (RB) Protocols

## Classification of RB protocols

Randomized Benchmarking (RB) protocols evaluate the ability of the quantum computer to perform quantum operations reliably. These tools are used to provide bounds on the error rate of quantum gates. The global idea is to use varied-length random quantum circuits with a specific gate set to quantify the average error rate of the gate set. The number of layers of gates $$l$$ is varied with different values $$l \in \{l_1, l_2, ..., l_k\}$$. The random circuits are built so that the measurement of the qubits yields a deterministic output bitstring. If the bitstring is measured, the computation is considered a success; otherwise, it is a failure. The average probability of success is extracted for each circuit length $$l$$ and is used to fit an exponential decay function corresponding to the success probability: 

$$ p_\mathrm{success}(l) = A \alpha^l + B, $$

where $$A$$, $$B$$ and $$\alpha$$ are the fit parameters. The State Preparation And Measurement (SPAM) errors are absorbed in the coefficients $$A$$ and $$B$$. For a $$n$$-qubit state, the value of $$\alpha$$ is related to the <a href="{{ fidelities.url | prepend: site.baseurl }}#average-error-rate" target="_blank">average gate infidelity</a>:

$$ \epsilon_\mathrm{r} = \frac{d-1}{d} (1- \alpha), $$
 
which is linked to the <a href="{{ fidelities.url | prepend: site.baseurl }}#average-gate-fidelity" target="_blank">average gate fidelity</a> $$F_{avg}$$ by the relation $$\epsilon_\mathrm{r} = 1- F_{avg}$$. The value of $$\alpha$$ is also linked to the <a href="{{ fidelities.url | prepend: site.baseurl }}#entanglement-infidelity" target="_blank">average process infidelity</a> (entanglement infidelity):

$$ \epsilon_\mathrm{r} = \frac{d^2-1}{d^2} (1- \alpha), $$

where $$d = 2^n$$ is the size of the Hilbert space. In benchmarking studies, it is important to identify which type of infidelity is being used (see. VIII.B {% cite Hashim2024 %} for detailed discussion)

Following the classification done by J. Helsen et al. {% cite PRXQuantum.3.020357 %}, a randomized benchmarking experiment is composed of the following key components:
- $$\mathbb{G}$$: A **group of gates** which are applied during the RB protocol. The $$l$$ gates composing the sequence are drawn from this group. This group is a subgroup of the unitary group (e.g., the Clifford group).
- $$\{l_1, l_2, ..., l_k\}$$: A **set of sequence lengths** that denote the length of the random sequence of gates. Repeating the experiment for different values of $$l$$ permits fitting the exponential decay function.
- $$\phi_r$$: A **reference implementation** $$\phi_r$$ mapping each gate $$g \in \mathbb{G}$$ to its ideal implementation. The decomposition of this single gate to the quantum computer's elementary gates must be specified.
- $$\nu$$: A **probability distribution** (or a set of probability distribution) $$\nu$$ defining how each gate $$g$$ is selected from the group $$\mathbb{G}$$. In most cases, this distribution is uniform.
- $$g_{end}$$: An **ending gate**. It is usually used to revert the action of the sequence of the $$l$$ gates over the initial state. In this case, the success bitstring is the initial state.
- $$\rho_0$$: An **input state**. The input state is often just the pure state $$\ket{000...0}$$.
- $$\{\Pi_i\}_{i \in \mathcal{I}}$$: A **Positive Operator Value Measure** (generalization of the projective measurement).

A generic quantum circuit can be drawn from these specifications with a unitary $$\rho_0$$ that prepares the initial state, followed by the $$l$$ sequences of gates, the reversing gate $$R$$, and the POVM:

<div class="center">
  <img src="/img/system-level-benchmark/randomized/RB-general-protocol.png" class="img-medium" alt="General quantum circuit associated to the randomized benchmarking protocol"/>
</div>

The fitting of the exponential function is based on the assumption that:
- The noise is both time and gate independent
- The noise is Markovian (assumption done in almost all RB protocols), i.e., the noise does not depend on previous gates operations.

<!--
The initial protocol of RB was proposed by J. Emerson {% cite emerson2005scalable %} and was based on the unitary group. The probability distribution related to this protocol is dictated by the Haar measure. However, the implementation of unitaries generated from the random Haar measure remained challenging (as it requires an exponential number of gates in function of the number of qubits). An approximation of the Haar measure for a subset of unitaries called unitary t-design was proposed by C. Dankert et al. {% cite dankert2009exact %}. The idea is to simulate the Haar measure with a polynomial function that will mimic the Haar measure up to degree $$t$$. Using this method, they are able to create quantum circuits with $$O(n^2)$$ gates for $$t=2$$. 
-->

## List of RB protocols

{% assign single-qubit-CRB = site.randomized-benchmarking-protocols | where: "page-id", "single-qubit-CRB" | first %}
{% assign multi-qubit-CRB = site.randomized-benchmarking-protocols | where: "page-id", "multi-qubit-CRB" | first %}
{% assign DRB = site.randomized-benchmarking-protocols | where: "page-id", "DRB" | first %}
{% assign BRB = site.randomized-benchmarking-protocols | where: "page-id", "BRB" | first %}
{% assign MRB = site.randomized-benchmarking-protocols | where: "page-id", "MRB" | first %}
{% assign dihedral-RB = site.randomized-benchmarking-protocols | where: "page-id", "dihedral-RB" | first %}
{% assign SRB = site.randomized-benchmarking-protocols | where: "page-id", "SRB" | first %}
{% assign IRB = site.randomized-benchmarking-protocols | where: "page-id", "IRB" | first %}
{% assign correlated-RB = site.randomized-benchmarking-protocols | where: "page-id", "correlated-RB" | first %}
{% assign eplg = site.randomized-benchmarking-protocols | where: "page-id", "eplg" | first %}

- Clifford Randomized Benchmarking
  - <a href="{{ single-qubit-CRB.url | prepend: site.baseurl }}" target="_blank">Single-qubit Clifford Randomized Benchmarking (CRB)</a>
  - <a href="{{ multi-qubit-CRB.url | prepend: site.baseurl }}" target="_blank">Multi-qubit Clifford Randomized Benchmarking (CRB)</a>
- Other gate set Randomized Benchmarking
  - <a href="{{ DRB.url | prepend: site.baseurl }}" target="_blank">Direct Randomized Benchmarking (DRB)</a>
  - <a href="{{ BRB.url | prepend: site.baseurl }}" target="_blank">Binary Randomized Benchmarking (BRB)</a>
  - <a href="{{ MRB.url | prepend: site.baseurl }}" target="_blank">Mirror Randomized Benchmarking (MRB)</a>
  - <a href="{{ dihedral-RB.url | prepend: site.baseurl }}" target="_blank">Dihedral Randomized Benchmarking</a>
- Randomized Benchmarking for cross talk errors
  - <a href="{{ SRB.url | prepend: site.baseurl }}" target="_blank">Simultaneous Randomized Benchmarking</a>
- Randomized Benchmarking for individual gate error rate assessment
  - <a href="{{ IRB.url | prepend: site.baseurl }}" target="_blank">Interleaved Randomized Benchmarking (IRB)</a>
- Other protocols based on Randomized Benchmarking
- <a href="{{ eplg.url | prepend: site.baseurl }}" target="_blank">Error Per Layered Gate (EPLG)</a>

<!-- To add in a next version: <a href="{{ correlated-RB.url | prepend: site.baseurl }}" target="_blank">Correlated Randomized Benchmarking</a>-->

## Extra references

The reader can refer to the references {% cite Hashim2024 %}, {% cite PRXQuantum.3.020357 %} for a high-level overview over the different RB protocols. The reader may also refer to a gentle introduction on RB in {% cite silva2024hands %}.

# References

{% bibliography --cited %}

