---
description: >
  Quantum Volume
---

# Quantum Volume Benchmark

### List of acronyms
CE: Constructor Evaluation (checked if the evaluation is done by the chip manufacturer)  
SP: Scientific paper (checked if a scientific paper explain the results)  
#Circ: number of circuits used for the evaluation  

For clarity the Quantum Volum is expressed in a logarithmic basis.

{% include tables/QV-table.html %}
<script type="text/javascript">
    $(document).ready(function() {
      $('.QV-table').DataTable(
        {
          "pageLength": 100
        } 
      );
    });
</script>

# Quantum Volume protocol

The Quantum Volume (QV) {% cite bishop2017quantum %} {% cite cross2019validating %} is a benchmarking protocol evaluating the ability of gate-based quantum computers to run quantum circuits reliably. This protocol gathers the maximum circuit width and depth that a quantum computer can successfully implement in a single metric number. A quantum computer has to successfully solve the *Heavy Output Generation* (HOG) problem  {% cite aaronson2016complexity %} of size $$n$$ to validate a quantum volume of size $$2^n$$. Many criteria may impact the value of the quantum volume: gate fidelity, coherence time, chip topology, and the efficiency of the transpilation method.

## Heavy Output Generation Problem

The HOG problem is a sampling problem {% cite aaronson2016complexity %} considered hard for classical computers and constitutes a pass/fail test for quantum computers.

The problem is stated as:  
Let $$Q$$ be a random circuit drawn from a suitable ensemble acting on $$n$$ qubits. Each possible output state $$x \in \{0, 1\}^n$$ is measured with probability $$|\left<x|\psi\right>|$$.
The set of output states with a probability greater than the median constitutes the *heavy* set of outputs associated with the quantum circuit $$Q$$.
The HOG problem consists of generating $$k$$ output strings $$x_1, x_2, ..., x_k$$ such that at least a $$2/3$$ fraction of these strings are part of the *heavy* set.  
Assuming the Quantum Threshold assumption, no polynomial-time algorithm can solve the HOG problem with a probability of at least 0.99.

This problem is considered hard for classical computers. The average heavy output probability for ideal machines is $$\approx 0.847$$. Readers may refer to {% cite aaronson2016complexity %} for further calculation details and proofs.

## Quantum Volum recipe

The following steps define how to generate quantum volume circuits:
- Choose a number $$n$$ as the width of the circuit (i.e., the number of qubits in the circuit).
- Set $$n=d$$ with $$d$$ the number of layers of the quantum circuit.
- Generate a model circuit composed of $$d$$ layers. Each layer comprises a random permutation (random relabelling) of qubits $$\pi$$ and a random unitary sampled from $$SU(4)$$. The permutation step is challenging for quantum chips with limited interconnections because it requires many swapping gates. The $$SU(4)$$ gates can be decomposed into three CNOT gates and seven single-qubit rotation gates {% cite vatan2004optimal %}.

<div class="center">
  <img src="/img/protocols/randomized/QV.jpg" class="img_content" alt="Quantum circuit for the quantum volume test"/>
</div>

This circuit is then used as input for the sampling task associated with the Heavy Output Generation (HOG) problem. If the quantum computer samples the right distribution (simulated classically), it validates the corresponding quantum volume score of $$2^n$$. The confidence interval for this evaluation is set to two-sigma ($$97.73 \%$$).

## Assumptions
* The circuit compiler may use all the possible tricks to improve the mapping of the quantum circuit, which can lead to possibly high extra-processing time. In {% cite baldwin2022re %}, the authors show that the compilation has a strong impact on small quantum volumes ($$< 10$$) as it can reduce the number of 2-qubit gates.
* The Quantum computer should honestly attempt to solve the HOG problem and not choose an implementation far from the initial model of the circuit (i.e., the approximation error should be limited).

## Protocol Variations

In {% cite baldwin2022re %}, the authors argue that the confidence interval built in the initial test {% cite cross2019validating %} is more restrictive than necessary. They propose a new tighter confidence interval that still covers the initial requirement of $$97.73\%$$ (using bootstrapping).

In {% cite bistron2025benchmarking %}, the authors extend the quantum volume protocol to verify the output sampling distribution for large experiments. This method uses parity tests to determine the heavy output probability distribution efficiently.

## Comments on the Quantum Volume

Previous experiments {% cite pelofske2022quantum %} have shown that the Quantum Volume measured by quantum chip manufacturers is often hard to reproduce due to advanced optimization settings (compilation optimization and approximation of quantum gates) used to boost the performance of the quantum computer for passing this test.

## References
{% bibliography --cited %}