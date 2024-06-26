---
description: >
  Heavy Output Generation
---

# Heavy Output Generation (HOG) problem

<!-- Insert reference to: "Complexity theoretic foundations of quantum supremacy experiments-->
The Heavy Output Generation (HOG) problem is a sampling problem {% cite aaronson2016complexity %} that is considered hard for classical computer. This problem constitutes the pass/fail test used by the Quantum Volume (QV) protocol, which is used to evaluate the performance of a quantum computer.

## Statement of the problem
Let $$Q$$ be a random circuit drawned from a suitable ensemble acting on $$n$$ qubits. Each possible output state $$x \in \{0, 1\}^n$$ is measured with probability $$|\braket{x|\psi}|$$.
The set of output states that have a probability greater to the median constitute the *heavy* set of outputs associated to the quantum circuit $$Q$$.
The HOG problem consists in generating $$k$$ output strings $$x_1, x_2, ..., x_k$$ such that at least a $$2/3$$ fraction of these strings are part of the *heavy* set.
Assuming the Quantum Threshold assumption, there is no polynomial-time algorithm that can solve the HOG problem with probability at least 0.99.

Readers may refer to {% cite aaronson2016complexity %} for further calculation details and proofs.

## References
{% bibliography --cited %}