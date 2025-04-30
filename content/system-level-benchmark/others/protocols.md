---
description: >
  Protocols used for other system-level benchmarking experiments
---

# Other system-level benchmarking protocols

## Protocols based on Quantum Volume

{% assign qv = site.other-system-level-protocols | where: "page-id", "quantum-volume" | first %}
- <a href="{{ qv.url | prepend: site.baseurl }}">Quantum Volume (QV)</a> (2017) 
In a nutshell, the Quantum Volume (QV) evaluates the ability of a quantum computer to reliably run a square circuit. A quantum computer with a Quantum Volume (QV) of size $$n$$ is able to reliably execute a quantum circuit with at most $$n$$ qubits with maximum gate depth $$n$$ {% cite cross2019validating %}.

{% assign clops = site.other-system-level-protocols | where: "page-id", "clops" | first %}
- <a href="{{ clops.url | prepend: site.baseurl }}">Circuit Layer Operation per Second (CLOPS)</a> (2021)  
In a nutshell.


## Other protocols 

{% assign ques = site.other-system-level-protocols | where: "page-id", "ques" | first %}
- <a href="{{ ques.url | prepend: site.baseurl }}">Quantum Unitary Evolution Score (QUES)</a> (2021)  
In a nutshell, the QUES score evaluates the ability of a quantum computer to reliably execute a minimal implementation of the Quantum Singular Value Transformation (QSVT) algorithm. This protocol involves $$n$$ plus one ancilla qubit where $$n$$ is set by the user. Notably, the scheme is scalable, as it requires measurement of only a single qubit, and it provides an estimate of the fidelity of the overall quantum operation.

# References
{% bibliography --cited %}