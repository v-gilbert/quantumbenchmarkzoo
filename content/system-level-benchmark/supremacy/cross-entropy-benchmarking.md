---
title: Cross-entropy benchmarking (XEB)
datatable: true
description: >
  Cross-entropy benchmarking: a quantum supremacy protocol based on random circuit generation with classically hard simulation of output bitstrings.
navbar-page-id: supremacy-benchmarks
---

# Cross-Entropy Benchmarking (XEB)

Benchmarks based on the evaluation of the cross-entropy difference were introduced in 2016 by S. Boixo et al. {% cite Boixo2018 %}. Linear XEB became famous with the Google experiment conducted in 2019 {% cite Arute2019 %}, constituting the first claim to achieve quantum computational supremacy. XEB is based on a random circuit sampling task considered hard for classical computers. 

## Motivation 

The XEB protocol was initially developed to demonstrate that quantum devices with errors can outperform classical computers at solving highly specific sampling tasks. The sampling task is deliberately chosen to be difficult for the classical computer (i.e., the cost of sampling from the correct distribution scales exponentially with the system size). 

## Protocol

For a given random quantum circuit, it is possible—albeit computationally intensive—to calculate the ideal output probability distribution $$p(x_i)$$ of each bitstring $$x_i$$ using a classical computer. The classical resources needed for the computation scale exponentially with the number of qubits $$n$$. For random circuits (for example, circuits generated from the Haar measure), the distribution of the ideal output probability across bitstrings follows an exponentially decaying distribution called the Porter-Thomas law. Following this law, some bitstrings might have higher sampling probabilities than others (e.g. a bitstring might occur with probability $$\frac{8}{2^n}$$, others with probability $$\frac{7}{2^n}$$, others with probability $$\frac{6}{2^n}$$ etc...). The number of bitstrings with probability $$\frac{t}{2^n}$$ decreases like $$e^{-t}$$. If the classical or quantum device fails to sample the output state accurately, the output is supposed to be uncorrelated with the ideal probability distribution. The central idea behind the XEB protocol is to test whether the quantum processor can generate output bitstrings that exhibit statistically significant correlations with the ideal distribution. In {% cite Boixo2018 %}, the idea is to measure the output quality of a quantum algorithm implementing a random unitary $$U$$ by computing the <a>cross-entropy</a> between the sampling output of the quantum computer $$\widetilde{p}(x)$$ and the ideal output distribution $$p(x)$$:

$$ H(\widetilde{p},p) = - \sum_{x \in \{0,1\}^n} \widetilde{p}(x) \log(p(x))$$

S. Boixo et al. then use the cross-entropy difference to as a figure of merit used to define supremacy claims:

$$ \Delta H (\widetilde{p}) = H_0 -  H(\widetilde{p}, p) $$

with $$H_0$$ the uniform-sampling baseline. $$\Delta H (\widetilde{p}) \approx 0$$ if $$\widetilde{p}$$ is not correlated with the ideal distribution $$p$$. If the sampling of the quantum circuit is ideal, $$\Delta H (\widetilde{p}) \approx 1 $$. Quantum supremacy is claimed when the cross-entropy difference averaged over different circuits is above a threshold $$C$$ obtained by the best known classical method:

$$ 1 \ge \mathbb{E}_U [\Delta H (\widetilde{p})] > C $$ 

## Experiments and results

Cross-entropy benchmarking was used in Google's 2019 demonstration of quantum supremacy {% cite Arute2019 %}. In this experiment, F. Arute et al. use the <a>linear cross-entropy fidelity</a> to assess the sampling performance of the quantum computer defined as: 

$$ H_\mathrm{lin}(\widetilde{p},p) = 2^n \left( \sum_{x \in \{0, 1\}^n} \widetilde{p}(x) p(x) \right) - 1$$

For random circuits exhibiting output sampling distribution close to the ideal correct circuit distribution $$p$$ and in the Porter-Thomas regime, $$ \sum_{x \in \{0, 1\}^n} \widetilde{p}(x) p(x): \sum_{x \in \{0, 1\}^n} p(x)^2 \approx \frac{2}{2^n}$$, whereas $$\sum_{x \in \{0, 1\}^n} \widetilde{p}(x) p(x) \approx \frac{1}{2^n}$$ for random uniform output sampling distribution. It leads to $$H_\mathrm{lin}(\widetilde{p},p) \approx 1$$ when the quantum computer succeed to sample bitstrings from the right distribution corresponding to the implemented unitary $$U$$ and $$H_\mathrm{lin}(\widetilde{p},p) \approx 0$$ when the quantum computer samples bitstrings completely uncorrelated with the ideal output distribution associated with $$U$$.

The quantum circuit utilized in this experiment is shown in Fig. 1 and consists of $$l$$ layers of quantum gates. Each layer is composed of a wall of single qubit gates uniformly drawn from the set $$\{R_X(\pi/2), R_Y(\pi/2), R_{X+Y}(\pi/2)\}$$ (see yellow boxes). Single qubit gates are followed by a set of parallelized two-qubit gates applied according to specific, structured patterns (see Fig. 2 for a pattern example used in the quantum supremacy claim {% cite Boixo2018 %}). 

<div class="center">
  <img src="/img/system-level-benchmark/supremacy/XEB_supremacy_experiment.jpg" class="img-large" alt="Cross entropy benchamrking quantum circuit"/>
</div>

The quantum circuit defined in Fig. 1 is then programmed on the quantum computer and output bitstrings are collected to compute the linear cross-entropy fidelity $$H_\mathrm{lin}$$. The fidelity can only be estimated for small experiments as it require to be able to classically simulate the circuit to obtain the ideal distribution $$p$$.  
For larger experiments (i.e., in the supremacy regime), the fidelity $$H_\mathrm{lin}$$ cannot be directly computed due to the hardness of classically computing the ideal distribution $$p$$. Instead, the authors estimate $$H_\mathrm{lin}$$ by slightly modifying the circuit, which drastically reduces the complexity of classically simulating the quantum circuit.  
The largest circuit being simulated classically with simplification tricks has 53 qubits. For this circuit, the authors slightly modify the quantum circuit to simulate the ideal distribution $$p$$ and compute a linear cross-entropy fidelity of $$2.24 \times 10^{-3}$$, asserting that the average cross-entropy fidelity is greater than $$0.1%$$ with $$5 \sigma$$ confidence. The authors sample $$30,000,000$$ bitstrings to make this assertion. The authors claim that computing $$p$$ for the hardests circuits would cost 50 trillion core-hours using Schrödinger-Feynman algorithm.

## Claim refutations

This experiment, consisting of the first supremacy claim, has been first challenged by a publication which came two days before the official supremacy claim {% cite pednault2019leveraging %}, owing to a leak of the supremacy claim on a NASA pre-print server in September 2019. In this paper, E. Pednault et al. estimate that the Sycamore supremacy circuit could be simulated in a matter of days, by doing some memory modifications on the Summit supercomputer.  
A second challenge was pushed by J. Gray et al. {% cite gray2021hyper %} in 2020, who claim a $$10,000 \times$$ speedup for the classical simulation of the Sycamore supremacy circuit using tensor network methods.  
<!-- Todo: To be continued -->

## Implementations and data

The results concerning the Google experiment are available on an <a href="https://datadryad.org/dataset/doi:10.5061/dryad.k6t1rj8" target="_blank">open Dryad repository</a>.  
<!-- TODO: find implementation about cross-entropy benchmarking fidelity -->


## References
{% bibliography --cited %}
