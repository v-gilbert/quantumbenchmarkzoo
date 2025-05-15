---
description: >
  Protocols used for other system-level benchmarking experiments
---

# Other system-level benchmarking protocols

## Protocols based on the Quantum Volume

{% assign qv = site.other-system-level-protocols | where: "page-id", "quantum-volume" | first %}
- <a href="{{ qv.url | prepend: site.baseurl }}">Quantum Volume (QV)</a> (2017) {% cite cross2019validating %}  
In a nutshell, the Quantum Volume (QV) evaluates the ability of a quantum computer to reliably run a square circuit. A quantum computer with a Quantum Volume (QV) of size $$n$$ is able to reliably execute a quantum circuit with at most $$n$$ qubits with maximum gate depth $$n$$.

{% assign clops = site.other-system-level-protocols | where: "page-id", "clops" | first %}
- <a href="{{ clops.url | prepend: site.baseurl }}">Circuit Layer Operation per Second (CLOPS)</a> (2021) {% cite wack2021qualityspeedscalekey %}  
In a nutshell, the CLOPS protocol evaluates the number of layers of gates that can be successfully realized on a quantum computer in a single second. This protocol is based on the Quantum Volume protocol.  


## Protocols for useful algorithms' minimal tasks

{% assign qlinpack = site.other-system-level-protocols | where: "page-id", "quantum-linpack" | first %}
- <a href="{{ qlinpack.url | prepend: site.baseurl }}">Quantum Linpack</a> (2020) {% cite dong2021random %}  
In a nutshell, the quantum LINPACK proposal aims to evaluate the capability of a quantum computer to block-encode a randomly generated matrix. This step is necessary for solving Quantum Linear System Problems (QLSP). The block-encoding is accomplished efficiently by constructing a random quantum circuit and defining the corresponding random matrix. The success of the operation is evaluated by estimating the probability of measuring the ancilla qubits of the block encoding step (generally one or two qubits depending on the type of the matrix being generated) in the $$\ket{0}$$ state. This empirical probability is then compared to the ideal outcome obtained via exact classical simulation to assess the relative error of the quantum computer process.


{% assign ques = site.other-system-level-protocols | where: "page-id", "ques" | first %}
- <a href="{{ ques.url | prepend: site.baseurl }}">Quantum Unitary Evolution Score (QUES)</a> (2021) {% cite Dong2022 %}   
In a nutshell, the QUES score evaluates the ability of a quantum computer to reliably execute a minimal implementation of the Quantum Singular Value Transformation (QSVT) algorithm. This protocol involves $$n$$ plus one ancilla qubit where $$n$$ is set by the user. Notably, the scheme is scalable, as it requires measurement of only a single qubit, and it provides an estimate of the fidelity of the overall quantum operation.

## Others

{% assign rqops = site.other-system-level-protocols | where: "page-id", "rqops" | first %}
- <a href="{{ rqops.url | prepend: site.baseurl }}">Reliable Quantum Operations Per Second (rQOPS)</a> (2023) {% cite rQOPS2023 %}  
In a nutshell, the rQOPS score measures the number of logical operations that a large-scale fault-tolerant quantum computer can realize per second.

# References
{% bibliography --cited %}