---
datatable: true
description: >
  Protocols used for quantum supremacy experiments
---

# Quantum supremacy

The comparison between quantum and classical computers can be based on various criteria, such as processing time, computational accuracy, and energy consumption. Quantum supremacy refers to experiments demonstrating that a quantum computer can solve a specific computational task significantly faster than a classical computer. These tasks are typically designed to be exceptionally challenging for classical systems, requiring exponentially scaling resources with the problem size. While such tasks may not have practical applications, they serve as a proof of concept for the superior computational power of quantum systems.

## Protocols

{% assign rcs = site.supremacy-protocols | where: "page-id", "random-circuit-sampling" | first %}
- <a href="{{ rcs.url | prepend: site.baseurl }}">Random Circuit Sampling (RCS)</a>

{% assign bs = site.supremacy-protocols | where: "page-id", "boson-sampling" | first %}
- <a href="{{ bs.url | prepend: site.baseurl }}">Boson Sampling (BS)</a>\
In a nutshell, boson sampling is a protocol used to benchmark the performance of Boson-based QPUs (photons in this case). The task consists of running a randomly generated quantum circuit of optical elements (beam splitters and phase shifters) with a specific initial state several times. It is then possible to build an output distribution from these samples, representing the experimental probability output associated with each quantum state. This sampling task is hard for classical computers: it requires exponential resources to get approximately the same output distribution as the quantum computer. Resources required by classical systems to emulate the quantum computer are usually interpolated for large experiments. For these experiments, quantum systems are expected to work correctly (there is, unfortunately, no direct means to check that the QPU is doing everything right).

{% assign qsim = site.supremacy-protocols | where: "page-id", "quantum-simulation" | first %}
- <a href="{{ qsim.url | prepend: site.baseurl }}">Quantum simulation (Qsim)</a>
In a nutshell, quantum simualtion tasks attempt to simulate a continuous time quantum system evolution. It can be done either using an analog machine that simulates the whole process or using a digital quantum computer implementing unitaries that are built from an approximation (Trotterization) of the initial quantum evolution. In this frame, the performance test consits in sampling the probability distribution corresponding to the quantum evolution with a quantum computer faster than a classical emulation of this evolution.

## Experiments

This summary is an adaptation of the table provided by R. Larose in {% cite larose2024brief %} (Table 1.). We follow the terminology exposed by R. Larose to define experiments that have been challenged, weakly refuted and strongly refuted:
- **Challenged**: Any work that present a significant improvement in the classical simulation time.
- **Weak refutation**: Any work that present an improved classical simulation which reasonably demonstrates that the quantum computing claim could be classically simulated in the near future.
- **Strong refutation**: Any work that present a classical simulation of the quantum supremacy experiment faster than the quantum computer.


List of acronyms:\
**RCS**: Random Circuit Sampling.\
**GBS**: Gaussian Boson Sampling.\
**Qsim**: Quantum simulation.\
**n**: Number of qubits involved in the experiment.\
**m**: Number of layers for the RCS experiments, Number of modes for GBS experiments.\
**Challenged**: Litterature that either improve the classical simulation or question some parts of the claim.\
**Weakly refuted**: Litterature improving classical simulation with new algorithms suggesting classical computers powerfull enough could break the claim.\
**Refuted**: Litterature providing classical experiments that surpasses the supremacy claim.

{% include tables/supremacy-table.html %}

<script type="text/javascript">
    $(document).ready(function() {
      $('.supremacy-table').DataTable(
        {
          "pageLength": 100
        } 
      );
    });
</script>



## References
{% bibliography --cited %}