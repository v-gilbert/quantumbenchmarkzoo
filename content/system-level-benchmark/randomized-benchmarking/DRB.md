---
description: >
  Direct Randomized Benchmarking
---

# Direct Randomized Benchmarking

## Motivations 
- A single gate of a Clifford group $$\mathbb{C}_n$$ requires $$O(n^2 / \log(n))$$ one and two-qubit gates, which leads to relatively deep circuits for a large number of qubits. Hence, CRB cannot be evaluated on a large number of qubits as the fidelity becomes vanishingly small.
- Provide the ability to benchmark custom gate sets other than the clifford group (e.g. the native gate set of a quantum computer).

## Protocol
- A random n-qubit stabilizer state is created to form $$\rho_0$$.
- Each gate is build from the user's probability distribution $$\mu$$ (e.g. each layer $$g_i$$ having $$1/4$$ probability of having a single CNOT, with the rest composed of random single-qubit rotations). The group should be able to generate gates of the $$\mathbb{C}_n$$ Clifford group.
- The ending gate project the state of a random computational basis state.
- The success metric is the probability of observing the final bitstring $$b$$. The success probability strongly depends on the distribution $$\mu$$ and on the compiler. All these informations should be reported together.

<div class="center">
  <img src="/img/system-level-benchmark/randomized/RB-DRB.png" class="img-medium" alt="Quantum circuit associated to the direct randomized benchmarking protocol"/>
</div>

## Limitations 
- Stabilizer initialization and measurement implementations still require $$O(n^2 / \log(n))$$ gates.
- The protocol is not scalable as it requires to emulate the output of the quantum circuit to define the bitstring $$b$$.

Litterature: {% cite proctor2019direct %}, {% cite polloreno2023theory %}

Implementations: 
