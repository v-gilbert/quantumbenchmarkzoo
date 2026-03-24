---
title: Quantum Process Tomography
description: >
  
navbar-page-id: tomography
---

{% assign qst = site.tomography | where: "page-id", "state-tomography" | first %}
{% assign fidelities = site.nav.FOM | where: "page-id", "fidelities-errors" | first %}

# Quantum Process Tomography (QPT)

## Motivation

Quantum Process Tomography (QPT) has been proposed to extend quantum state tomography to infer the accuracy of quantum processes {% cite chuang1997prescription%}. Quantum process tomography aims to precisely reconstruct the linear maps that transform one density matrix representing a quantum state into another. This linear map can be used to characterize the action of quantum gates on qubits precisely.

## Protocol
One convenient way to fully qualify the action of quantum processes on quantum states is to expand the density matrix of a quantum state $$\rho$$ to a $$4^n$$ vector representing the quantum state with respect to an orthogonal Pauli basis. For example, for a 2-qubit state, an orthogonal Pauli basis constructed from the Pauli operators is:

$$\left( II,IX,IY,IZ,XI,XX,XY,XZ,YI,YX,YY,YZ,ZI,ZX,ZY,ZZ \right)$$

A state $$\rho$$ can then be expressed as a linear combination of these operators as:

$$ \rho_\mathrm{Pauli} = (\alpha_{II},\alpha_{IX}, \alpha_{IY}, \alpha_{IZ}, \alpha_{XI}, \alpha_{XX}, \alpha_{XY},\alpha_{XZ}, \alpha_{YI}, \alpha_{YX}, \alpha_{YY}, \alpha_{YZ}, \alpha_{ZI},\alpha_{ZX},\alpha_{ZY}, \alpha_{ZZ})^\intercal $$


with $$\alpha_{\{I, X, Y, Z\}^{\otimes n}} \in \mathbb{R}$$ and $$\rho_\mathrm{Pauli} \in \mathbb{R}^{4^n}$$. For example, if the qubit is initialized in the state $$ \rho = \ket{00}  \bra{00} $$ then it is possible to represent this state as a linear combination of operators that define the orthogonal Pauli basis:

$$\rho = \frac{1}{4}(II+IZ+ZI+ZZ)$$

The vector $$\rho_\mathrm{Pauli}$$ is then equal to: 

$$\rho_\mathrm{Pauli} = \left( \frac{1}{4}, 0 , 0 , \frac{1}{4}, 0 , 0 , 0 ,0 , 0 , 0 , 0 , 0 , \frac{1}{4} ,0 ,0 , \frac{1}{4} \right)^\intercal$$

The reconstruction of the linear map corresponding to a quantum process (Pauli transfer matrix) is obtained by applying the process to different initial states and measuring them with different observables. Considering the Pauli operators $$\mathcal{P} = \{I, X, Y, Z\}$$, the PTM associated with a quantum process on $$n$$ qubits is fully characterized by its $$4^n \times 4^n$$ different parameters with the $$4^n$$ Pauli-basis operators used for defining the eigenstates used as initial states (before the action of the process) and measuring the output state (after the action of the process). The PTM defines how the Pauli coefficients in the vector $$\rho_\mathrm{Pauli}$$ evolve with time and it describes how the Pauli components of a quantum state transform under the quantum process.

The following figures are taken from {% cite kim2022high %}. The left figure represents the Pauli Transfer Matrix (PTM) experimentally measured for the iToffoli gate $$\mathcal{E}_\mathrm{exp}$$. The figure on the right shows the difference between the ideal PTM of the iToffoli gate and the actual implementation $$\mathcal{E}_\mathrm{ideal} - \mathcal{E}_\mathrm{exp}$$. The procedure for computing the value of a single pixel of the PTM is described after the figure (with an example for the green pixel).

<div class="center">
  <img src="/img/system-level-benchmark/tomography/PTM_iToffoli.png" class="img-large" alt="Pauli Transfer Matrix corresponding to the iToffoli gate."/>
