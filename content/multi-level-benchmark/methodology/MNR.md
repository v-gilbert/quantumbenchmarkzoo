---
title: Metric Noise Resources
description: >
  Metric noise resources (MNR): a methodology optimizing resources in quantum computing systems by analyzing trade-offs between performance and resource costs.
---

{% assign bi = site.nav.Business-informations | where: "page-id", "benchmarking-initiatives" | first %}  

# Metric Noise Resource (MNR)

## Motivation

The Metric-Noise-Resource (MNR) methodology was introduced in 2022 by M. Fellous-Asiani et al. {% cite FellousAsiani2023 %} in the context of the <a href="{{ bi.url | prepend: site.baseurl }}#quantum-energy-initiative-qei-2022" target="_blank">Quantum Energy Initiative</a> {% cite Auffves2022 %}. The authors motivate the creation of this methodology by the need for a multi-level approach to understand and optimize the resource consumption of quantum computers. As explained by the authors, such an approach requires a strong knowledge of quantum processors at a physical level (e.g., quantum control) and at a software level (e.g., quantum error correction and quantum algorithms). This methodology aims to obtain a clear view of how resources will scale with the size of the computational task.

## Methodology

The MNR methodology aims to minimize the resources $$\mathcal{R}$$ required by a quantum computer to reach a specific target metric $$\mathcal{M}$$ and to identify/analyse non-trivial tradeoffs between the parameters under study. This minimization is done with respect to the determined control parameters. 

### Methodology's components

The MNR methodology comprises several components (see the figure for the dependency between the main components):
- **Control parameters**: The parameters can span the physical level (such as the operating temperature of the qubits) and the software level (as the size of the quantum error correction code or any quantity qualifying the architecture of the quantum computer).
- **Performance metric**: The metric $$\mathcal{M}$$ evaluates the quality of the output of the quantum computer. The metric, therefore, depends on the noise model of the physical qubits. It can also depend on some of the control parameters. For instance, the amount of error-correction performed will not change the noise model at the physical level but will impact the performance of the overall computation.

<!--The metric is set to a fixed satisfying **target value**  $$\mathcal{M}_0$$, which permits optimizing the control parameters. -->
- **Noise model**: The noise model defines how the noise impacts the system's evolution. It is typically given in the form of a dynamical equation (for instance, a Lindblad equation) describing the evolution of the qubits during the implementation of the quantum gates at the physical (i.e., unprotected by error-correction) level. This equation depends on the control parameters. By modifying these parameters, the noise felt by the qubits is therefore modified, which, in return, modifies the performance metric and, therefore, the accuracy of the computation. For instance, if the qubits are sensitive to thermal noise, the noise model will be the dynamical equation describing this dynamics, and it will depend on the temperature of the qubits, one of the control parameters.

<!--The noise model is closely linked to the control parameters' settings and directly impacts the performance metric.-->
- **Resources**: It defines the resources of interest, whose consumption has to be minimized. The resources can be any cost function one desires to minimize at any level of the stack (e.g., it can be the time required to run a quantum algorithm, the energy consumption, the physical volume occupied by a quantum processor, etc.). The resource consumed depends on the control parameters.

<div class="center">
  <img src="/img/multi-level-benchmark/mnr.png" class="img-medium" alt="Component dependancy in the Metric Noise Resource (MNR) methodology."/>
</div>

### Applying MNR

The principle of the approach boils down to a minimization under constraints. One asks to minimize the resource spent by the computation, under the constraints that the performance metric is larger or equal to a target value $$M_0$$. This target guarantees the computation is sufficiently accurate. The minimization is performed by varying the control parameters.  
Solving the minimization allows finding optimal values for the control parameters so that the architecture minimizes the spent resources while guaranteeing the computation is sufficiently successful.  
The main interest of the approach is that it allows for holistically optimizing the computer as the controllable parameter can come from software aspects (amount of error-correction), or hardware ones (speed of the gates, temperature of the qubits, etc). As explained in various examples below, it allows for resolving non-trivial tradeoffs when the architecture is optimized.   

<!--
The resource efficiency $$\eta = \mathcal{M} / \mathcal{R} $$ is a ratio between the metric $$\mathcal{M}$$ and the resources $$\mathcal{R}$$ (inspired by the Flops/Watt efficiency metric used in the <a href="https://top500.org/lists/green500/2025/06/" target="_blank">Green500</a> ranking). The MNR methodology aims to minimize the resources $$\mathcal{R}$$ required to reach a specific target metric $$\mathcal{M}$$.
-->
## Implementation Examples

Different examples using this methodology are given in the initial paper {% cite FellousAsiani2023 %}. These examples use simplified models to provide insights about resource consumption scaling. Below, we follow the logic of the paper, which introduces three simple pedagogic examples, optimizing the consumption of single-qubit gates, before going to the detailed example of the optimization of a full-stack model of a fault-tolerant quantum computer, implementing Shor’s algorithm with superconducting qubits.

### Noisy single-qubit gate implementation (quantum-level)

Section III. A of {% cite FellousAsiani2023 %} minimizes the power consumption of quantum gates to reach a satisfying fidelity. It studies the tradeoffs between:
- The duration of a quantum gate, which is directly linked to its power consumption. Indeed, as the duration gets shorter, the required power increases.
- The error rate of the quantum gate (in particular, the probability of getting a spontaneous emission). The error rate increases with the duration of the quantum gate.

