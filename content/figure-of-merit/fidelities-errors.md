---
description: >
  Fidelities and errors
---

# Fidelities and errors

## FOM for classical probability distributions

Quantum states and processes cannot be observed directly, but measurements can be used as a proxy to get informations about these properties. Repeating the preparation and measurement of the same quantum state results as a probability associated to each state that can be observed. Quantum processes act on states and can then be measured to extract informations about these processes. 

In both case, a probability distribution is obtained for each actual implementation \\(\mathbf{p}\\) and can be compared to an ideal target implementation \\(\mathbf{\widetilde{p}}\\) representing a noiseless quantum state or process (denoted with \\(\sim\\) character). Classical figure of merits comparing probability distributions can be used to evaluate how similar or different are two distributions. Among these FOMs, we outline those that are considered as metrics.

To be considered a **metric** (in the mathematical sense), a FOM \\(D(\mathbf{p}, \mathbf{q})\\) evaluated on ditributions \\(\mathbf{p}\\) and \\(\mathbf{q}\\) must:
- be **symmetric**: \\(D(\textbf{p}, \textbf{q}) = D(\textbf{q}, \textbf{p})\\).
- satisfy **triangle inequality**: \\(D(\textbf{p}, \textbf{r}) \leq D(\textbf{p}, \textbf{q}) + D(\textbf{q}, \textbf{r})\\).
- be null when equality: \\(D(\textbf{p}, \textbf{q}) = 0\\) if and only if \\(\textbf{p}= \textbf{q}\\).
The reader may refer to {% cite Gilchrist2005 %} for an interesting discussion on the properties of metrics.

The next table summarizes the different FOMs that can be evaluated with classical distributions. It is assumed that the probability distribution is established over \\(2^n\\) different possible bitstrings noted $$\{0, 1\}^n$$. The probability associated to each bitstring $$x$$ is given by the probability distribution $$\mathbf{p}$$ as $$\mathbf{p}(x)$$.

{% include tables/classical-probability-distribution-table.html %}
<script type="text/javascript">
    $(document).ready(function() {
      $('.classical-probability-distribution-table').DataTable(
        {
          "pageLength": 100,
          "ordering": false,
          columnDefs: [{ width: '20%', targets: 0 }],
          "drawCallback": function(settings){ 
            MathJax.Hub.Queue(["Typeset", MathJax.Hub]); 
          }
        } 
      );
    });
</script>

*Sometimes the fidelity can be reported as the square root of the quantities reported here. We prefer this representation as it can be deirectly linked to the success probability of a quantum computation {% cite Gilchrist2005 %}.

## FOM for quantum states

The matrix density operator $$ \rho=\sum_i p_i \ket{\psi_i} \bra{\psi_i} $$ is used to model uncertainty about the knowledge of a quantum state. Each state $$\ket{\psi_i}$$ is a pure state associated with the probability $$p_i$$. We continue using the same notation where $$\widetilde{\rho}$$ represents the ideal target quantum state and $$\rho$$ the actual quantum state. 

Assessing the distinguishability between quantum states strongly depends on the measures being done on the quantum states. For this reason, the measurement (Positive Operator-valued Measure) that maximizes the distinguishability between the two quantum states $$\rho$$ and $$\widetilde{\rho}$$ is always chosen. In this way, results obtained from these measurements are used to build metrics that assess an upper bound on the error rate of a measurement done on the quantum state. These metrics can be used to assess the performance of state preparations.

In the following table, the trace operator $$\Tr$$ on a matrix $$A$$ is defined as : $$\Tr(A) = \sum_{i} a_{ii}$$.

{% include tables/quantum-states-fidelity-table.html %}
<script type="text/javascript">
    $(document).ready(function() {
      $('.quantum-states-fidelity-table').DataTable(
        {
          "pageLength": 100,
          "ordering": false,
          columnDefs: [{ width: '20%', targets: 0 }],
          "drawCallback": function(settings){ 
            MathJax.Hub.Queue(["Typeset", MathJax.Hub]); 
          }
        } 
      );
    });
</script>
*Sometimes the fidelity can be reported as the square root of the quantities reported here. We prefer this representation as it can be deirectly linked to the success probability of a quantum computation {% cite Gilchrist2005 %}.

## FOM for quantum processes

Quantum processes (gates) define operations that transform the quantum state to another quantum state. These operations need to be accurate, and metrics have been defined to measure the quality of implementation of these processes. The evolution of the noisy quantum computer can be described with two main components:
- The quantum state: the system of interest used in the computation $$\rho$$.
- The environment in which the quantum state evolves $$\rho_{env}$$.

The evolution of the quantum state can be seen as a joint evolution of the state of interest and its environment (see. figure a). This evolution can be described by a single unitary $$U$$ acting over both systems. At the end of the evolution, the quantum state $$\rho$$ is measured using a projective measurement. This projective measurement also act over the environment as a joint measurement.

<div class="center">
  <img src="/img/system-level-benchmark/supremacy/quantum_process_joint_evolution.png" class="img-small" alt="Quantum process joint evolution with an environment"/>
</div>

The map $$\rho \rightarrow M(\rho)$$ represents a quantum operation if it is a Complete Positive Trace Preserving (CPTP) map. CP means that $$M(\rho)$$ must be positive semi-definite (i.e., no event with a negative output probability distribution). TP means that each measurement outcome probability adds up to 1.

Benchmarking quantum processing involves comparing ideal implementations of the map $$\widetilde{M}$$ to the actual implementation $$M$$. In general, these maps are directly called quantum gates.

{% include tables/quantum-processes-table.html %}
<script type="text/javascript">
    $(document).ready(function() {
      $('.quantum-processes-table').DataTable(
        {
          "pageLength": 100,
          "ordering": false,
          columnDefs: [{ width: '20%', targets: 0 }],
          "drawCallback": function(settings){ 
            MathJax.Hub.Queue(["Typeset", MathJax.Hub]); 
          }
        } 
      );
    });
</script>
*The average gate infidelity is often called the average gate error rate. However, in some cases, a distinction is done between these two quantities, as in quantum error correction for rigorously linking the error correction threshold to the average gate infidelity {% cite Sanders2015 %}.

## Extra references

For further reading on error measures of quantum states and quantum processing, the reader may refer to {% cite Gilchrist2005 %}. A nice recent tutorial discuss most of these metrics {% cite Hashim2024 %}. The reader can also refer to {% cite nielsen2010quantum %} for an introduction on distance measures.


## References
{% bibliography --cited %}