---
title: Quantum State Tomography
description: > 
  Quantum State Tomography (QST) defines a protocol for reconstructing the density matrix associated with a quantum state from a series of measurements.
navbar-page-id: tomography
---

{% assign qpt = site.tomography | where: "page-id", "process-tomography" | first %}

# Quantum State Tomography (QST)

## Motivation

As quantum computers are partially closed-systems, one needs to better characterize the interactions of the quantum system with its environment by measuring the noise induced by unwanted interactions with the quantum system. The first motivation of Quantum State Tomography (QST) is to better understand noise processes to enhance its control when designing a quantum system.

## Protocol

The QST protocol aims to reconstruct the density matrix of an unknown quantum state via a series of measurements. Exact tomography is not achievable in practice because the reconstruction relies on a finite number of measurements, leading to residual statistical error. To explain QST, let us take a system composed of a single qubit as an example. The state of the single qubit can be represented by a point on a Bloch sphere. The repeated measurements of the quantum state along the three orthogonal axes of the sphere (X, Y, and Z constitute the three non-commuting observables) permit the precise extraction of the density matrix of the system, which can in turn be used to predict the measurement outcome of such a system. Considering the three observables: 

$$X = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, Y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}, Z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$$

The density matrix representing the quantum state can be reconstructed as: 

$$\rho = \frac{1}{2} \left( I + x X + y Y + z Z \right)$$

For a single qubit, the Bloch vector $$\mathbf{r} = (x, y, z) \in \mathbb{R}^3$$ should satisfy $$\lVert \mathbf{r} \rVert^2 = x^2+y^2+z^2 \le 1 $$. Experimentally, the values $$x, y, z$$ are obtained by measuring the expectation value of the associated $$X, Y, Z$$ operators. Let $$P_{\{X, Y, Z\}}: {\{-1, +1\}} \rightarrow \mathbb{R}$$ be the probability of observing the states associated with each -1 and +1 eigenvalue of each observable, each component of the Bloch vector is retrieved with:  

$$ \left< X \right> = P_X(-1) + P_X(+1)$$ 

$$ \left< Y \right> = P_Y(-1) + P_Y(+1)$$ 

$$ \left< Z \right> = P_Z(-1) + P_Z(+1)$$ 

which gives: 

$$ \rho = \frac{1}{2} \begin{pmatrix} 1 + \left< Z \right> & \left< X \right> - \left< Y \right>i \\ \left< X \right> + \left< Y \right>i & 1- \left< Z \right> \end{pmatrix} $$  

In general, the number of observables required to tomographically reconstruct a quantum state composed of $$n$$ qubits scales as $$O \left( 4^n \right)$$. For example, a 2-qubit state tomography requires estimating the 15 following expectation values:

$$ \left( \left< XX \right>, \left< XI \right>, \left< IX \right>, \left< IY \right>, \left< YI \right>, \left< YY \right>, \left< IZ \right>, \left< ZI \right>, \left< ZZ \right>, \left< XY \right>, \left< YX \right>, \left< ZY \right>, \left< YZ \right>, \left< ZX \right>, \left< XZ \right>\right)$$

Quantum state tomography becomes impractical beyond a few qubits because it requires estimating a number of observables that scale exponentially with the number of qubits, and many measurements are needed to evaluate the expectation value of each observable. The following figure is taken from {% cite Hashim2024 %} and represents the estimated density matrix $$\rho$$ of a two-qubit Bell-state:

<div class="center">
  <img src="/img/system-level-benchmark/tomography/Bell-state-Tomography.svg" class="img-small" alt="Quantum state tomography of a Bell state with reconstruction of the \rho matrix"/>
</div>

This tomographic reconstruction can the be used to infer the fidelity of quantum operations required to prepare the quantum state (Quantum process tomography). 
The reader interested in a pedagogical introduction to quantum state tomography can refer to chapter 8 of {% cite nielsen2010quantum %}.

## Assumptions

The QST protocol assumes that every experimental run prepares the qubits in the same state, without correlation with the previous run. 
The QST also assumes that the preparation and measurement of the quantum state is error-free (an assumption that is almost never respected {% cite merkel2013self %}).

## Limitations

Quantum state tomography is cosltly as the dimension of the density matrix $$\rho$$ scales exponentially with the size of the system. Hence, this method do not scale to large systems.

## Extensions

Quantum state tomopgraphy has been extended to many other procotols:
- <a href="{{ qpt.url | prepend: site.baseurl }}" target="_blank">Quantum process tomography</a>: evaluates the accuracy of quantum operations.
- Gate set tomography: evaluates the accuracy of each quantum gate composing a gate set.

## Implementation

The <a href="https://research.physics.illinois.edu/QI/Photonics/tomography/">Kwiat Quantum Information Group</a> provides an open source implementation of protocols related to quantum state tomography <a href="https://github.com/KwiatLab/Quantum-Tomography" target="_blank">here</a>.

## References
{% bibliography --cited %}