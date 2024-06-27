---
datatable: true
description: >
  Q-score protocol.
---

# Q-score benchmark

### List of acronyms
CE: Constructor Evaluation (checked if the evaluation is done by the chip manufacturer)
SP: Scientific paper (checked if a scientific paper explain the results)
SA : Simulated Annealing  
TS : Tabu Search  
ER : Erdös-Renyi  
QC : Quantum Circuit  
QCE : Quantm Computer Emulation  
QA : Quantum Annealer  
HS : Hybrid Solver  
UD : Unit Disk  
AC : Advanced Compilation method  
EM : Error mitigation  
<table id="my_table" class="display">
  <thead>
    <tr>
      <th>Source</th>
      <th>Year</th>
      <th>CE</th>
      <th>SP</th>
      <th>Problem</th>
      <th>Graph class</th>
      <th>#Instances</th>
      <th>Shots</th>
      <th>Time limit</th>
      <th>Method</th>
      <th>CPU / QPU</th>
      <th>Score</th>
      <th>Remark</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{% cite martiel2021benchmarking %}</td>
      <td>02/2021</td>
      <td></td>
      <td>x</td>
      <td>Max-Cut</td>
      <td>ER G(n, p=1/2)</td>
      <td>100</td>
      <td>2048</td>
      <td>/</td>
      <td>QCE</td>
      <td>Grid connectivity 
Depolarizing noise 
$$\epsilon_1=0.4 %$$
$$\epsilon_2=2 %$$</td>
      <td>11</td>
      <td></td>
    </tr>
    <tr>
      <td>{% cite martiel2021benchmarking %}</td>
      <td>02/2021</td>
      <td></td>
      <td>x</td>
      <td>Max-Cut</td>
      <td>ER G(n, p=1/2)</td>
      <td>100</td>
      <td>2048</td>
      <td>/</td>
      <td>QCE</td>
      <td>Full connectivity
depolarizing noise
$$\epsilon_1=0.4 %$$
$$\epsilon_2=2 %$$</td>
      <td>21</td>
      <td></td>
    </tr>
    <tr>
      <td>{% cite van2022evaluating %}</td>
      <td>08/2022</td>
      <td></td>
      <td>x</td>
      <td>Max-Cut</td>
      <td>ER G(n, p=1/2)</td>
      <td>100</td>
      <td>/</td>
      <td>60s</td>
      <td>TS</td>
      <td>i7-7600u</td>
      <td>2300</td>
      <td></td>
    </tr>
    <tr>
      <td>{% cite van2022evaluating %}</td>
      <td>08/2022</td>
      <td></td>
      <td>x</td>
      <td>Max-Cut</td>
      <td>ER G(n, p=1/2)</td>
      <td>100</td>
      <td>/</td>
      <td>60s</td>
      <td>SA</td>
      <td>i7-7600u</td>
      <td>5800</td>
      <td></td>
    </tr>
    <tr>
      <td>{% cite van2022evaluating %}</td>
      <td>08/2022</td>
      <td></td>
      <td>x</td>
      <td>Max-Cut</td>
      <td>ER G(n, p=1/2)</td>
      <td>100</td>
      <td>/</td>
      <td>60s</td>
      <td>QA</td>
      <td>D-Wave 2000Q</td>
      <td>70</td>
      <td></td>
    </tr>
    <tr>
      <td>{% cite van2022evaluating %}</td>
      <td>08/2022</td>
      <td></td>
      <td>x</td>
      <td>Max-Cut</td>
      <td>ER G(n, p=1/2)</td>
      <td>100</td>
      <td>/</td>
      <td>60s</td>
      <td>QA</td>
      <td>D-Wave Advantage </td>
      <td>140</td>
      <td></td>
    </tr>
    <tr>
      <td>{% cite van2022evaluating %}</td>
      <td>08/2022</td>
      <td></td>
      <td>x</td>
      <td>Max-Cut</td>
      <td>ER G(n, p=1/2)</td>
      <td>100</td>
      <td>/</td>
      <td>60s</td>
      <td>QA</td>
      <td>D-Wave hybrid solver</td>
      <td>12500</td>
      <td></td>
    </tr>
    <tr>
      <td>{% cite coelho2022efficient %}</td>
      <td>07/2022</td>
      <td></td>
      <td>x</td>
      <td>Max-Cut</td>
      <td>ER G(n, p=1/2)</td>
      <td>500 for n=6
10 to for n=16</td>
      <td>1000</td>
      <td>/</td>
      <td>QCE</td>
      <td>Pasqal Pulser library</td>
      <td>18</td>
      <td></td>
    </tr>
    <tr>
      <td>{% cite coelho2022efficient %}</td>
      <td>07/2022</td>
      <td></td>
      <td>x</td>
      <td>MIS</td>
      <td>UD G(n, p=1/2)</td>
      <td>500 for n=6
