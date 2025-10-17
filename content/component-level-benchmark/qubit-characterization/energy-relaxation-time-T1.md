---
title: Energy relaxation time T1
description: >
  The qubit spontaneous energy relaxation is characterized by T1 (e.g., amplitude damping): protocol, assumptions, limitations, tutorials for quantum computers.
---

# Energy relaxation time $$T1$$

## Motivation

A qubit prepared in an excited state $$\ket{1}$$ may naturally and spontaneously deexcite to its ground state $$\ket{0}$$. This process, called spontaneous emission, can be characterized by measuring the time $$T_1$$, which defines the timescale at which the qubit turns from an excited state $$\ket{1}$$ to the ground state $$\ket{0}$$ (see Fig. 1 for a simplified representation of an energy diagram and the impact of energy relaxation).

## Protocol

The protocol used to measure $$T_1$$ starts by initializing the qubit in the excited state $$\ket{1}$$. It can be done by preparing the qubit in state $$\ket{0}$$, then applying an $$X$$ gate on this qubit. Then, the qubit is left idle for some time $$t$$ and is measured in the $$Z$$-basis. This experiment is repeated several times to extract the probability of the outcome confidently. These data are then used to fit the exponential decay function that describes the probability of being prepared in state $$\ket{1}$$ and being measured in state $$\ket{1}$$ with respect to time:

$$ p_{\ket{1}}(t) = e^{-t/T_1}$$

The decay rate $$\Gamma_1$$ is related to $$T_1$$ by the relation:

$$ T_1 = \frac{1}{\Gamma_1}$$

$$T_1$$ represents the value in the abscissa when $$p_{\ket{1}}(t)=1/e$$ (see Fig. 2).

<div class="center">
  <img src="/img/component-level-benchmark/T1.png" class="img-medium" alt="Spontaneous emission energy diagram and plot showing the exponential decay probability fit of the T1 curve."/>
</div>

## Assumptions

In the protocol description, it is assumed that the higher-energy state is the excited state $$\ket{1}$$.

## Limitations

- Some uncertainty can arise from the $$T_1$$ measurement if the preparation, the $$X$$ gate, and measurement operations are not well calibrated.
- Measuring $$T_1$$ for quantum annealers can be misleading, essentially because quantum annealers can operate successfully beyond this timescale (see {% cite lall2025review %} and {% cite Dickson2013 %} for interesting discussions on this subject).

## Implementation Examples

A tutorial for measuring $$T_1$$ is available in the <a href="https://gitlab.npl.co.uk/qc-metrics-and-benchmarks/qcmet/-/tree/main/tutorials/qubit_quality_metrics/t1?ref_type=heads" target="_blank">QCMet software repository</a>.  
Another tutorial can be found on the <a href="https://qiskit-community.github.io/qiskit-experiments/manuals/characterization/t1.html" target="_blank">qiskit-community github</a>.

## References
{% bibliography --cited %}