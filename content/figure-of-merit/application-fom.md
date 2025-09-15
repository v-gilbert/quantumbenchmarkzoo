---
title: Application FOM
description: >
 Catalogue of application-level metrics for benchmarking quantum computers: time and ratio metrics.
---

# Application Figure of Merit

This section introduces the different figures of merit employed depending on the application context.

## Optimization

<div id="time-to-solution"></div>
### Time to Solution ($$TTS$$)

The Time To Solution (TSS) was introduced in {% cite ronnow2014defining %} to evaluate the performance scaling of Quantum Annealers. It quantifies the minimum number of runs $$R$$ required to sample the optimal solution at least once within the $$R$$ runs with probability $$p$$:

$$ R = \left\lceil \frac{\log(1-p)}{\log(1-s)} \right\rceil $$

$$ TTS = t_a \times R $$

where $$s$$ is the empirical success probability (i.e., probability of finding the ground state in a single annealing run). The TTS is then defined as the total time required to perform the $$R$$ runs. In its original formulation, TTS accounts solely for the annealing time per run $$t_a$$ and does not include additional overheads such as system calibration, initialization, measurement, delays between runs, etc...

<div id="time-to-epsilon"></div>
### Time To Epsilon ($$ TT\epsilon $$)

The Time To Solution can be extended to the Time To $$\epsilon$$-close solution {% cite MunozBauza2025 %} which is the time required to find a state (with associated cost $$c$$) that is $$\epsilon$$-close to the ground state (with associated cost $$c^*$$) at least once within the $$R$$ runs with probability $$p_{c \leq c^* + \epsilon \lvert c^* \rvert}$$. The optimal cost is denoted $$c^*$$ (we consider here a minimization problem). 


$$ R_\epsilon = \left\lceil \frac{\log(1-p_{c \leq c* + \epsilon \lvert c* \rvert})}{\log(1-s)} \right\rceil $$

$$ TT \epsilon = t_a \times R_\epsilon $$

<!-- Ajouter les déclinaisons des différents TTS avec calculs ou non annealing run. -->

<div id="speedup-ratio"></div>
## Speedup ratio

The authors of {% cite ronnow2014defining %} introduce the notion of speedup ratio. Let $$C(N)$$ (resp. $$Q(N)$$) be the time used by a classical (resp. quantum) device to find the optimal or approximate solution to a problem of size $$N$$. The speedup ratio is defined as:

$$ S(N) = \frac{C(N)}{Q(N)} $$

$$C(N)$$ (resp. $$Q(N)$$) can be estimated using $$TTS$$ or $$TT\epsilon$$ figure of merit.



<!--

Three basic and independent Figure Of Merits (FOMs) are usually sufficient to compare computers ability to solve a problem:
- Quality
- Speed
- Cost

Quality FOM tries to answer the question "Does this computer improves the results found by another one ?" 

These three basic FOMs can be combined and there exist possible trade-offs between each quantity. However, benchmark studies should furnish a full picture considering each time these three FOM. 

# Quality measures

## Success probability 

The \\(x \leq 5\\) success probability also called optimal solution probability, is the probability of finding the ground state of an Hamiltonian.

$$ s = P(X = E_\mathrm{gs}) $$

where $$X$$ denotes the random variable related to energies and $$E_\mathrm{gs}$$ denotes the ground state energy.

## Quality ratio

The quality ratio is specific to each Hamiltonian and is specified as:

$$ r = \frac{E-E_\mathrm{max}}{E_\mathrm{min}-E_\mathrm{max}} $$

where $$E$$ is the energy obtained by the quantum simulation of an instance-related Hamiltonian, $$E_\mathrm{max}$$ and $$E_\mathrm{min}$$ are the largest and smallest eigenvalues of the Hamiltonian.

# Time measures

-->

# References
{% bibliography --cited %}