---
description: >
  Direct Randomized Benchmarking
---

#  Binary Randomized Benchmarking (BRB)

## Motivations
- Finding a protocol that is more scalable than CRB and DRB (removing starting and ending large circuits as in the DRB protocol).

## Protocol
- The intial state $$\rho_0$$ is obtained by is a single-gates layer that preprare the $$+1$$ eigenstate of a uniformely randomly chosen $$n$$-qubit Pauli Operator.
- Each gate $$g_i$$ is built from the user's probability distribution $$\mu$$ (as in DRB).
- The last layer is a single qubit gate layer that transform the quantum state into a tensor product of $$Z$$ and $$I$$ operators.
- The success metric is the probability of observing the $$+1$$ eigenstate of the tensor product (the output is generally not deterministic, meaning that $$50\%$$ of bitstrings are considered success and to others failure).


<div class="center">
  <img src="/img/system-level-benchmark/randomized/RB-BiRB.png" class="img-medium" alt="Quantum circuit associated to the Binary randomized benchmarking protocol"/>
</div>

## Limitations 
- There is still scaling issues for large circuits as the final layer is computed from 
<!-- Voir si possibilité d'extraire les limites, est-ce que ça scale ? -->

Litterature: {% cite Hines2024 %}