A sweet spot to the gate duration is found during the optimization: it shouldn’t be too long because it would be too noisy, but not too short because it would then lead to a too high consumption. Applying the MNR methodology resolves this tradeoff and finds the minimum power (and optimized control parameters) to implement the gate with the targeted fidelity.

The following parameters are considered:
- **Control parameters**: Duration of the microwave pulse.
- **Performance metric**: Worst-case infidelity of the quantum gate.
- **Noise model**: The action of the noise is described by a Lindblad equation depending on the duration of the microwave pulse. The shorter the pulse, the less noisy the dynamics become.
- **Resources**: The power consumption of the quantum gate. The shorter the pulse, the more consuming the gate becomes.

### Noisy single-qubit gate implementation (macroscopic-level)

Section III. B of {% cite FellousAsiani2023 %} minimizes the power consumption, including higher-level controls and the cryostat. The control parameters are the temperature of the qubits in the cryostat and the attenuation factor. Modifying these two control parameters allows for mitigating thermal noise but at an increasing cost in power consumption, leading to a tradeoff that needs to be resolved.  

<!--
It studies the trade-offs between:
- The temperature of the qubits in the cryostat and the attenuation factor that lowers the input pulse corresponding to the quantum gate.
- The power the cryogenic system requires to realize the quantum gate with a specific fidelity. The power consumption of the cryogenic system increases as the temperature of the qubits gets lower (as well as for higher attenuation factors), which reduces the errors.
-->

The following parameters are considered: 
- **Control parameters**: The attenuation factor of the attenuators in the control line and the temperature of the qubits.
- **Performance metric**: Worst-case infidelity of the quantum gate.
- **Noise model**: The noise of the gate is described by a Lindblad equation depending on both control parameters. This equation includes the effect of thermal noise and spontaneous emission. The larger the attenuation, and the colder the qubits, the less noisy the evolution will be.
- **Resources**: The power consumption of the cryogenic system. The larger the attenuation and the colder the qubits, the larger the consumption will be.

As one can see, there is a tension between asking for low noise and low consumption by tuning the control parameters. Applying the MNR methodology allows finding the optimal qubit’s temperature and attenuation so that the consumption is minimized under the constraint that the gate fidelity is at least equal to some target.

### Circuit compression degree

Section IV of {% cite FellousAsiani2023 %} studies the degree of compression of the quantum circuit and its impact on the power consumption of the quantum computer. It highlights the tradeoffs between:
- The degree of compression of the circuit (ability to run quantum gates in parallel), the attenuation factor, and the temperature of the qubits.
- The total power required by the cryogenic system to run the circuit.  

As the circuit gets compressed, its fidelity increases because qubits have only short idling times. However, the more compressed it becomes, the more parallel gates are implemented, increasing the system’s power consumption. It leads to the aforementioned tradeoff.
<!--
However, running multiple gates at once increases the system's power consumption.
-->
The following parameters are considered: 
- **Control parameters**: The attenuation factor of the attenuators in the control line, the temperature of the qubits, and the circuit compression factor.
- **Performance metric**: An approximation of the worst-case fidelity of the quantum circuit. It depends on the noise model, but also on the circuit compression factor.
- **Noise model**: The noise of the gates is described by a Lindblad equation depending on both the attenuation factor and the temperature of the qubits.
- **Resources**: The power consumption of the cryogenic system.

In this example, the optimal qubit’s temperature, attenuation, and circuit compression are found so that the consumption is minimized under the constraint that the circuit fidelity is at least equal to some acceptable target.

### Fault-tolerant factorization

Section V  of {% cite FellousAsiani2023 %} studies the potential advantage of a quantum computer implementing Shor's algorithm using the Steane code (a fault-tolerant quantum error correction code) for superconducting qubits. The authors emphasize that the model is highly idealized (very optimistic qubit qualities). For this reason, this example should be understood as a proof of concept of how to apply the methodology in a complete model of fault-tolerant quantum computing, rather than a precise estimate based on near-term qubits.  
<!--
It highlights the trade-offs between:
The number of concatenation layers in the code (the fidelity of the quantum circuit increases with the number of layers).
The power required to execute the fault-tolerant quantum circuit and the execution duration. The power consumption and duration of the algorithm increase with the number of layers.
-->
The following parameters are considered: 
- **Control parameters**: The temperature of the qubits, the temperature of the signal generation, the attenuation factor, and the number of concatenation layers in the quantum error correction code (it quantifies the number of physical qubits encoding a logical qubit).
- **Performance metric**: The success probability that the quantum circuit is successfully implemented (derived from the logical error rate of the logical gates).
- **Noise model**: Lindblad equation describing the noisy dynamics of the qubits. It accounts for spontaneous emission and thermal noise.
- **Resources**: Power consumption of the system to successfully run the quantum algorithm.

In this example, the optimal qubit’s temperature, attenuation, number of physical per logical qubits (more formally, the concatenation level), and signal generation’s temperature are found so that the power consumption of the computer is minimized under the constraints that the algorithm is implemented with a sufficiently high targeted success probability.

Interestingly, the authors show that it is sometimes energetically more interesting to put qubits at a higher temperature and compensate for the extra noise induced by doing more error-correction than what a typical estimate would indicate. Their work also suggests that in a specific regime, the quantum computer could factor RSA using more time than a classical computer, but consuming less energy.

## References
{% bibliography --cited %}