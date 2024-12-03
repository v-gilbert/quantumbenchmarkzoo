---
description: >
  Distances
---
# Distance measures

Distance measurements are employed to measure the distance that quantitatively separate two quantum states. 

## Trace distance

The classical **trace distance** (also known as **Kolmogorov** or **L_1** or **total variation** distance) computes the distance between 2 classical probability distributions. Considering 2 probability distributions $$\{p_x\}$$ and $$\{q_x\}$$ the classical trace distance is given by:

$$D(p_x, q_x) = \frac{1}{2} \sum_x |p_x - q_x|$$

The quantum generalization of this metric is the quantum trace distance, which measure the distance between 2 quantum states $$\rho$$ and $$\sigma$$:

$$D(\rho, \sigma) = \frac{1}{2} Tr |\rho - \sigma|$$

For further details, one may refer to {% cite nielsen2010quantum %} Part III. Chapter 9.

## Fidelity

The classical **fidelity** computes the distance between 2 classical probability distributions $$\{p_x\}$$ and $$\{q_x\}$$:

$$F(p_x, q_x) = \sum_x \sqrt{p_x q_x}$$

The fidelity is not a metric: $$F(p_x, q_x) = 1$$ when $$\{p_x\}$$ and $$\{q_x\}$$ are identical. 

The quantum fidelity between 2 quantum states $$\rho$$ and $$\sigma$$ is defined by:  

$$F(\rho, \sigma) = Tr \left( \sqrt{\sqrt{\rho} \sigma \sqrt{\rho}} \right)$$ 

The fidelity and its square are both referenced as fidelity in the litterature.

For further details, one may refer to {% cite nielsen2010quantum %} Part III. Chapter 9.

# References
{% bibliography --cited %}
