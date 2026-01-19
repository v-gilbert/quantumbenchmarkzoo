---
title: Q-score
datatable: true
description: >
  Q-score benchmarks quantum computers with the Max-Cut problems, measuring performance via approximation ratios against random and derived optimal solutions.
navbar-page-id: application-benchmarks-protocols
---
{% assign modified = page.path | max_last_modified: "tables/q-score-table.html" %}


# Q-score benchmark

## Benchmarking results

**List of acronyms:**  
**AC**: Advanced Compilation method  
**CE**: Constructor Evaluation (checked if the evaluation is done by the chip manufacturer)  
**EM**: Error mitigation  
**ER**: Erdös-Renyi  
**HS**: Hybrid Solver  
**QA**: Quantum Annealer  
**QC**: Quantum Circuit  
**QCE**: Quantm Computer Emulation  
**SA**: Simulated Annealing  
**SP**: Scientific paper (checked if a scientific paper explain the results)  
**TS**: Tabu Search  
**UD**: Unit Disk  

<!-- Avoid issue with citations -->
<!-- {% cite martiel2021benchmarking %} -->
{% include tables/q-score-table.html %}
<script type="text/javascript">
    $(document).ready(function() {
      $('.q-score-table').DataTable(
        {
          "pageLength": 10,
          "drawCallback": function(settings){ 
            MathJax.Hub.Queue(["Typeset", MathJax.Hub]); 
          }
        } 
      );
    });
</script>

## Motivation

The Q-score protocol, introduced by S. Martiel et al. in 2021 {% cite martiel2021benchmarking %} aims to establish an application-centric, hardware agnostic, and scalable figure of merit for assessing the performance of quantum computers. A key motivation behind this protocol is to identify challenging real-world optimization problems whose solution processes could be accelerated through quantum computing.

## Protocol

The Q-score protocol measures the maximum size of Maxcut instances that can be solved effectively on a quantum computer. The main idea is to pick a class of random graphs (e.g., Erdös-Renyi graphs with $$n$$ nodes and a specific edge probability) and to analytically derive the maximum cut size $$ C_{max}(n) $$ and average random cut size $$ C_{rand}(n) $$ for this class. The average expectation value obtained from the sampling of the quantum computer $$ C^Q(n) $$ is used to compute the ratio $$\beta(n)$$:

$$\beta(n) = \frac{C^Q(n) - C_{rand}(n)}{C_{max}(n) - C_{rand}(n)}$$

The quantum computer passes the Q-score for instances of size $$n$$ if $$\beta(n) > \beta^*$$ ($$\beta^* \in ]0,1[ $$), where $$\beta^*$$ represents the level of difficulty of the test. The formula used to compute the ratio depends on the class of studied graphs. For their experiments, the authors arbitrarily set $$\beta^*=0.2$$.  

The final value of the score is defined by:

$$n^* = \max \{ n \in \mathbb{N}, \beta(n) > \beta^* \}$$

This score can be extended to other problems, it only depends on the ability of finding derivation of the values $$ C_{max}(n) $$ and $$ C_{rand}(n) $$.

## Assumptions

* The Q-score does not have runtime limit, but considers that the classical algorithm implementation runs in polynomial time. Subsequent studies has proposed a 60s runtime limit for each instance (see {% cite van2023q%}).
* no assumptions on compilation processing (but the implementation should run in polynomial time).
* no assumptions on error mitigation technique (but the implementation should run in polynomial time).

## Configuration of experiments

* Size of instance set recommended: 100
* Number of shots recommended: 2048
* Default level of difficulty: $$\beta^* = 0.2$$

## Implementations

Several implementations of the Q-Score are available on GitHub:
* The initial implementation created by the authors of the Q-score is available <a href="https://github.com/myQLM/qscore" target="_blank">here</a>.
* A tutorial implementation from the QCMet software repository {% cite lall2025review %} is available <a href="https://gitlab.npl.co.uk/qc-metrics-and-benchmarks/qcmet" target="_blank">here</a>.
* An implementation from the IQM Benchmarks suite is available <a href="https://github.com/iqm-finland/iqm-benchmarks/tree/main" target="_blank">here</a>.

## Extensions to the Q-score

### Max-clique extension
In {% cite van2023q %}, the authors extend the Q-Score to the Max-clique problem. For **Erdös-Renyi graphs $$G(n, p)$$**, the average random cost $$C_{rand}(n)$$ is set to (proof in {% cite van2023q %}):  

$$ C_{rand}(n) = \sum_{i=1}^n i \times (1-p^i)p^{i(i-1)/2} $$

For this kind of problem, $$C_{max}$$ is set to (proof in {% cite matula1976largest %}):  

$$ C_{max}(n) = 2 \log_2(n) - 2 \log_2(\log_2(n)) + 2 \log_2\left(\frac{e}{2}\right) +1 $$  

An implementation of the Q-score Max-clique is available <a href="https://github.com/TNO-Quantum/qscore" target="_blank">here</a>.

### Empirical optimal and random average cost

In {% cite coelho2022efficient %}, the authors propose determining $$C_{max}(n)$$ for arbitrary problems using exact methods, thereby circumventing the need to derive theoretical bounds for both $$C_{max}$$ and $$C_{rand}$$. While this approach expands the range of problems to which the Q-score can be applied, it does so at the cost of reduced scalability.

## References
{% bibliography --cited %}
