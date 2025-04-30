---
description: >
  Terminology
---
# Terminology

This sectioncompiles definitions of terms that are frequently used in the zoo.

## DiVincenzo criteria

In {% cite divincenzo2000physical %}, D. P. DiVincenzo establishes criteria for building a universal quantum computer based on quantum circuits. He also gives several technical recommendations for building this type of quantum computer. This list is composed of five main criteria:
- **Well characterized qubits**: A deep knowledge of the physical properties of the qubits is required to manipulate their states. It should be possible to make qubits interact with each other.
- **Qubit initialization**: Setting the qubits to their initial states should be easy.
- **Long decoherence time**: The decoherence time of the qubit should be several orders of magnitude longer than initialization time, gate processing time, and measurement time.
- **Universal set of gates**: The gate set should be universal, meaning that any unitary can be implemented with arbitrary precision $$\epsilon$$.
- **Qubit individual measurement**: Requirement necessary for quantum error correction.

## Emulation

A combination of classical software and hardware used to run or execute a quantum evolution. For instance, it can consist of classically solving the Shrödinger equation. The classical software and hardware use bits as basic units of information and classical logic gates as fundamental operations. Further details on the difference between quantum emulation and quantum simulation can be found at {% cite ezratty2023emulation %}

## Figure of Merit

The term 'figure of merit' broadly refers to any quantity that can be measured as a result of a benchmark experiment. 

## Megaquop

The term 'Megaquop' was introduced by J. Preskill at the Q2B 2024 and defines a quantum machine that will have a logical gate error rate of $$10^{-6}$$ (i.e., a quantum computer able to perform successfully circuits over $$100$$ qubits with gate depth of order $$10,000$$)

## Metric

When the term 'metric' is employed, it refers to a figure of merit that is a metric in the mathematical sense: ensuring positivity, symmetry and triangle inequality (see xxx for definition).
<!-- TODO: Ajouter un lien vers la définition des métriques en interne -->

## NISQ

Noisy-Intermediate Scale Quantum (NISQ) is an abbreviation defined by J. Preskill {% cite preskill2018quantum %} to qualify medium-scale quantum computers with a few hundred noisy qubits for gate-based quantum computers and up to thousands for analog quantum computers.

## QUATH

The QUAntum THreshold assumption was introduced by S. Aaronson and L. Chen in {% cite aaronson2016complexity %}. It defines an assumption that, if true, validates the hardness of some sampling experiments, such as the Heavy Output Generation (HOG) problem used in the quantum volume. This assumption says that it is impossible for a polynomial-time classical algorithm taking as input the description of a quantum circuit to guess whether a specific output bitstring issued from this circuit has greater than the median probability of being observed with a success probability of at least $$\frac{1}{2} + \Omega \left( \frac{1}{2^n} \right)$$ (in complexity theory, $$\omega$$ defines a lower bound).
<!-- TODO: Ajouter un lien vers Heavy output problem -->

## Simulation

A simulation provides insights into a mathematical function, which can be interpreted as some part of a physical model (either quantum or classical). This process is called a quantum simulation when this physical model relies on quantum mechanics. Analog quantum systems are considered quantum simulations as their associated Hamiltonian can be interpreted as a part of a real quantum physical model. Further details can be found at {% cite johnson2014pioneer %}.

## Speedups

In {% cite ronnow2014defining %}, T. F. Ronnow et al. introduce a classification scheme for quantum speedups that we reproduce here ordered from the strongest to the weakest forms of advantage. The speedup is expressed as a ratio of computational time required by quantum and classical computers to obtain the solution to a problem:
- **Provable Quantum Speedup**: There exists a theoretical proof that no classical algorithm can outperform a given quantum algorithm (e.g., Grover's algorithm)
- **Strong Quantum Speedup**: Take the performance of the best classical algorithm as a baseline (whether it is known or still unknown). For many problems, the performance of the best classical algorithm is still unknown, which limits the use of this category.
- **Quantum Speedup**: Take the performance of the best available classical algorithm as a baseline (depends on whether there is a consensus on the best available algorithm, which may depend on time, community, properties of the problem instances etc...).
- **Potential quantum speedup**: Take a set of classical algorithms as a baseline (when no consensus exists).
- **Limited quantum speedup**: Take a classical algorithm that implements a 'similar' algorithmic approach compared to the quantum computer as a baseline (e.g., quantum annealing versus classical simulated annealing).

## Supremacy

The term 'quantum supremacy' was introduced by J. Preskill in {% cite preskill2012quantum %}. It refers to the demonstration of a controllable quantum computer's ability to perform a computational task intractable for classical computers beyond a classical feasible regime.

<!-- Add definition on Random Special Unitary Group -->

# References
{% bibliography --cited %}