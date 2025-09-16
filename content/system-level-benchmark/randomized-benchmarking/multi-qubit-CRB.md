---
title: Multi-qubit Clifford Randomized Benchmarking
description: >
  Multi-qubit Clifford Randomized Benchmarking (Standard Clifford Randomized Benchmarking): Assess system fidelity via n-qubit Clifford group sequences.
---

# Multi-qubit Clifford Randomized Benchmarking (CRB)

{% assign single-qubit-CRB = site.randomized-benchmarking-protocols | where: "page-id", "single-qubit-CRB" | first %}

## Motivations

The primary motivation behind developing multi-qubit Clifford Randomized Benchmarking (also called Standard Clifford Randomized Benchmarking) was to generalize the <a href="{{ single-qubit-CRB.url | prepend: site.baseurl }}" target="_blank">single-qubit randomized benchmarking</a> protocol to systems comprising multiple qubits. This extended protocol was introduced in 2010 by E. Magesan et al. {% cite magesan2011scalable %}.

## Protocol

The protocol utilizes the multi-qubit Clifford group $$C_n$$ to benchmark a quantum system with $$n$$ qubits. For each sequence length $$l$$, Clifford gates are uniformly and efficiently sampled from $$C_n$$ {% cite Koenig2014 %}. Each gate of the Clifford group is efficiently decomposed into a sequence of single and two-qubit gates, with depth scaling as $$O(n^2 / \log(n))$$ {% cite aaronson2004improved %}. The inverse unitary $$R$$ is efficiently computed from the sequence $$g_lg_{l-1}...g_1$$ {% cite gottesman1997stabilizer %}, and a final unitary $$P$$ is randomly and uniformly chosen to produce an eigenstate of the observable $$\sigma^z$$ (The unitary $$P$$ was not used in the initial protocol, but is considered to be a best practice). The success metric is the probability of observing the Identity up to the random Pauli gate $$P$$. It is estimated for the different lengths $$l$$ and used to fit the exponential decay function.  
This protocol permits the extraction of the decay parameter $$\alpha_\mathrm{crb}$$ used to estimate the Error per Clifford $$\epsilon_\mathrm{crb}$$.

<div class="center">
  <img src="/img/system-level-benchmark/randomized/RB-clifford-multi-qubit.png" class="img-medium" alt="Quantum circuit associated to the multi-qubit clifford randomized benchmarking protocol"/>
</div>

## Assumptions

- This protocol assumes that the noise model is Markovian, meaning that the noise of a gate does not depend on the sequence of previous gates (history-independent). The reader may refer to {% cite epstein2014investigating %} for an insightful study on the effect of non-Markovian noise on this protocol.
- The average error of all gates is depolarizing (assumption used for all Clifford-based benchmarks).
- The sampled average fidelity of the random sequences must quickly converge to the average for all possible sequences, as only a small fraction of all possible sequences is being implemented. Interesting discussions on finite-sampling effects are given in {% cite epstein2014investigating %}.

## Limitations

- One limitation identified by the community {% cite lall2025review %} concerns the depth scaling associated with the decomposition of each gate of the Clifford group $$C_n$$ into single and two qubit gate. This depth scales as $$O \left(n^2/ \log(n) \right)$$. As the number of qubits increases, the implementation becomes increasingly challenging, and circuit fidelity tends to degrade rapidly in the presence of noise. As $$n$$ grows, the fidelity estimation becomes difficult in practice.
- The output fidelity of the quantum circuit also strongly depends on the compilation process used to map each Clifford gate to the gate set natively used by the quantum computer (single and tow-qubit errors may systematically add or cancel within a single layer of $$C_{n}$$). Inefficiencies or suboptimal strategies in this step can significantly impact the benchmarking results.
- This protocol measures the error rate for the implementation of the group $$C_n$$. Hence, the estimation of individual single and two-qubit gates requires an extrapolation, which is not always rigorously valid {% cite proctor2017randomized %} {% cite carignan2018randomized %}.

## Implementation

An implementation of the SRB from IQM is available in their <a href="https://github.com/iqm-finland/iqm-benchmarks/tree/main" target="_blank">Benchmark suite</a>.  
A tutorial for $$C_2$$ is available in the <a href="https://gitlab.npl.co.uk/qc-metrics-and-benchmarks/qcmet/-/tree/main/tutorials/gate_execution_quality_metrics/randomized_benchmarking/clifford_randomized_benchmarking" target="_blank">QCMet software repository</a>.

## References
{% bibliography --cited %}