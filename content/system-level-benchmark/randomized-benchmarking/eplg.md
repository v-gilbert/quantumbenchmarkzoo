---
title: EPLG
description: >
  Error Per Layered Gate
---

# Error Per Layered Gate Protocol (EPLG)

## Motivation
This protocol was proposed by IBM in 2023 as a supplement of the quantum volume protocol {% cite mckay2023benchmarking %}. The quantum volume only focuses on a specific high performing subset of qubits on the quantum chip. The Error Per Layered Gate probotol (EPLG) aims to evaluate the performance of a whole quantum computer chip instead. It also permits to rapidly extract lower bounds on 2-qubit error rates.

## Protocol details
The protocol consits in selecting $$n$$ qubits from the quantum chip used to implement an interconnection pattern using two-qubit gates (e.g., CNOT, SWAP, CZ etc.). For example, Fig 1. shows a chain pattern with two possible implementations of 2-qubit gate disjoint layers (see. Fig.2 and Fig 3.). Fig 2. implements the chain pattern in two distinct layers of depth-1 gates whereas Fig 3. implements it in three distinct layers. 

<div class="center">
  <img src="/img/system-level-benchmark/others/eplg-1.png" class="img-medium" alt="Layer composition of CNOTs for a linear chain of qubits"/>
</div>

An implementation is chosen (we choose the implementation of Fig. 2). A Direct Simultaneous Randomized Benchmarking is then run for each layer (see Fig. 4). The RB circuit is composed of $$l$$ blocks with an ending gate $$g_{end}$$ inverting the previous sequence of quantum gates. Each block is composed of a wall of random Clifford single-quit gate and of the depth-1 layer of CNOT gate, separated by barrieres.

<div class="center">
  <img src="/img/system-level-benchmark/others/eplg-2.jpg" class="img-large" alt="Simultaneous direct randomized benchmarking protocol for each layer of CNOT"/>
</div>
The RB protocol permits to extract the exponential single or joint decay factor $$\alpha_i$$. A fidelity $$F_i$$ is then computed from each decay factor with the formula. The disjoint layer fidelity $$LF_m$$ is a product of each fidelity $$F_i$$ and the final layer fidelity $$LF$$ is the product of each disjoint layer fidelity. The EPLG is then computed from the final layer fidelity $$LF$$ and the number of 2-qubit gate in all the layers $$n_{2q}$$ (3 in our example).
 
As the number of qubits grows, the number of possible implementations for a selected pattern grows exponentially. The authors of {% cite mckay2023benchmarking %} employ a heuristic to select the best implementation that produces the highest EPLG score (only the best EPLG score is reported).

## Assumptions
- The equation that computes $$LF_m$$ is only valid if there is no cross-talk errors. The second expression defining $$LF$$ defines a lower bound on the error and is only a good approximation if the error is low. 
- This protocol uses the same assumptions as standard RB protocols (for instance, that the noise is markovian).

## Limitations
<!-- add some limitation to the eplg -->
- This protocol relies on simultaneous RB and hence, possess the same limitations. 
- The performance of the final computation strongly depends on the heuristic used to find good patterns that produce high EPLG.
- This estimation is just a lower bound on the error rate and has to be coutiously interpreted.
- The EPLG strongly depends on the heuristic used to select the best implementation of the pattern.

# References
{% bibliography --cited %}