---  
title: LR-QAOA
datatable: true
description: >
  Linear Ramp Quantum Approximate Optimization Algorithm (LR-QAOA) evaluates quantum processors by measuring approximation ratios on Weighted Max Cut problems.
navbar-page-id: application-benchmarks-protocols
---
{% assign modified = page.path | max_last_modified: "tables/lr-qaoa-table.html" %}
{% assign eplg = site.randomized-benchmarking-protocols | where: "page-id", "eplg" | first %}


# Linear Ramp Quantum Approximate Optimization Algorithm (LR-QAOA)

## Motivation

As quantum processing units (QPUs) surpass the exact classical simulation limit, noise still hinders their practical utility. With increasing qubit counts and circuit depths, there is a pressing need for scalable, interpretable, and platform-agnostic tools that reflect meaningful progress of QPUs performance. The **Linear Ramp Quantum Approximate Optimization Algorithm (LR-QAOA)** addresses this by offering a deterministic, non-variational QAOA protocol that gives an estimate of the usable circuit depth of a QPU. 

## Protocol

The **LR-QAOA** protocol {% cite montanezbarrera2024 %} {% cite montanezbarrera2025 %} is based on the Quantum Approximate Optimization Algorithm (QAOA), a heuristic designed to find approximate solutions to optimization problems. This protocol uses instances of the Weighted Max Cut (WMC) problem as input. The quality of the solutions found by the quantum computer is assessed using the approximation ratio $$r$$, which compares the value of the quantum solution to the optimal (solution of best quality). The QPU is said to pass the test if the sampled solutions' approximation ratio exceeds that of a random sampler, with a confidence level of $$99.73\%$$ ($$\pm 3 \sigma$$). This approach assesses Quantum Processing Units (QPUs) performance at different widths (number of qubits), depths (number of 2-qubit gates), and instance topologies (WMC graph layout).  

The key performance metric is the approximation ratio $$r$$, which increases with depth and saturates at 1 in the absence of noise, degrading as coherence is lost. LR-QAOA quantifies a QPU’s ability to preserve a coherent signal as circuit depth increases, identifying when performance becomes statistically indistinguishable from random sampling. Currently, the optimal solution is used as the reference for calculating the approximation ratio and is found using the CPLEX solver. To keep the scalability of this protocol, the authors advise using the best-known classical solution if the optimal solution cannot be reached with a classical computer in a reasonable time.

<div class="center">
  <img src="/img/application-level-benchmark/LR-QAOA.png" class="img-large" alt="Scheme of the Quantum Processing Units (QPUs) benchmarking."/> 
</div>

Scheme of the Quantum Processing Units (QPUs) benchmarking. (a) Graphs topologies used for the benchmarking, i.e., the qubit connectivity needed to run the algorithm. In yellow is the 1D-Chain, in green is the native layout (NL), and in pink is the fully connected (FC) graph. (b) QAOA protocol consists of alternating layers of the problem Hamiltonian (green blocks) and the mixer Hamiltonian (pink blocks). $$p$$ represents the depth of the algorithm.
The parameters $$\gamma_i$$ and $$\beta_i$$ used in these unitaries follow a linear ramp schedule denoted $$\Delta_{\gamma, \beta}$$, as shown in (c). (d) illustrates the typical behavior of the approximation ratio $$r$$ as a function of depth $$p$$ under different depolarizing noise levels $$\varepsilon$$.
The red region corresponds to algorithm-dominated performance, and the green region to noise-dominated behavior. As devices improve, the crossover between these regions is expected to occur at larger $$p$$.  

### Assumptions 

The protocol is based on well-conditioned ramp schedules with observable signal growth in noise-free settings. For 1D-chain and native layout problems, a fixed ramp value of $$\Delta_{\gamma,\beta} = 1$$ is used. For fully connected problems, the value of $$\Delta_{\gamma,\beta}$$ depends on the problem size. Experiments done with the same fixed qubit layout and number of qubits share the same parameter $$\Delta_{\gamma,\beta}$$ across all tested QPUs (values can be consulted in Table III of {% cite montanezbarrera2025 %}).  
Rather than setting the optimal values for $$\Delta_{\gamma,\beta}$$, this method deterministically fixes these parameters, facilitating replication, scalability, and comparison across different platforms.

Extra pre- and post-processings, such as advanced compilation methods (for fully connected instances, the SWAP strategy employed is detailed in Appendix 7 of {% cite montanezbarrera2025 %}), error mitigation, or local search algorithms, are not used in this protocol, as the objective is to capture the raw performance of the QPU.

### Limitations

Two limitations have been identified by the authors of {% cite montanezbarrera2025 %}:
- The results obtained in the native layout setting must be considered with caution. Indeed, the results obtained from one experiment cannot be directly compared to another if they use a different number of qubits or a different quantum chip topology.
- Another limitation is the difficulty of extrapolating results obtained with this protocol to predict the performance of quantum computers on other applications.

### Implementations

The implementation of the experimental setup can be found <a href="https://github.com/alejomonbar/LR-QAOA-QPU-Benchmarking" target="_blank">Here</a>.

<!-- -->

<!--
For instances with $$N_q \le 15$$, it is used $$\Delta_{\gamma,\beta} = 0.63$$ across all QPUs.  
For $$N_q > 15$$, the values used in each experiment are summarized in Table~\ref{Tab:deltas}.

These values were not tuned for performance on individual QPUs. Instead, they follow the observation that the optimal value of $$\Delta_{\gamma,\beta}$$ decreases as $$N_q$$ increases, in order to maintain algorithmic signal.  
In principle, one could define a functional form $$\Delta_{\gamma,\beta}(N_q)$$ for improved scaling, or perform a parameter sweep to find the optimal value per instance.  

