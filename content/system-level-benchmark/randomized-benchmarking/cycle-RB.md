---
title: Cycle Benchmarking
description: >
  Cycle benchmarking: a scalable randomized benchmarking protocol based on randomized Pauli cycles (randomized compiling) to assess multi-qubit gate fidelity.
---

# Cycle Benchmarking

{% assign IRB = site.randomized-benchmarking-protocols | where: "page-id", "IRB" | first %}
{% assign fidelities = site.nav.FOM | where: "page-id", "fidelities-errors" | first %}

## Motivations

The Cycle Benchmarking (CB) protocol was proposed in 2019 by A. Erhard et al. in {% cite erhard2019characterizing %} as an alternative to the <a href="{{ IRB.url | prepend: site.baseurl }}" target="_blank">Interleaved Randomized Benchmarking (IRB)</a> protocol with a more practical implementation that does not require the compilation of $$n$$-qubit Clifford gates.

## Protocol

A cycle is defined as a set of gates acting on a disjoint subset of qubits, all occurring in parallel (with an analogy to a clock cycle). The circuit corresponding to the CB protocol is shown in Fig. 1. The circuit starts with a layer of single-qubit gates to prepare the state in a random Pauli basis (purple boxes). The CB protocol interleaves each cycle (gate G) with a random layer of Pauli gates (yellow boxes) that aim to twirl the noise into a stochastic Pauli channel (also known as randomized compiling). Each cycle is repeated $$l$$ times. The gate of interest $$G$$ should satisfy $$G^l=I$$ (i.e., $$G$$ applied $$l$$ times should equal the identity). The last layer of single-qubit gates (purple boxes at the end of the circuit) turns back the qubits in the initial Pauli basis state.

<div class="center">
  <img src="/img/system-level-benchmark/randomized/cb-1.png" class="img-medium" alt="Quantum circuit associated with the cycle benchmarking protocol for a gate G"/>
</div>

The previous circuit permits the extraction of the error associated with the interleaved G gate combined with the Pauli gates $$r_\mathrm{cbg}$$. A second experiment can be done in complement to only extract the error rate of the gate G (just as in the <a href="{{ IRB.url | prepend: site.baseurl }}" target="_blank">IRB</a> protocol). It consists of applying the same protocol but with an Identity instead of the gate G (see Fig. 2) to obtain the error rate associated with the identity $$r_\mathrm{cbi}$$. 

<div class="center">
  <img src="/img/system-level-benchmark/randomized/cb-2.png" class="img-medium" alt="Quantum circuit associated with the cycle benchmarking protocol for the identity"/>
</div>

It then consists of using the same approximation as in <a href="{{ IRB.url | prepend: site.baseurl }}" target="_blank">IRB</a> to estimate the fidelity of the gate $$G$$:

$$r_\mathrm{G} \approx r_\mathrm{cbi} - r_\mathrm{cbg}.$$

As in the <a href="{{ IRB.url | prepend: site.baseurl }}" target="_blank">IRB</a> protocol, this approximation induces systematic errors, but bounds extracted with CB are generally tighter than with IRB. The reader can find a detailed comparison in {% cite Hashim2024 %}.

## Assumptions

- This protocol assumes that the noise model is Markovian, meaning that the noise of a gate does not depend on the sequence of previous gates (history-independent).
- The protocol presented on this page is only valid for benchmarking Clifford gates. CB can be used to benchmark non-Clifford gates, but requires substantial changes as discussed in {% cite erhard2019characterizing %}.

## Limitations

- As explained in {% cite Hashim2024 %}, the fidelity extracted with the CB protocol does not constitute the true <a href="{{ fidelities.url | prepend: site.baseurl }}#entanglement-fidelity" target="_blank">process fidelity</a> in general but rather a lower bound on the process fidelity. The tightness of this bound depends on the number of samples, which should scale at least as $$\min(20, 4^n -1)$$ where $$n$$ denotes the number of qubits.

## Implementation

A tutorial for implementing the CB protocol is available in the <a href="https://gitlab.npl.co.uk/qc-metrics-and-benchmarks/qcmet/-/tree/main/tutorials/gate_execution_quality_metrics/cycle_benchmarking_composite_process_fidelity" target="_blank">QCMet software repository</a>.  

## References
{% bibliography --cited %}