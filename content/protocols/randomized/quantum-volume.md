---
description: >
  Quantum Volume
---

# Quantum Volume protocol

The Quantum Volume (QV) {% cite bishop2017quantum cross2019validating %} is a benchmarking protocol used to measure the ability of circuit-based quantum computers to simulate quantum circuits. This protocol gathers in a single metric number, the maximum width and depth that a quantum computer can successfully implement. A quantum computer has to sucessfully solve the Heavy Output Generation (HOG) problem  {% cite aaronson2016complexity %} of size $$n$$ to validate a quantum volume of size $$2^n$$. <!-- see page on HOG -->

Receipe for a Quantum Volume Experiment:
- Choose a number $$n$$ as the width of the circuit (i.e., number of qubits in the circuit).
- Set $$n=d$$ with $$d$$ the number of layers of the quantum circuit.
- Generate a model circuit composed of $$d$$ layers. Each layer is composed of a random permutation of qubits $$\pi$$ and a random unitary sampled from $$SU(4)$$. 

<!-- Add a scheme of the random quantum circuit -->

This circuit is then used as input for the sampling task associated to the Heavy Output Generation (HOG) problem. If the quantum computer is able to sample the right distribution, it validates the associated quantum volume score of $$2^n$$.

## Assumptions
* The circuit compiler may use all the possible tricks to improve the mapping of the quantum circuit, which can lead to possibly high extra-processing time.
* The Quantum computer should make an honest attempt to solve the HOG problem and not choose an implementation that is far from the initial model of circuit (i.e., the approximation error should be limited).

## Elements of the quantum stack being benchmarked
* Gate fidelity
* Coherence time
* Chip topology
* Efficiency of the transpilation method

## Protocol complexity
The complexity of the HOG problem is exponential either in time or space for a classical computer. For further details on the complexity the reader may refer to {% cite aaronson2016complexity %}.

## References
{% bibliography --cited %}