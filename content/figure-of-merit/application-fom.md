---
description: >
  Application FOM
---

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

## Time To Solution

The Time To Solution (TSS) was introduced in {% cite ronnow2014defining %} for Quantum Annealing and evaluates the minimum number of runs of a quantum simulation required to find the ground state at least once with probability $$p$$:

$$ R = \left\lceil \frac{\log(1-p)}{\log(1-s)} \right\rceil$$

where $$R$$ is the number of runs and $$s$$ is the empirical success probability.

This metric can be extended to the Time to $$\epsilon$$-close solution which is the time required to find a state that is $$\epsilon$$-close to the ground state at least once with probability $$p$$. We note it $$R_\epsilon$$.

<!-- Ajouter les déclinaisons des différents TTS avec calculs ou non annealing run. -->

## Speedup ratio

The authors of {% cite ronnow2014defining %} introduce a speedup ratio. $$C(N)$$ resp. $$Q(N)$$ is the time used by a classical resp. quantum device to solve a problem of size $$N$$. The speedup ratio can be defined as:

$$ S(N) = \frac{C(N)}{Q(N)}$$

$$C(N)$$ resp. $$Q(N)$$ can be estimated with the TTS.


# References
{% bibliography --cited %}