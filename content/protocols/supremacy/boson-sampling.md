---
datatable: true
description: >
  Boson Sampling
---

# Boson Sampling

The first protocol defining the boson sampling experiment was proposed by S. Aaronson and A. Arkhipov and is often called Aaronson-Arkhipov boson sampling {% cite aaronson2011computational %}. In this article, the authors use a nice analogy to explain the concept of Boson Sampling experiment. This analogy is the Galton's board which illustrates the convergence of the binomial law. This experiment is composed of a board with pegs on it. A ball is successively introduced in the upper part of the board. When the ball falls on a peg, it has half probability of falling right and harlf probability falling on the left. At the end we look at the number of balls in each column of the board. The repetition of this experiment lead to the experimental sampling of the probabilistic law determined by the arrangement of the pegs. 

In the boson sampling experiment, a photon is used instead of the ball. The track where the photon is located is called the mode. A Fock state can be used to describe the state of $$n$$ photons of $$m$$ modes. If a single photon is used with two modes, the Fock state corresponding to state $$0$$ would be $$\ket{1, 0}$$ (one photon detected in mode 0 and 0 photon detected in mode 1). The Fock state corresponding to state $$1$$ would be associated to $$\ket{0, 1}$$. The created circuit is only composed of basic linear optic gates as beam splitters and phase shifters. 

The evolution of the quantum circuit is described with a random $$\mathbb{C}^{m \times m}$$ unitary matrix with complex coefficients. In contrast with the classical experiment estimating the output probability distribution of a complex coefficient matrix requires the computation of the permanent of the unitary (which is hard to approximate in polynomial time for classical algorithms). The approximation tends to find a probability distribution $$q$$ that is close to the output probability distribution of the unitary matrix $$p$$. The total variaition distance is used to measure closeness of both probability distribution. 

The initial formulation of the boson sampling protocol is presented followed by a discussion on the variations of this protocol as the Gaussian Boson Sampling protocol with possible issues related to these protocol changes.

<!-- Boson sampling does not require entangling gates -->

## Boson Sampling Protocol

The details of the protocol are developped in {% cite aaronson2011computational %}. The analysis conducted in the paper assumes that $$m=O(n^2)$$. The number of modes is much larger than the number of photons in the system to avoid collisions and finding multiple photons at the same location when the process ends. The initial state is assumed to be the deterministic Fock state with a single photon in the first $$n$$ modes of the $$m$$ modes: $$\ket{1_{0}, 1_{1}, ..., 1_{n}, 0_{n+1}, 0_{n+2}, ..., 0_{m}}$$. 

The quantum circuit is only composed of beam splitters and phase shifters. The circuit is generated to implement a unitary transformation $$\mathbb{C}^{m \times m}$$ that is randomly drawn according to the Haar measure (the reader might refer to this nice article on Haar-random unitaries {% cite DiMatteo2021haar %}). The depth of the network is of order $$O(n log(m))$$. 

For this protocol, using a threshold photon detector working at room temperature is sufficient as the collision probability between photons is assumed to be very low. 

We list here several issues related to this protocol that might impact the classical simulation difficulty:
- The condition $$m = O(n^2)$$ is usually not respected in practise.
- Single-photon sources are nondeterministic and very hard to build the initial Fock state required by this protocol. The initialization does not scale well with the size of the problem.
- This protocol assumes that there is no photon loss, which is not the case in most experiments.
- This protocol does not provide tools to verify the result of the experiment.

## Scattershot Boson Sampling Protocol

The Scattershot Boson Sampling experiment was motivated by the experimental limits of preparing the Fock state described in the initial Boson Sampling protocol. This protocol has been simultaneously proposed by A. P. Lund et al. and in the blog of S. Aaronson {% cite lund2014boson aaronson2013scatter %}. They propose to use Spontaneous Parametric Down-Conversion (SPDC) photon sources to generate the input of the optical network. SPDC sources produce photons by pairs. When a pair of single photons is produced, one photon of the pair is used to herald the creation of the other photon. This can be done by detecting and absorbing the first photon. The behavior is the same when the SPDC source produces more than one pair of photons. If the SPDC source has a probability $$p$$ of producing a single photon, then the probability of producing $$n$$ single photons on the first $$n$$ modes with independent sources would scale as $$O(p^n)$$, which is a very big issue if we are looking for a quantum advantage as $$p$$ is usually quite small for SPDC. The idea is to put in parallel many SPDC to have a small chance at each time step, few SPDC produce at least a single photon. 

Using this protocol, the instances generated conserve the hardness clause used in the initial protocol, even if the source produced more than one pair of photons. However, in this case, it requires a photon-number-resolving detector to effectively determine the input and output state. The depth of the optical network is slightly increased to $$O(m log(m))$$. 

## Gaussian Boson Sampling Protocol

Gaussian Boson Sampling has been proposed by Hamilton et al. {% cite hamilton2017gaussian %} and provide easier experimental possibilities. In this protocol, the initial state is a gaussian state  called Single Mode Squeezed State (SMSS). The change in the initial state changes the sampling probability, which can be determined by computing the Hafnian of the Unitary matrix (instead of the permanent). This task is also proven difficult for classical computers ($$#P-complete$$). In this experince, the detetion is based on using photon-number-resolving detectors, which are quite expensive to build and require to work at very low temperature. 

An alternative to Gaussian Boson Sampling using threshold detector was proposed in {% cite quesada2018gaussian %}, which operate at room temperature. 



associated to a Single Mode Squeeze State (SMSS). 

Instead of starting from the same location, the photon can start on 
The boson sampling experiment is similar in the way that bosons, as the ball, do not interact with each other during the experiment




describes a rudimentary computer. The Galton board is used to represent a sampling experiment of the binomial law (normal law). 

put picture of the Galton board


Boson Sampling is a sampling experiment proposed by S. Aaronson and A. Arkhipov {% cite aaronson2011computational %}. The protocol considers n photons able to travel through m different modes (places where a photon can be detected). The former protocol assumes that m >> n^2 to avoid collisions (this condition is not respected in current experiments).


## Examples of Implementations

We provide here some examples of implementation of this protocol:
- Quandela
- 


## Some extra references

The reader can refer to {% cite gard2015introduction %} for a nice introduction on Boson sampling. The blog of S. Aaronson contains many interesting discussions on the subject {% cite aaronson2005blog %}.

## References
{% bibliography --cited %}