</div>

The procedure to compute a value of an intersection in the heatmap (for example the green pixel on the left figure) consists of:
- Preparing the list of eigenstates corresponding to the input operator. For example, if we consider the input operator ZZI (x-axis of the upper figure), the list of considered eigenstates is: $$\ket{000}$$ (+1 eigenvalue), $$\ket{010}$$ (-1 eigenvalue), $$\ket{100}$$ (-1 eigenvalue) and $$\ket{110}$$ (+1 eigenvalue). In general, if an input Pauli operator has $$k$$ non-identity operators, then $$2^k$$ distinct input eigenstates are sufficient, corresponding to all possible $$\pm 1$$ eigenvalue assignments of the non-identity operators.
- Computing the expectation value of each evolved eigenstate with respect to the output operator. For example, if we consider the output operator IXX (in the y-axis), the evolved state corresponding to the first eigenstate $$\ket{000}$$ is denoted $$\ket{\psi_\mathrm{evolved}(000)} = \mathrm{iToffoli} \ket{000}$$. The expectation value is then given by $$\left< \psi_\mathrm{evolved}(000) \lvert IXX \rvert \psi_\mathrm{evolved}(000) \right>$$.
- Recombining all the expectation values. The expectation values of each evolved state are then recombined according to the eigenvalue of the input state, and rescaled with a factor depending on the number of different eigenstates considered as input (here $$1/4$$ because there are 4 different input eigenstates): 

$$\mathcal{E}_{ZZI-IXX} = \frac{1}{4}\left( \left< \psi_\mathrm{evolved}(000) \lvert IXX \rvert \psi_\mathrm{evolved}(000) \right> + \left< \psi_\mathrm{evolved}(110) \lvert IXX \rvert \psi_\mathrm{evolved}(110) \right>  -\left< \psi_\mathrm{evolved}(010) \lvert IXX \rvert \psi_\mathrm{evolved}(010) \right> - \left< \psi_\mathrm{evolved}(100) \lvert IXX \rvert \psi_\mathrm{evolved}(100) \right> \right)$$

When both the ideal $$\mathcal{E}_\mathrm{ideal}$$ and experimental $$\mathcal{E}_\mathrm{exp}$$ PTM are known, the <a href="{{ fidelities.url | prepend: site.baseurl }}#entanglement-fidelity" target="_blank">process fidelity</a> can be computed as:

$$ F_e = \frac{1}{d^2} \mathrm{Tr} \left( \mathcal{E}_\mathrm{ideal}^\intercal  \mathcal{E}_\mathrm{exp} \right) $$

with $$d=2^n$$ the number of dimensions.

## Assumptions

Quantum process tomography relies on the same assumptions as <a href="{{ qst.url | prepend: site.baseurl }}" target="_blank">quantum state tomography</a>: 
- QPT assumes that every experimental run prepares the qubits in the same state, without correlation with the previous run.
- QPT also assumes that the preparation and measurement of the quantum state are error-free.

## Limitations

QPT is time-consuming, and the number of simulations required scales exponentially with the number of qubits involved in the quantum process. For example, evaluating a single intersection on the PTM for a 3-qubit gate requires a series of runs over the $$2^3$$ possible input states in the worst case. Assuming it is done for each of the $$4096$$ intersections in the PTM, it requires at least running $$\sim 10^4$$ different quantum circuits for a total of $$\sim 10^7$$ shots (assuming 1000 shots for each circuit). 

## Extension

Quantum process tomography has been extended to gate-set tomography, which assumes that the native-state preparation, measurement, and gates are subject to errors.

## Implementation

An example of QPT implementation is provided in the Qiskit experiments documentation available <a href="https://qiskit-community.github.io/qiskit-experiments/stubs/qiskit_experiments.library.tomography.ProcessTomography" target="_blank">here</a>.

## References
{% bibliography --cited %}
