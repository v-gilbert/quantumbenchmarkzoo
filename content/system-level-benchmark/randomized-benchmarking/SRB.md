---
title: Simultaneous Randomized Benchmarking
description: >
  Simultaneous Randomized Benchmarking: A quantum protocol assessing cross-talk errors by evaluating simultaneous gate operations on multi-qubit systems.
navbar-page-id: randomized-benchmarks
---

# Simultaneous Randomized Benchmarking

{% assign multi-qubit-CRB = site.randomized-benchmarking-protocols | where: "page-id", "multi-qubit-CRB" | first %}
{% assign single-qubit-CRB = site.randomized-benchmarking-protocols | where: "page-id", "single-qubit-CRB" | first %}
{% assign eplg = site.randomized-benchmarking-protocols | where: "page-id", "eplg" | first %}

## Motivations
 
The simultaneous Randomized benchmarking protocol was proposed by J. Gambetta et al. in 2012. This protocol aims to quantify the rate of cross-talk errors arising during the parallel execution of quantum gates in a quantum circuit. This method evaluates the correlations in the error rates.

## Protocol

This section develops an example of protocol implementation based on benchmarking the single-qubit Clifford group on a two-qubit chip. The protocol begins with the <a href="{{ single-qubit-CRB.url | prepend: site.baseurl }}" target="_blank">single-qubit Clifford RB protocol</a> performed for each qubit (see Step 1 in the figure): A single-qubit Clifford RB is executed on one qubit while others are kept idle. The decay parameters $$\alpha_1$$ and $$\alpha_2$$ are then extracted respectively for qubit 1 and qubit 2. In a second step (see Step 2 in the figure), a single-qubit RB is run simultaneously on both qubits, resulting in three decay parameters: $$\alpha_{1 \vert 2}$$, $$\alpha_{2 \vert 1}$$, and $$\alpha_{12}$$. The parameters $$\alpha_{1 \vert 2}$$ and $$\alpha_{2 \vert 1}$$ are obtained from the first and second qubit measurements. The joint decay parameter $$\alpha_{12}$$ is retrieved from the measurements of qubit 1 and 2. The values $$\alpha_{1}$$ and $$\alpha_{1 \vert 2}$$ (resp. $$\alpha_{2}$$ and $$\alpha_{2 \vert 1}$$) can be used to measure the errors on qubit 1 (resp. 2) due to simultaneous quantum gate operations on qubit 2 (resp. 1). Potential correlations in the errors are obtained with the value $$\alpha_{12} -\alpha_{1 \vert 2} \alpha_{2 \vert 1}$$.  
This protocol can be combined with other RB protocols. In this exemple, SRB is based on the <a href="{{ single-qubit-CRB.url | prepend: site.baseurl }}" target="_blank">single-qubit Clifford RB protocol</a>. However, it could be combined with other protocols to benchmark gates that are not Clifford, such as <a>Direct RB</a> or <a>Binary RB</a>.

<div class="center">
  <img src="/img/system-level-benchmark/randomized/RB-simultaneous.png" class="img-medium" alt="Quantum circuit associated to the simultaneous randomized benchmarking protocol"/>
</div>

## Assumptions

- This protocol uses the same assumptions as the protocol being combined with it.The example would use the same assumptions as the <a href="{{ single-qubit-CRB.url | prepend: site.baseurl }}" target="_blank">single-qubit Clifford RB protocol</a> (for instance, it considers a Markovian noise).

- This protocol uses the same assumptions as the <a href="{{ single-qubit-CRB.url | prepend: site.baseurl }}" target="_blank">single-qubit Clifford RB protocol</a> (for instance, it considers Markovian noise).

## Limitations

- This protocol suffers from the same limitations as the protocol being combined with it. The example would use the same limitations as the <a href="{{ multi-qubit-CRB.url | prepend: site.baseurl }}" target="_blank">single-qubit Clifford RB protocol</a>.

## Extension

This protocol has been extended to quantify the cross-talk error of multi-qubit gates (see for example, the work of D. McKay et al. {% cite McKay2019 %}). Notice that the <a href="{{ eplg.url | prepend: site.baseurl }}" target="_blank">EPLG score</a> also gets some inspiration from the simultaneous RB protocol.

## References

{% bibliography --cited %}