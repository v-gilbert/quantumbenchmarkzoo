```
---  
title: LR-QAOA
datatable: true
description: LR-QAOA is a scalable benchmark that measures quantum processor performance by tracking signal decay with circuit depth.>
---
```

# LR-QAOA

## Motivation

As quantum processing units (QPUs) surpass the exact classical simulation limit, noise still hinders their practical utility. With increasing qubit counts and circuit depths, there is a pressing need for scalable, interpretable, and platform-agnostic tools that reflect meaningful progress of QPUs performance. The linear-ramp quantum approximate optimization algorithm (LR-QAOA) addresses this by offering a deterministic, non-variational QAOA protocol that gives an estimate of the usable circuit depth of a QPU. 

## Protocol

This benchmark uses the **Linear Ramp Quantum Approximate Optimization Algorithm (LR-QAOA)** [{% cite montanezbarrera2024 %}](https://arxiv.org/abs/2405.09169) protocol, a fixed **Quantum Approximate Optimization Algorithm (QAOA)** protocol, as an easy-to-implement, scalable benchmarking methodology. This approach assesses **Quantum Processing Units (QPUs)** at different **widths (number of qubits)** and **2-qubit gate depths**. 

<div class="center">
  <img src="/img/application-level-benchmark/LR-QAOA.png" class="img-medium" alt="Scheme of the Quantum Processing Units (QPUs) benchmarking."/> 
</div>

Scheme of the Quantum Processing Units (QPUs) benchmarking. (a) Graphs topologies used for the benchmarking, i.e., the qubit connectivity needed to run the algorithm. In yellow is the 1D-Chain, in green is the native layout (NL), and in pink is the fully connected (FC) graph. (b) QAOA protocol consists of alternating layers of the problem Hamiltonian and the mixer Hamiltonian. $p$ represents the depth of the algorithm.
The parameters used in these unitaries follow a linear ramp schedule, as shown in (c), which approximates adiabatic evolution via first-order Trotterization. $\Delta_{\gamma, \beta}/p$ is the slope. (d) illustrates the typical behavior of the approximation ratio $r$ as a function of depth $p$ under different depolarizing noise levels $\varepsilon$.
The red region corresponds to algorithm-dominated performance, and the green region to noise-dominated behavior.
As devices improve, it is expected the crossover between these regions to occur at larger $p$.

It has been used to benchmark 24 QPU from 6 vendors in {% cite montanezbarrera2025 %} by solving instances of the weighted maxcut problem using LR-QAOA. The key performance metric is the approximation ratio $r$, which increases with depth and saturates at 1 in the absence of noise, degrading as coherence is lost. LR-QAOA quantifies a QPU’s ability to preserve a coherent signal as circuit depth increases, identifying when performance becomes statistically indistinguishable from random sampling.  


## Assumptions 

The results shown are run using well-conditioned ramp schedules with observable signal growth in noise-free settings. For 1D-chain and native layout (NL) problems, it is used fixed ramp value of $\Delta_{\gamma,\beta} = 1$. For fully connected (FC) problems, the value of $\Delta_{\gamma,\beta}$ depends on the problem size. For instances with $N_q \le 15$, it is used $\Delta_{\gamma,\beta} = 0.63$ across all QPUs.  
For $N_q > 15$, the values used in each experiment are summarized in Table~\ref{Tab:deltas}.

These values were not tuned for performance on individual QPUs. Instead, they follow the observation that the optimal value of $\Delta_{\gamma,\beta}$ decreases as $N_q$ increases, in order to maintain algorithmic signal.  
In principle, one could define a functional form $\Delta_{\gamma,\beta}(N_q)$ for improved scaling, or perform a parameter sweep to find the optimal value per instance.  

{% include tables/lr-qaoa-deltas.html %}  
<script type="text/javascript"> 
    $(document).ready(function() {
      $('.delta-table').DataTable(
        {
          "pageLength": 10,
          "drawCallback": function(settings){
           MathJax.Hub.Queue(["Typeset", MathJax.Hub]);ss
          }  
        }  
      );  
    });  
</script>


## Implementation

Experimental setup and results can be found [Here](https://github.com/alejomonbar/LR-QAOA-QPU-Benchmarking)

## Results

The table presented below summarizes the results of different QPUs, it is used the maximum approximation ratio achieved by each QPU across the three benchmark classes. For the 1D-chain column, the two values correspond to 5- and 100-qubit instances, respectively. Values prefixed with ‘f’ indicate experiments executed using fractional gates. Last column represent the maximum $N_q$ for which a successful experiment is achieved. 

{% include tables/lr-qaoa-table.html %}  

<script type="text/javascript"> 
    $(document).ready(function() {
      $('.lr-qaoa-table').DataTable(
        {
          "pageLength": 10,
          "drawCallback": function(settings){
           MathJax.Hub.Queue(["Typeset", MathJax.Hub]);ss
          }  
        }  
      );  
    });  
</script>

### 1D-Chain

The 1D-chain benchmark evaluates how well a QPU preserves the algorithmic signal as LR-QAOA depth increases along a linear qubit chain. This topology isolates the impact of circuit depth from layout constraints. It uses the 99.73\% confidence threshold from a random sampler to define benchmark pass/fail behavior. Results are summarized in the figure below. 

<div class="center">
  <img src="/img/application-level-benchmark/LR-QAOA-1D.png" class="img-medium" alt="Approximation ratio versus number of LR-QAOA layers for 1D-chain WMC problems on IBM, IQM, Rigetti, and OriginQ devices."/> 
</div>
Approximation ratio versus number of LR-QAOA layers for 1D-chain WMC problems on IBM, IQM, Rigetti, and OriginQ devices.
(a) Performance on a 100-qubit problem across IBM Eagle and Heron QPUs. Numbers in parentheses indicate EPLG at the time of execution.(b) Cross-platform comparison for a 5-qubit problem run on different QPUs.
(c) Scaling study on *ibm_fez* from $p=3$ to $p=10,000$, reaching 990,000 ZZ gates at the deepest layer using fractional gates. The dashed line in (c) marks the expected approximation ratio of a random sampler.

### Native Layout

The NL benchmark stresses system-wide performance by employing all qubits and native couplers in each device’s layout.  
A QPU is considered to pass at a given depth $p$ if the observed approximation ratio $r$ exceeds the 99.73\% confidence threshold of the random-sampler baseline. Among all tested platforms, only *rigetti_ankaa_3* fails to pass the benchmark at any depth. The best-performing devices are *ibm_fez*, *ibm_marrakesh*, and *ibm_torino*, all of which support fractional gates. Interestingly, *ibm_aachen* achieves a comparable performance peak despite lacking fractional gate support, implying that it could potentially outperform the other devices once fractional gates become available on this QPU. 

<div class="center">
  <img src="/img/application-level-benchmark/LR-QAOA-NL.png" class="img-medium" alt="NL-based benchmarking using LR-QAOA for WMC problems on different QPUs from 5 to 156 qubits."/> 
</div>


NL-based benchmarking using LR-QAOA for WMC problems on *iqm_spark*, *iqm_garnet*, *rigetti_ankaa_3*, *ibm_brisbane*, *ibm_torino*, and *ibm_fez*/*ibm_marrakesh*/*ibm_aachen*/*ibm_kingston*. 
Problem sizes (with number of edges in parentheses) are: 5 (4), 20 (30), 82 (138), 127 (144), 133 (150), and 156 (176).
(a) QPU layouts used in each experiment. 
Nodes represent qubits, and edges represent native two-qubit connectivity. 
Edge colors denote the WMC instance weights, randomly chosen from \{0.1, 0.2, 0.3, 0.5, 1\}, as shown at the top.
(b) Approximation ratio versus number of LR-QAOA layers $p$ for each processor.
The dashed horizontal line indicates the random-sampler baseline.
Labels with an 'f' suffix, e.g., *ibm_marrakesh*-f, denote experiments using fractional gates.
(c) Scaling experiment with up to $p = 1,000$ LR-QAOA layers using fractional gates.
Semitransparent points mark the sample with the maximum approximation ratio observed.

### Fully Connected
The FC benchmark imposes the highest stress by combining maximal depth and full-qubit connectivity, making it the toughest test of QPU coherence and routing capabilities.  A device passes if its approximation ratio $r$ exceeds the 99.73\% confidence interval of the random sampler baseline at any $p$. Since the approximation ratio achieved by random guessing increases with problem size, the results presented are normalization of the approximation ratio to quantify the gain over random guessing, and denote this normalized metric as $r_{\text{eff}}$.

<div class="center">
  <img src="/img/application-level-benchmark/LR-QAOA-FC.png" class="img-medium" alt="Fully connected (FC) benchmarking using LR-QAOA for WMC problems with 5 to 56 qubits."/> 
</div>
Fully connected (FC) benchmarking using LR-QAOA for WMC problems with 5 to 56 qubits. 
(a) Approximation ratio $r$ versus LR-QAOA depth $p$ for a 15-qubit instance. 
Shaded region denotes the 99.73\% confidence interval of a random sampler. 
(b) Effective approximation ratio $r_{\mathrm{eff}}$ versus problem size for multiple QPUs. 
Each point reflects the best-performing depth not within the random region.
# References

## References
{% bibliography --cited %}
