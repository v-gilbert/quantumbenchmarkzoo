---
datatable: true
description: >
  Protocols used for quantum supremacy experiments
---
{% assign modified = page.path | max_last_modified: "tables/supremacy-table.html" %}

# Quantum supremacy

The comparison between quantum and classical computers can be based on various criteria, such as processing time, computational accuracy, and energy consumption. Quantum supremacy refers to experiments demonstrating that a quantum computer can solve a specific computational task significantly faster than a classical computer. These tasks are typically designed to be exceptionally challenging for classical systems, requiring exponentially scaling resources with the problem size. While such tasks may not have practical applications, they serve as a proof of concept for the superior computational power of quantum systems.

## Experiments

This summary is an adaptation of the table provided by R. Larose in Table 1 of {% cite larose2024brief %}. We follow the terminology exposed by R. Larose to define experiments that have been challenged, weakly refuted, and strongly refuted:
- **Challenged**: Any work significantly improving the classical emulation time.
- **Weak refutation**: Any work significantly improving the classical emulation and reasonably demonstrates that the quantum computing claim could be classically simulated in the near future.
- **Strong refutation**: Any work emulating the quantum supremacy experiment faster than the quantum computer.  


**List of acronyms**:  
**RCS**: Random Circuit Sampling.  
**GBS**: Gaussian Boson Sampling.  
**Qsim**: Quantum simulation.  
**n**: Number of qubits involved in the experiment.  
**m**: Number of layers for the RCS experiments, Number of modes for GBS experiments.  
**Challenged**: Litterature that either improve the classical simulation or question some parts of the claim.  
**Weakly refuted**: Litterature improving classical simulation with new algorithms suggesting classical computers powerfull enough could break the claim.  
**Refuted**: Litterature providing classical experiments that surpasses the supremacy claim.  

{% include tables/supremacy-table.html %}

<script type="text/javascript">
    $(document).ready(function() {
      $('.supremacy-table').DataTable(
        {
          "pageLength": 100,
          "drawCallback": function(settings){ 
            MathJax.Hub.Queue(["Typeset", MathJax.Hub]); 
          }
        } 
      );
    });
</script>

## Protocols

{% assign rcs = site.supremacy-protocols | where: "page-id", "random-circuit-sampling" | first %}
- <a href="{{ rcs.url | prepend: site.baseurl }}">Random Circuit Sampling (RCS)</a>  
In a nutshell, Random Circuit Sampling consists of sampling the bitstring output distribution from a randomly generated quantum circuit. The distribution is usually supposed to have some more probable bitstring than others. The distribution used to create the quantum circuit is chosen to make the sampling task difficult for classical computers (computational time scales exponentially with the number of qubits). Importantly, the objective of RCS is not to reconstruct the entire output distribution. Instead, the protocol evaluates the likelihood of the quantum device correctly sampling from the intended distribution.

{% assign bs = site.supremacy-protocols | where: "page-id", "boson-sampling" | first %}
- <a href="{{ bs.url | prepend: site.baseurl }}">Boson Sampling (BS)</a>  
In a nutshell, boson sampling is a protocol used to benchmark the performance of Boson-based QPUs (photons in this case). The task consists of running a randomly generated quantum circuit of optical elements (beam splitters and phase shifters) with a specific initial state several times. It is then possible to build an output distribution from these samples, representing the experimental probability output associated with each quantum state. This sampling task is hard for classical computers: it requires exponential resources to get approximately the same output distribution as the quantum computer. Resources required by classical systems to emulate the quantum computer are usually interpolated for large experiments. For these experiments, quantum systems are expected to work correctly (there is, unfortunately, no direct means to check that the QPU is doing everything right).

{% assign qsim = site.supremacy-protocols | where: "page-id", "quantum-simulation" | first %}
- <a href="{{ qsim.url | prepend: site.baseurl }}">Quantum simulation (Qsim)</a>  
In a nutshell, quantum simulation tasks attempt to simulate a continuous-time quantum system evolution. It can be done using an analog machine that simulates the whole process or using a digital quantum computer implementing unitaries built from an approximation (trotterization) of the initial quantum evolution. In this frame, the performance test consists of sampling the output probability distribution corresponding to the quantum evolution faster with a quantum computer than with a classical emulation of this evolution.  

## References
{% bibliography --cited %}