-->

<!--
## Implementation


-->

## Results

This protocol has been used to benchmark 24 QPUs from 6 vendors in {% cite montanezbarrera2025 %} for three different kinds of topologies. The results can be found <a href="https://github.com/alejomonbar/LR-QAOA-QPU-Benchmarking" target="_blank">Here</a>.
<!-- Ajouter fractional gates -->

### 1D-Chain

The 1D-chain benchmark evaluates how well a QPU preserves the algorithmic signal as LR-QAOA depth increases along a linear qubit chain. This topology isolates the impact of circuit depth from layout constraints. 

<!--
It uses the $$99.73\%s$$ confidence threshold from a random sampler to define benchmark pass/fail behavior. Results are summarized in the figure below. 
-->

<div class="center">
  <img src="/img/application-level-benchmark/LR-QAOA-1D.png" class="img-large" alt="Approximation ratio versus number of LR-QAOA layers for 1D-chain WMC problems on IBM, IQM, Rigetti, and OriginQ devices."/> 
</div>
Approximation ratio versus number of LR-QAOA layers for 1D-chain WMC problems on IBM, IQM, Rigetti, and OriginQ devices.
(a) Performance on a 100-qubit problem across IBM Eagle and Heron QPUs. Numbers in parentheses indicate <a href="{{ eplg.url | prepend: site.baseurl }}" target="_blank">Error Per Layered Gate (EPLG)</a> score at the time of execution. (b) Cross-platform comparison for a 5-qubit problem run on different superconducting QPUs.

### Native Layout (NL)

The NL benchmark stresses system-wide performance by employing all qubits and native couplers in each device’s layout (it entails that a fair comparison should consider QPUs with a similar number of qubits and a similar layout). Among all tested platforms, only *rigetti_ankaa_3* fails to pass the benchmark at any depth. The best-performing devices are *ibm_fez*, *ibm_marrakesh*, and *ibm_torino*, all of which support fractional gates {% cite fractionalgate %} (method to reduce gate count when the circuit only contains single and two-qubit rotations). Interestingly, *ibm_aachen* achieves a comparable performance peak despite lacking fractional gate support, implying that it could outperform other devices once fractional gates become available on this QPU. 

<div class="center">
  <img src="/img/application-level-benchmark/LR-QAOA-NL.png" class="img-large" alt="NL-based benchmarking using LR-QAOA for WMC problems on different QPUs from 5 to 156 qubits."/> 
</div>

NL-based benchmarking using LR-QAOA for WMC problems on *iqm_spark*, *iqm_garnet*, *rigetti_ankaa_3*, *ibm_brisbane*, *ibm_torino*, and *ibm_fez*/*ibm_marrakesh*/*ibm_aachen*/*ibm_kingston*. 
Problem sizes (with number of edges in parentheses) are: 5 (4), 20 (30), 82 (138), 127 (144), 133 (150), and 156 (176). (a) QPU layouts used in each experiment. Nodes represent qubits, and edges represent native two-qubit connectivity. Edge colors denote the WMC instance weights, randomly chosen from $$\{0.1, 0.2, 0.3, 0.5, 1\}$$, as shown at the top. (b) Approximation ratio versus number of LR-QAOA layers $$p$$ for each processor. The dashed horizontal line indicates the random-sampler baseline. Labels with an 'f' suffix, e.g., *ibm_marrakesh*-f, denote experiments using fractional gates.
<!--
(c) Scaling experiment with up to $$p = 1,000$$ LR-QAOA layers using fractional gates.
Semitransparent points mark the sample with the maximum approximation ratio observed.
-->

### Fully Connected (FC)

The FC benchmark imposes the highest stress by combining maximal depth and full-qubit connectivity, making it the toughest test of QPU coherence and routing capabilities. Since the approximation ratio achieved by random guessing increases with problem size, the results presented are normalization of the approximation ratio to quantify the gain over random guessing, and denote this normalized metric as $$r_{\text{eff}}$$ (see Appendix 3 in {% cite montanezbarrera2025 %}).

<div class="center">
  <img src="/img/application-level-benchmark/LR-QAOA-FC.png" class="img-large" alt="Fully connected (FC) benchmarking using LR-QAOA for WMC problems with 5 to 56 qubits."/> 
</div>

Fully connected (FC) benchmarking using LR-QAOA for WMC problems with 5 to 56 qubits.  (a) Approximation ratio $$r$$ versus LR-QAOA depth $$p$$ for a 15-qubit instance. Shaded region denotes the $$99.73\%$$ confidence interval of a random sampler. (b) Effective approximation ratio $$r_{\text{eff}}$$ versus problem size for multiple QPUs. Each point reflects the best-performing depth not within the random region.

### Performance Summary

The table below summarizes the results of different QPUs; it uses the maximum approximation ratio achieved by each QPU across the three benchmark classes. For the 1D-chain column, the two values correspond to 5- and 100-qubit instances, respectively. Values prefixed with ‘f’ indicate experiments executed using fractional gates. The last column represents the maximum $$N_q$$ for which a successful experiment is achieved. 

{% include tables/lr-qaoa-table.html %}  
<script type="text/javascript"> 
    $(document).ready(function() {
      $('.lr-qaoa-table').DataTable(
        {
          "pageLength": 10,
          "drawCallback": function(settings){
           MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
          }  
        }  
      );  
    });  
</script>


## References
{% bibliography --cited %}
