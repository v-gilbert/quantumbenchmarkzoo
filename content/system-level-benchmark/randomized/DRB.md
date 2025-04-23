---
description: >
  Direct Randomized Benchmarking
---

Direct Randomized Benchmarking (DRB) has been proposed to counter two main limits of the Clifford Randomized Benchmarking method:
- The scalability problem of CRB (as the number of gates required to implement a single unitary of the Clifford group $$\mathbb{C}_n$$ grows as $$O(n^2/\log n)$$). This increase in the circuit depth make the CRB not scalable for noisy devices: the number of circuit execution rapidly increases to reliably evaluate the fidelity of the quantum circuit. It made the CRB experiment unfeasible for clifford groups on more than $$3$$.
- The CRB only works for clifford group, but sometimes, the user wishes to evaluate the error rate for the native gate set of the quantum computer.

What changes for the DRB protocol:
- State preparation and measurement procedure changes ($$\rho_0$$ and $$g_\mathrm{end}$$). This step is still not optimal as the preparation and measurement require $$O(n^2/\log n)$$ depth or quantum gates ???
- Choice of distribution of each gate in the gate set.

Under broad conditions for random quantum circuits, the process fidelity of $$\mu$$-distributed random circuits decay exponentially with the depth of the circuit. It is then possible to fit the exponential function decay and extract the parameter $$\alpha$$.

<!-- Add an image of the quantum circuit -->

The average error rate of the $$\mu$$-distributed gate set is:

$$ r_\mu = (4^n-1)(1-\alpha)/4^n $$

Hence $$r$$ strongly depends on the distribution $$\mu$$ and should be reported together. Notice that in CRB, $$r$$ also strongly depends on the compiler that decompose the clifford gate to elementary gate executed by the quantum computer.

<!-- Put an example of distribution -->