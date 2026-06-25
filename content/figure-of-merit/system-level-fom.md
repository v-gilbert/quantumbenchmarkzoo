---
title: System-level FOM
description: >
 Catalogue of system-level metrics for benchmarking quantum computers.
navbar-page-id: application-fom
---

# System-level Figure of Merit

This section introduces the different figures of merit employed to evaluate quantum computers at a system-level. Some figure of merti are system-dependent while others can be used on any system.

## System independent figure of merit

<div id="minimum-distinguishability-cost"></div>
### Minimum distinguishability cost

The minimum distinguishability cost is a figure of merit introduced in the <a>AppQSim benchmark suite</a> by E. Granet et al. {% cite granet2025appqsim %}. 

Let's consider a fixed size circuit composed of n_g gates. Let $$t$$ the ideal expectation value of this circuit, $$m$$ the obtained expectation value from the quantum computer, $$\sigma^2$$ the variance of the ideal expectation value, the aim is to compute the optimal number of shots S such that: 
$$ \frac{(t-m)^2}{\sigma^2}*S = 0.997$$

The final distinguishability score is then:
$$S = n_g * S$$


## References

{% bibliography --cited %}