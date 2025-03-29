---
datatable: true
description: >
  Quantum simulation
---

# Quantum simulation

## 1. Quantum simulation with digital quantum computer

In {% cite kim2023evidence %}, Y. Kim et al. assess the potential of IBM quantum computers at solving quantum simulation problem with a digitial implementation of a continuous-time hamiltonian evolution.

## 2. Quantum simulation with quantum annealing

In {% cite king2024computational %}, A. D. King et al. establish a protocol to assess the computational supremacy of D-Wave systems. These systems are analog based quantum computer (a paradigm a bit different compared to gate-based quantum computers). The qubit layout can be described with a graph (Fig. 1.a) where each qubit is represented by a node and each programmable coupler is represented by an edge. 

<div class="center">
  <img src="/img/protocols/supremacy/quantum_sim_dwave.png" class="img_content" alt="D-Wave QPU working graph and annealing schedule"/>
</div>

Each qubit can also be individually programmed with a auto-coupler. The evolution of such system can be described with a Hamiltonian operator composed of two sub-hamiltonians: an initial Hamiltonian that dominates the evolution at the beginning $$H_I$$ ($$A(s) \gg B(s)$$ when $$s=0$$. see Fig.b) and a final Hamiltonian that dominate the end of the evolution $$H_F$$  ($$B(s) \gg A(s)$$ when $$s=1$$. see Fig.b):

$$ H(t) = A(t) H_{I} + B(t) H_{F} $$

$$ H_{I} =  \sum_{i \in V} \sigma_i^x $$ 

$$ H_{F} = \sum_{i \in V} h_i \sigma_i^z + \sum_{(i, j) \in E} J_{i,j} \sigma_i^z \sigma_j^z $$

The quantum evolution is carried out from $$t=0$$ to $$t=t_a$$. In this experiment, the annealing time $$t_a$$ is chosen to be really short (in the order of the nanosecond). The aim of the experiment is to show that the sampling of the output distribution of the quantum computer is hard to reproduce classically. 

For small instances the agreement between the results of the quantum computer and ideal classical simulation is done by computing the correlation error, which computes for each couple of qubit $$(i,j) \in E$$ the expectation value of the magnetic link $$ c_{i,j} = \left< \sigma_i^z \sigma_j^z \right>$$. The correlation error is then computed from the ground-truth value denoted by a $\sim$:

$$ \epsilon_c = \left(  \frac{\sum_{(i,j) \in E} (c_{i,j} - \widetilde{c}_{i,j})^2}{\sum_{(i,j) \in E}\widetilde{c}_{i,j}^2} \right)^{1/2} $$
