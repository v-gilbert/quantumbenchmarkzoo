---
title: Terminology
description: >
  QuantumBenchmarkZoo Terminology: clear definitions of commonly used quantum computing terms.
---
# Terminology

This section compiles definitions of terms that are frequently used in the zoo.

## DiVincenzo criteria

In {% cite divincenzo2000physical %}, D. P. DiVincenzo establishes criteria for building a universal quantum computer based on quantum circuits. He also gives several technical recommendations for building this type of quantum computer. This list is composed of five main criteria:
- **Well characterized qubits**: A deep knowledge of the physical properties of the qubits is required to manipulate their states. It should be possible to make qubits interact with each other.
- **Qubit initialization**: Setting the qubits to their initial states should be easy.
- **Long decoherence time**: The decoherence time of qubits should be several orders of magnitude longer than initialization time, gate processing time, and measurement time.
- **Universal set of gates**: The gate set should be universal, meaning any unitary can be implemented with arbitrary precision $$\epsilon$$.
- **Qubit individual measurement**: This requirement is necessary for quantum error correction.

## Emulation

Emulation is a combination of classical software and hardware used to run or execute a quantum evolution. For instance, it can consist of classically solving the Shrödinger equation. The classical software and hardware use bits as basic information units and classical logic gates as fundamental operations. Further details on the difference between quantum emulation and simulation can be found at {% cite ezratty2023emulation %}.

## Figure of Merit

The term 'figure of merit' broadly refers to any quantity that can be measured as a result of a benchmark experiment. 

## Megaquop

The term 'Megaquop' was introduced by J. Preskill at the Q2B 2024 {% cite preskill2025beyond %}. It defines a quantum machine able to successfully run quantum circuits with $$100$$ logical qubits and a logical error rate of $$10^{-6}$$ (with circuit depth of order $$10,000$$).

## Metric

{% assign fe = site.nav.FOM | where: "page-id", "fidelities-errors" | first %}
When the term 'metric' is employed, it refers to a figure of merit that is a metric in the mathematical sense: ensuring positivity, symmetry, and triangle inequality (see <a href="{{ fe.url | prepend: site.baseurl }}" target="_blank">fidelities and errors</a> page for a more precise definition).

## NISQ

Noisy-Intermediate Scale Quantum (NISQ) is an abbreviation defined by J. Preskill {% cite preskill2018quantum %} to qualify medium-scale quantum computers with a few hundred noisy qubits for gate-based quantum computers and up to thousands for analog quantum computers.

## QUATH

{% assign qv = site.other-system-level-protocols | where: "page-id", "quantum-volume" | first %}
The QUAntum THreshold assumption was introduced by S. Aaronson and L. Chen in {% cite aaronson2016complexity %}. It defines an assumption that, if true, validates the hardness of some sampling experiments, such as the <a href="{{ qv.url | prepend: site.baseurl }}#heavy-output-generation-problem" target="_blank">Heavy Output Generation (HOG) problem</a> used in the quantum volume. This assumption says that it is impossible for a polynomial-time classical algorithm taking as input the description of a quantum circuit with $$n$$ qubits to guess whether a specific output bitstring issued from this circuit has greater than the median probability of being observed with a success probability of at least $$\frac{1}{2} + \Omega \left( \frac{1}{2^n} \right)$$ (in complexity theory, $$\Omega$$ defines a lower bound).

## Simulation

A simulation provides insights into a mathematical function, which can be interpreted as some part of a physical model (either quantum or classical). This process is called a quantum simulation when this physical model relies on quantum mechanics. Analog quantum systems are considered quantum simulations as their associated Hamiltonian can be interpreted as a part of a real quantum physical model. Further details can be found at {% cite johnson2014pioneer %}.

## Speedups

In {% cite ronnow2014defining %}, T. F. Ronnow et al. introduce a classification scheme for quantum speedups that we reproduce here ordered from the strongest to the weakest form of computational advantage. Speedup is defined as the ratio of the time required by quantum and classical algorithms to solve a given problem. The classification is as follows:
- **Provable Quantum Speedup**: A quantum algorithm demonstrates a formally proven theoretical advantage over any classical algorithm. An example is Grover's algorithm for unstructured search problems, for which it is proven that no classical counterpart can outperform it.
- **Strong Quantum Speedup**: The quantum advantage is evaluated with respect to the best possible classical algorithm, regardless of whether such an algorithm is currently known. This category is often difficult to apply in practice because the performance of the best classical algorithm is often unknown.
- **Quantum Speedup**: The quantum advantage is evaluated with respect to the best-known available classical algorithm, typically When a clear consensus exists regarding the most effective classical approach. This notion depends on the current state of classical algorithm development, community consensus, and characteristics of the problem instances.
- **Potential quantum speedup**: The quantum advantage is evaluated with respect to a set of classical algorithms. It can be done when no clear consensus regarding the most effective classical approach exists.
- **Limited quantum speedup**: The quantum advantage is evaluated with respect to a classical algorithm that implements a 'similar' algorithmic approach as the quantum algorithm. For instance, quantum annealing may be evaluated against classical simulated annealing.

## Supremacy

The term 'quantum supremacy' was introduced by J. Preskill in {% cite preskill2012quantum %}. It refers to the demonstration of a controllable quantum computer's ability to perform a computational task intractable for classical computers beyond a classical feasible regime.

<!-- Add definition on Random Special Unitary Group -->

## References
{% bibliography --cited %}