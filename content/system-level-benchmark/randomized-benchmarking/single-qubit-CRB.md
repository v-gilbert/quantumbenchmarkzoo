---
title: Single-qubit Clifford Randomized Benchmarking
description: >
  Single-qubit Clifford Randomized Benchmarking: a protocol for assessing single-qubit gate errors using Clifford group sequences and exponential decay fitting.
navbar-page-id: randomized-benchmarks
---

{% assign multi-qubit-CRB = site.randomized-benchmarking-protocols | where: "page-id", "multi-qubit-CRB" | first %}

# Single-qubit Clifford Randomized Benchmarking (CRB)

## Motivations

Single-qubit randomized benchmarking was first proposed by E. Knill et al. {% cite knill2008randomized %} in 2007. At the time, process tomography was the most commonly used method to benchmark quantum gates. However, this method does not scale when the system size grows, and it becomes challenging to identify low error rates. A second issue associated with process tomography is that the error related to state preparation and measurements cannot be distinguished from the error of the quantum gate. This RB method has been designed to address these two limitations with an implementation that favorably scales with the number of qubits and a way to remove SPAM errors.

## Protocol

The circuit associated with the single-qubit CRB is shown in the figure. Each gate $$G_i$$ consists of a rotation pulse of the Clifford group and a rotation pulse $$P_i$$ that depolarizes the noise (under the Markovian assumption). The inversion gate $$R$$ is efficiently computed from the sequence $$G_lG_{l-1}...G_1$$ {% cite gottesman1997stabilizer %} to get an eigenstate of the measurement basis. The success metric is the probability of observing the final deterministic state. It is estimated for different lengths $$l$$ and used to fit the exponential decay function.

<div class="center">
  <img src="/img/system-level-benchmark/randomized/RB-clifford-single-qubit.png" class="img-medium" alt="Quantum circuit associated to the single-qubit clifford randomized benchmarking protocol"/>
</div>

## Assumptions

- This protocol assumes that the noise model is Markovian, meaning that the noise of a gate does not depend on the sequence of previous gates (history-independent).
- The average error of all the Clifford gates should be depolarizing (assumption that is for all Clifford based benchmarks).
- It also assumes that the noise is gate-independent and homogeneous in time.
- The noise variation between the Clifford gates chosen at random should be small. 

## Limitations

- The assumptions consider a simplified noise model, which could induce inaccuracies in the case of more complex noise models (such as non-Markovian noise).
- This protocol is only valid for estimating the error rate of single-qubit gates of the Clifford group.

## Extension

This protocol has been extended to <a href="{{ multi-qubit-CRB.url | prepend: site.baseurl }}" target="_blank">multi-qubit CRB</a> in 2010.

## Implementation

An example of single-qubit randomized benchmarking experiement can be found <a href="https://qiskit-community.github.io/qiskit-experiments/manuals/verification/randomized_benchmarking.html" target="_blank">here</a>.  
Another tutorial is available in the  <a href="https://gitlab.npl.co.uk/qc-metrics-and-benchmarks/qcmet/-/tree/main/tutorials/gate_execution_quality_metrics/randomized_benchmarking/clifford_randomized_benchmarking" target="_blank">QCMet software repository</a>.

## References
{% bibliography --cited %}