10 to for n=16</td>
      <td>1000</td>
      <td>/</td>
      <td>QCE</td>
      <td>Pasqal Pulser library</td>
      <td>18</td>
      <td></td>
    </tr>
    <tr>
      <td>{% cite van2023q %}</td>
      <td>02/2023</td>
      <td></td>
      <td>x</td>
      <td>Max-clique</td>
      <td>ER G(n, p=1/2)</td>
      <td>100</td>
      <td>/</td>
      <td>60s</td>
      <td>TS</td>
      <td>i7-7600u</td>
      <td>4900</td>
      <td></td>
    </tr>
    <tr>
      <td>{% cite van2023q %}</td>
      <td>02/2023</td>
      <td></td>
      <td>x</td>
      <td>Max-clique</td>
      <td>ER G(n, p=1/2)</td>
      <td>100</td>
      <td>/</td>
      <td>60s</td>
      <td>SA</td>
      <td>i7-7600u</td>
      <td>9100</td>
      <td></td>
    </tr>
    <tr>
      <td>{% cite van2023q %}</td>
      <td>02/2023</td>
      <td></td>
      <td>x</td>
      <td>Max-clique</td>
      <td>ER G(n, p=1/2)</td>
      <td>100</td>
      <td>/</td>
      <td>60s</td>
      <td>QA</td>
      <td>D-Wave 2000Q</td>
      <td>70</td>
      <td></td>
    </tr>
    <tr>
      <td>{% cite van2023q %}</td>
      <td>02/2023</td>
      <td></td>
      <td>x</td>
      <td>Max-clique</td>
      <td>ER G(n, p=1/2)</td>
      <td>100</td>
      <td>/</td>
      <td>60s</td>
      <td>QA</td>
      <td>D-Wave Advantage </td>
      <td>110</td>
      <td></td>
    </tr>
    <tr>
      <td>{% cite van2023q %}</td>
      <td>02/2023</td>
      <td></td>
      <td>x</td>
      <td>Max-clique</td>
      <td>ER G(n, p=1/2)</td>
      <td>100</td>
      <td>/</td>
      <td>60s</td>
      <td>HS</td>
      <td>D-Wave hybrid solver</td>
      <td>12500</td>
      <td></td>
    </tr>
    <tr>
      <td>{% cite van2023q %}</td>
      <td>02/2023</td>
      <td></td>
      <td>x</td>
      <td>Max-clique</td>
      <td>ER G(n, p=1/2)</td>
      <td>100</td>
      <td>/</td>
      <td>60s</td>
      <td>QC</td>
      <td>QuTech Starmon-5</td>
      <td>5</td>
      <td></td>
    </tr>
    <tr>
      <td>{% cite van2023q %}</td>
      <td>02/2023</td>
      <td></td>
      <td>x</td>
      <td>Max-clique</td>
      <td>ER G(n, p=1/2)</td>
      <td>100</td>
      <td>/</td>
      <td>60s</td>
      <td>QC</td>
      <td>IBM Gadalupe</td>
      <td>5</td>
      <td></td>
    </tr>
    <tr>
      <td>{% cite iqm2023qscore %}</td>
      <td>10/2023</td>
      <td>x</td>
      <td></td>
      <td>Max-Cut</td>
      <td>ER G(n, p=1/2)</td>
      <td>100</td>
      <td></td>
      <td>/</td>
      <td>QC</td>
      <td>IQM-20</td>
      <td>8</td>
      <td></td>
    </tr>
    <tr>
      <td>{% cite ronkko2024premises %}</td>
      <td>02/2024</td>
      <td>x</td>
      <td>x</td>
      <td>Max-Cut</td>
      <td>ER G(n, p=1/2)</td>
      <td>100</td>
      <td>2048</td>
      <td>/</td>
      <td>QC</td>
      <td>IQM Spark</td>
      <td>6</td>
      <td></td>
    </tr>
    <tr>
      <td>{% cite iqm2024qscore %}</td>
      <td>02/2024</td>
      <td>x</td>
      <td></td>
      <td>Max-Cut</td>
      <td>ER G(n, p=1/2)</td>
      <td>100</td>
      <td>2048</td>
      <td>/</td>
      <td>QC</td>
      <td>IQM-20</td>
      <td>11</td>
      <td></td>
    </tr>
    <tr>
      <td>{% cite quandela2023qscore %}</td>
      <td>2024</td>
      <td>x</td>
      <td></td>
      <td>Max-Cut</td>
      <td>/</td>
      <td>/</td>
      <td>/</td>
      <td>/</td>
      <td>QC</td>
      <td>Quandela Altaïr</td>
      <td>6</td>
      <td>EM & AC</td>
    </tr>
  </tbody>
</table>

<script type="text/javascript">
  $(document).ready(function() {
  $('#my_table').DataTable(
    {
      "pageLength": 100
    } 
  );});
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
