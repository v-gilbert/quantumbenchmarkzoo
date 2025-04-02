---
datatable: true
description: >
  qBAS protocol.
---

# qBAS protocol

The qBAS protocol was introduced by M. Benedetti et al. in {% cite Benedetti2019 %} in 2018. The whitepaper describes the framework **Data-Driven Quantum Circuit Learning** (DDQCL) which evaluates the performance of quantum computers at learning probabilistic generative model. The data set model to learn is the **Bars and Stripes** (BAS) data set. This data set is easy to generate and verify for systems sizes up to hundred of qubits.

Bars and Stripes is a set of images of $$n \times m$$ pixels. For a fixed value of $$n$$ and $$m$$, there are $$N_{BAS(n, m)}=2^n + 2^m -2$$ images in the image set. The protocols aims to evaluate the capabilities of quantum computers to uniformely sample bitstring corresponding to each image of this set. Each image should be sampled with probability $$1/N_{BAS(n, m)}$$. Each pixel has a binary color (blue or white), which permit a direct transposition to the state of the qubit $${0, 1}$$.

<div class="center">
  <img src="/img/protocols/applications/qBAS.jpeg" class="img_content" alt="Galton's board experiment and Boson sampling circuit"/>
</div>

The sampling fidelity of the quantum computer is evaluated using a metric inspired from the <a href="{{ 'content/figure-of-merit/fidelities-errors' | prepend: site.baseurl }}" target="_blank">Kullback-Leibler deviation</a>. Their metric is a variant of the negative likelihood:

$$
  C(\theta) = -\frac{1}{D}\sum_{d=1}^D \ln (\max(\epsilon, P_{\theta}(x^{(d)})))
$$


- method adapted for gate-based models
- designed to benchmark hybrid quantum-classical systems

