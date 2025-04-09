---
description: >
  Taxonomy
---
# Taxonomy

## Metric

In a metric space, a metric $$D$$ is a function $$D: X \times X \rightarrow \mathbb{R}$$ which measures the distance between points $$x$$ and $$y$$. 

For all $$x, y, z \in \mathbb{R}$$, a metric must satisfy:
- Positivity: $$x \neq y \Rightarrow D(x, y) > 0$$ and $$D(x, y) = 0$$ if $$x=y$$
- Symmetry: $$D(x, y) = D(y, x)$$
- Triangle inequality: $$D(x, z) \leq D(x, y) + D(y, z)$$

## Quantum Emulation

Combination of **classical** software and hardware used to run or execute a quantum evolution (such as running a quantum circuit, solving the Shrödinger equation etc. ). The classical software and hardware use bits as basic units of information and classical logic gate as fundamental operations. Further details on the difference between quantum emulation and quantum simulation can be found at {% cite ezratty2023emulation %}

## Quantum Simulation

A simulation gives insights about a mathematical function, which can be interpreted as some part of a physical model (either quantum or classical). When this physical model relies on quantum mechanic, this process is called a quantum simulation. Analog quantum systems are usually reffered as quantum simulations as their associated Hamiltonian can be interpreted as a part or a real quantum physical model. Further details can be found at {% cite johnson2014pioneer %}.


## Random Special Unitary Group

## Speedups

<!-- Reprendre les différents types de speedup de Ronnow et al. -->

## Megaquop

<!-- Reprendre def de Preskill -->




# References
{% bibliography --cited %}