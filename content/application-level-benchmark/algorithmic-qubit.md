---
datatable: true
description: >
  Algorithmic qubit protocol.
---

# Algorithmic qubit benchmark

## List of acronyms
AC : Advanced Compilation method  
CE: Constructor Evaluation (checked if the evaluation is done by the chip manufacturer)  
COI: Conflict of Interest
EM : Error mitigation  
SP: Scientific paper (checked if a scientific paper explain the results)  

{% include tables/aq-table.html %}
<script type="text/javascript">
    $(document).ready(function() {
      $('.aq-table').DataTable(
        {
          "pageLength": 100
        } 
      );
    });
</script>


## Algorithmic qubit protocol
The benchmark called Algorithmic Qubit was proposed by IonQ in 2020 {% cite algorithmicQubits %} and is derived from the Volumetric benchmark protocol {% cite lubinski2023application %}. The protocol of the Algorithmic qubit protocol is described in a github repository {% cite algorithmicQubitsProtocol %}. The protocol consists in sampling the output distribution of a quantum circuit and compare this output to the ideal output distribution using the classical fidelity metric.

For validating a $$n$$ AQ, several algorithms are used to generate the following quantum circuits using $$n$$ qubits:
- 3 circuits based on the Quantum Fourier Transform
- 3 circuits based on the Quantum Phase Estimation
- 3 circuits based on the Amplitude Estimation
- 1 circuit based on the Monte Carlo Sampling algorithm
- 3 circuit based on a VQE simulation
- 1 circuit based on a Hamiltonian simulation

Each circuit is then compiled to a fixed gate set: CX, Rx, Ry and Rz using Qiskit compiler 0.34.2, with seed=0. The depth and width of the compiled circuit is recorded as $$w_d$$ and $$w_c$$ for the volumetric plot.

After this first step, the circuit is sent to the quantum computer (and might be further compiled and optimized). The only resitriction is that the real circuit run on the quantum computer must implement the same unitary as the input circuit. Employing error mitigation methods is tolerated but must be reported. Each circuit is sampled $$n_\mathrm{shot}$$ times. For each circuit, the ideal sampling probability is defined as $$\widetilde{p}_c$$ and the experimental sampling probability as $$p_c$$. The classical fidelity $$F(p_c, \widetilde{p}_c)$$ is computed and the statistical error $$\epsilon_c$$ is extracted:

$$ \epsilon_c = \sqrt{\frac{F \left(p_c, \widetilde{p}_c \right) \left(1-F \left(p_c, \widetilde{p}_c \right) \right)}{n_\mathrm{shots}}}$$
<!-- Link to the fidelity -->

The number of algorithmic qubits associated to a quantum computer is the largest size $$n$$ such that all generated circuits with a number of qubits $$w_c \le n$$ and depth $$\sqrt{w_d} \le n$$ have a fidelity beyond the validity threshold $$F(p_c, \widetilde{p}_c) - \epsilon_c > 0.37$$

<!-- Ajouter des plots concernant l'algorithmic qubit-->

## Controversy on the algorithmic qubit

This protocol have been criticized for several reasons in {% cite debunkingAlgorithmicQubit %}. The authors of the post underline the unfair role of error mitigation methods that tend to boost the performance of quantum computers, reducing the performance gap with other machines. They especially demonstrate misleading results employing error mitigation methods which are not supposed to scale properly with system size. They also underline the unfair use of Qiskit compiler 0.34.2 used to compute the number of CX gates, and hence, depth of the circuit. Remember that this method is used to compute the values used in the heatmaps $$w_d$$ and $$w_c$$. If the compilation is far from being optimal, it can be used to artificially boost the performance of the quantum computer. In particular, they show that other compilers may drastically reduce the overall number of gates (especially for largest circuits). Finally, one could also notice that the number of different circuits is quite low for each instance size.

## References

{% bibliography --cited %}