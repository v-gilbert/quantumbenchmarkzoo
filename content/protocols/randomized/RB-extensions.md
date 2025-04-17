---
description: >
  Extensions to Randomized Benchmarking Protocols
---

# Extensions to Randomized Benchmarking Protocols

## Simultaneous Randomized benchmarking

The simultaneous RB protocol was introduced in {% cite Gambetta2012 %} by J. M. Gambetta et al. as an extension to the standard RB protocol. It quantifies the rate of cross-talk errors that arise during the parallel execution of quantum gates. The initial protocol was developped for the single-qubit Clifford group but can be extended to multiple qubits {% cite McKay2019 %} {% cite mckay2023benchmarking %}. 
<!-- is it only restricted to the clifford group or can it be extended to other groups ? -->

To illustrate the protocol, consider the case of single-qubit Clifford group simultaneous RB on a two-qubit chip. The procedure begins with the standard RB protocol performed for each qubit: single-qubit Clifford RB is executed on one qubit while the other is kept idle (see Fig. 1). The decay parameters $$\alpha_1$$ and $$\alpha_2$$ are then extracted respectively for qubit 1 and qubit 2. 

In the second step, single-qubit RB is run simultaneously on both qubits, enabling the extraction of three decay parameters: $$\alpha_{1|2}$$, $$\alpha_{2|1}$$ and $$\alpha_{12}$$ (see Fig. 2). The parameters $$\alpha_{1|2}$$ and $$\alpha_{2|1}$$ are obtained from measurements of the first and second qubit. The joint decay parameter $$\alpha_{12}$$ is retrieved from the measurements of qubit 1 and 2.

<div class="center">
  <img src="/img/protocols/randomized/RB-simultaneous.png" class="img_content" alt="Qauntum circuit associated to the simultaneous randomized benchmarking protocol"/>
</div>


The values $$\alpha_{1}$$ and $$\alpha_{1|2}$$ (resp. $$\alpha_{2}$$ and $$\alpha_{2|1}$$) can be used to measure the errors added on qubit 1 (resp. 2) due to simultaneous quantum gates operations on qubit 2 (resp. 1). 
Furthermore, potential correlations in the errors are obtained with the value $$\alpha_{12} -\alpha_{1|2} \alpha_{2|1}$$. This protocol can be extended to more qubits, for example to study the cross-talk errors between Clifford 2-qubit group.

