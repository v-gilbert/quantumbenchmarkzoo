---
description: >
  Protocols used for randomized benchmarking
---

# Randomized Benchmarking Protocols

Randomized Benchmarking (RB) protocols evaluate the ability of the quantum computer to perform quantum operations. The global idea is to use varied-length random quantum circuit based on a specific gate set to quantify the average error rate of the gates composing the sequence. The sequence length is denoted $$l \in \{l_1, l_2, ..., l_k\}$$. The random circuits are built is a way that the measurement of the qubit yield a deterministic output bitstring. If the bitstring is measured, the computation is considered a success, otherwise, a failure. The average probability of sucess is extracted for each circuit length $$l$$ and is used to fit an exponential decay function of the sucess probability: 

$$ p_{sucess}(l) = A f^l + B $$

where $$A$$, $$B$$ and $$f$$ are the fit parameters. The states prepartion and measurement errors are absorbed in the coefficients $$A$$ and $$B$$. In this fit, $$f$$ is related to the average error rate by $$r = 1 - f - (1-f)/d$$ where $$d = 2^n$$ is the size of the Hilbert space. 

Following the classification done in {% cite PRXQuantum.3.020357 %} by J. Helsen et al. a randomized benchmarking experiment is composed of the following attributes:
- $$\mathbb{G}$$: A **group of gates** which are applied during the RB protocol. The $l$ gates composing the sequence are drawn from this group. This group is usually a subgroup of the unitary group (e.g. Clifford group).
- $$\phi_r$$: A **reference implementation** $$\phi_r$$ that map the ideal implementation of each gate $$g \in \mathbb{G}$$. The decomposition of this single gate to elementary gates used by the quantum computer should be specified
- $$\nu$$: A **probability distribution** (or a set of probability distribution) $$\nu$$ defining how each gate $$g$$ is selected from the group $$\mathbb{G}$$. In almost all cases, this distribution is a uniform distribution.
- $$g_{end}$$: An **ending gate**. It is usually used to revert the action of the sequence of gate over the initial state.
- $$\{l_1, l_2, ..., l_k\}$$: A **set of sequence lengths** that denote the length of the random sequence of gates. These lengths are used to fit the exponential decay function.
- $$\rho_0$$: An **input state**. In many cases, the input state is just the pure state $$\ket{000...0}$$.
- $$\{\Pi_i\}_{i \in \mathcal{I}}$$: A **Positive Operator Value Measure** (POVM).

A generic quantum circuit can be drawn from these specifications:

<div class="center">
  <img src="/img/protocols/randomized/RB-general-protocol.png" class="img_content" alt="General quantum circuit associated to the randomized benchmarking protocol"/>
</div>


## Sampling problems

{% assign hog = site.randomized-protocols.sampling-problems | where: "page-id", "hog-problem" | first %}
- <a href="{{ hog.url | prepend: site.baseurl }}">Heavy Output Generation Problem</a>

## Quantum volume protocols

{% assign qv = site.randomized-protocols.volume-benchmarks | where: "page-id", "quantum-volume" | first %}
- <a href="{{ qv.url | prepend: site.baseurl }}">Quantum Volume</a>

{% assign clops = site.randomized-protocols.volume-benchmarks | where: "page-id", "clops" | first %}
- <a href="{{ clops.url | prepend: site.baseurl }}">Circuit Layer Operation Per Second (CLOPS)</a>

# References

{% bibliography --cited %}

