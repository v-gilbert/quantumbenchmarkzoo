---
title: Many-body quantum score
datatable: true
description: >
  Many-body quantum score: benchmarking method assessing the entanglement rate and the ability of quantum computers to simulate quenched Hamiltonian dynamics.
navbar-page-id: application-benchmarks-protocols
---

# Many-body Quantum Score (MBQS)

## Motivation

Quantum many-body problems are believed to be particularly adapted to quantum computers and may provide a setting in which quantum advantage can be realized. The MBQS protocol aims to benchmark quantum computers' ability to reliably simulate quenched Hamiltonian dynamics. This protocol is scalable and is designed for analog and gate-based quantum computers.

## Protocol

The MBQS protocol was proposed in 2026 by H. Erbin et al. {% cite Erbin2026ManybodyQS %} and evaluates the ability of a quantum computer to simulate the Hamiltonian dynamics of a 1D Ising chain or ring. The main idea is to evaluate the correlations between different qubits (sites) constituting the chain at a specific time $$t^*$$. In one-dimensional systems, the time $$t^*$$ corresponds to a correlation peak and depends on the ring size $$L$$. In the paper, this value is computed via Pulser and QuTiP, but it can also be efficiently approximated with a formula. In the picture, three antipodal correlation peaks are displayed: one corresponding to the ring length $$L=3$$ (blue), one to $$L=5$$ (red), and one to $$L=9$$ (green). As the size of the ring increases, $$t^*$$ increases, and the peak magnitude decreases (see the diagram in the picture). The correlation values obtained for each length $$L$$ are then compared to the ideal values derived theoretically for the Ising model in polynomial time $$O(L^3)$$ (for rings composed of $$L$$ qubits, the antipodal site corresponds to $$\ell = \lfloor L/2 \rfloor$$). In this way, the protocol tests the spreading of correlations across different system sizes and uses this behavior as a proxy for entanglement growth.

<div class="center">
  <img src="/img/application-level-benchmark/MBQS-presentation.png" class="img-large" alt=""/>
</div>

Steps of the protocol:
- The system is prepared in an initial state (for example, $$\ket{00...0}$$ and $$\ket{++...+}$$ are used in the paper).
- The system is evolved until $$t^*$$ with the Ising model Hamiltonian.
- The qubits are measured, and the correlation between qubits $$i$$ and $$j$$ is computed.
- The experiment is repeated several times for different system sizes $$L$$ (and hence different $$t^*$$).

The 2-point correlation between qubits $$i=0$$ and $$j=\ell$$ is evaluated with the formula: 

$$g_\ell(t) = \left< \sigma_i^z(t) \sigma_j^z(t) \right> - \left< \sigma_i^z(t) \right>  \left< \sigma_j^z(t) \right>$$

where $$\left< \sigma_i^z \right>$$ corresponds to the average eigenvalue associated with the observable $$\sigma^z$$ on the qubit $$i$$. For each length $$\ell$$, the value of the 2-point correlation function is computed experimentally with the quantum computer $$g_\ell^{\mathrm{exp}}(t)$$ and theoretically calculated with a classical computer $$g_\ell^{\mathrm{th}}(t)$$. The comparison between these two values gives a scoring function $$P_2(L)$$ (see eq. 2.4 of {% cite Erbin2026ManybodyQS %}) that equals $$1$$ for classical random output and $$0$$ for a perfect result. The quantum computer is assumed to validate a score $$L$$ if $$P_2(L)$$ gets below a certain threshold. The authors propose a notation for the MBQS protocol: $$MBQS_{\mathrm{+}}(0.05)$$, where the $$+$$ denotes the initial state $$\ket{+}$$ and $$0.05$$ the value of the threshold.

This protocol can be extended to gate-based quantum computers using Trotter approximation or block-encoding methods. The initial paper example focuses on qubits arranged in a ring structure. This protocol might also be extended to open boundary conditions with chains of qubits.

## Assumptions

- The compiler may use all possible tricks to improve the mapping of the quantum circuit, which can lead to significant extra processing time.
- Error mitigation is authorized in this protocol. However, the authors recommend reporting values with and without error mitigation methods to capture the raw performance of the quantum computer.

## Limitations

- This protocol is limited to 1D geometry and allows computing exact correlation values in $$O(L^3)$$. Theoretical or approximate derivations of the value of antipodal correlation peaks for more complex geometries are not currently known.
- As the time $$t^*$$ scales with $$L$$, the height of the peak deacreases exponentially. It entails an exponential number of measurements required to precisely evaluate the 2-point correlation function (see fig. 26 in the article {% cite Erbin2026ManybodyQS %}). In this case, the speed of the quantum computer will be important and can be considered in the test.

## Results

The following figure is reproduced from the article {% cite Erbin2026ManybodyQS %} and plots a volumetric representation of the final score for different threshold values $$\epsilon$$ and different lengths $$L$$. The evaluation is conducted on a Pasqal device with error mitigation (left), a noisy emulator (middle) and an ideal noiseless emulator (right). The ideal emulation shows that any length $$L$$ from 3 to 12 can be validated with a threshold $$\epsilon = 0.2$$ (right plot). The noise of Pasqal device makes the threshold $$\epsilon = 0.2$$ inaccessible beyond $$L=5$$. The readout error mitigation method improves the results produced by the Pasqal machine compared to a noisy emulations without error mitigation. 

<div class="center">
  <img src="/img/application-level-benchmark/MBQS-volumetric-plot.png" class="img-large" alt=""/>
</div>

## Implementations

There is currently no publicly available implementation of the MBQS protocol.

## References
{% bibliography --cited %}