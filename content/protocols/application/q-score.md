---
datatable: true
description: >
  Q-score protocol.
---

# Q-score benchmark

### List of acronyms
AC : Advanced Compilation method  
CE: Constructor Evaluation (checked if the evaluation is done by the chip manufacturer)  
EM : Error mitigation  
ER : Erdös-Renyi  
HS : Hybrid Solver  
QA : Quantum Annealer  
QC : Quantum Circuit  
QCE : Quantm Computer Emulation  
SA : Simulated Annealing  
SP: Scientific paper (checked if a scientific paper explain the results)  
TS : Tabu Search  
UD : Unit Disk  

{% include tables/q-score-table.html %}
<script type="text/javascript">
    $(document).ready(function() {
      $('.q-score-table').DataTable(
        {
          "pageLength": 100
        } 
      );
    });
</script>

# Q-score protocol

The Q-score protocol, introduced in {% cite martiel2021benchmarking %}, measures the maximum size of Maxcut instances that can be solved effectively on a quantum computer. The main idea is to pick a class of random graphs (e.g., Erdös-Renyi graphs with $$n$$ nodes and a specific edge probability) and to analytically derive the maximum cut size $$ C_{max}(n) $$ and average random cut size $$ C^R(n) $$ for this class. The average expectation value obtained from the sampling of the quantum computer $$ C^Q(n) $$ is used to compute the ratio $$\beta(n)$$:

$$\beta(n) = \frac{C^Q(n) - C^R(n)}{C_{max}(n) - C^R(n)}$$

The quantum computer passes the Q-score for instances of size $$n$$ if $$\beta(n) > \beta^*$$ ($$\beta^* \in ]0,1[ $$), where $$\beta^*$$ represents the level of difficulty of the test. The formula used to compute the ratio depends on the class of studied graphs. For their experiments, the authors arbitrarily set $$\beta^*=0.2$$.  

The final value of the score is defined by:

$$n^* = \max \{ n \in \mathbb{N}, \beta(n) > \beta^* \}$$

This score car be extended to other problems, it only depends on the ability of finding derivation of the values $$ C_{max}(n) $$ and $$ C^R(n) $$.

## Some $$C^R(n)$$ and $$C_{max}(n)$$ based on specific graph classes for Max-Cut 

$$C^R(n)$$ and $$C_{max}(n)$$ for **Erdös-Renyi graphs $$G(n, p)$$**:  

$$C^R(n) = \frac{pn^2}{4}$$

$$C_{max}(n) = \frac{pn^2}{4} + \lambda_p n^{3/2}$$

Ratio for **$$k$$-regular graphs**:  

$$C^R(n) = \frac{nk}{4}$$

$$C_{max}(n) = \frac{nk}{4} + \lambda_k n$$

For these formulations, $$\lambda_p$$ and $$\lambda_k$$ values define the scaling factor of the optimal cut compared to a random average cut. These variables are defined analytically (see III.D of {% cite martiel2021benchmarking %})

## Assumptions

* The Q-score does not have runtime limit, but considers that the classical algorithm implementation runs in polynomial time. Subsequent studies has proposed a 60s runtime limit for each instance (see {% cite van2023q%}).
* no assumptions on compilation processing
* no assumptions on error mitigation technique

## Configuration of experiments

* Size of instance set recommended: 100
* Number of shots recommended: 2048
* Default level of difficulty: $$\beta^* = 0.2$$

## Extensions to the Q-score

### Max-clique extension
In {% cite van2023q %}, the authors extend the Q-Score to the Max-clique problem. For **Erdös-Renyi graphs $$G(n, p)$$**.  
The average random cost $$C^R(n)$$ is set to (proof in {% cite van2023q %}):  

$$ C^R(n) = \sum_{i=1}^n i \times (1-p^i)p^{i(i-1)/2} $$

For this kind of problem, $$C_{max}$$ is set to (proof in {% cite matula1976largest %}):  

$$ C_{max}(n) = 2 \log_2(n) - 2 \log_2(\log_2(n)) + 2 \log_2\left(\frac{e}{2}\right) +1 $$  

### Empirical optimal and random average cost

In {% cite coelho2022efficient %}, the authors propose to define $$C_{max}(n)$$ from arbitrary problems by using exact methods. This method broadens the set of problems that can be evaluated of the Q-score at the expense of limiting the scalability of the method.

## References
{% bibliography --cited %}
