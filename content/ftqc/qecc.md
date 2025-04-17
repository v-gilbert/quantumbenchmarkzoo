---
datatable: true
description: >
  Quantum Error Correction Codes Implementation
---

# Quantum Error Correction Code implementations

Quantum error correction is expected to be essential for achieving a quantum advantage over classical methods. Each quantum error correction code (QECC) is described by three parameters $$[[ n, k, d ]]$$, where $$k$$ logical qubits are encoded into $$n$$ physical qubits. The distance of the code is specified by the parameter $$d$$,  which determines the code’s ability to detect and correct errors. Classical error correction codes are defined by the same parameters but only with single brackets $$[ n, k, d ]$$. In quantum computing, repetition codes are considered classical, as they can detect either bit-flip or phase-flip errors but not arbitrary combinations of both.
Each QECC is characterized by an error threshold $$p_{th}$$, beyond which the quantum error correction method becomes ineffective — meaning that the error correction process introduces more errors than it mitigates. For a successful implementation, all physical quantum operations must exhibit error rates below this threshold. When the physical error rate is much smaller than the threshold, the error rate of the logical qubit $$\epsilon_{log}$$ is expected to decrease with the code distance exponentially:

$$ \epsilon_\mathrm{log} \propto \left( \frac{p}{p_\mathrm{th}} \right)^{(d+1)/2} $$

One popular method for quantum error correction is **stabilizer codes**, which constitute the majority of the quantum codes presented in the following table. In this framework, the logical state is encoded across multiple physical qubits with a specific initialization procedure. The logical qubits are then repeatedly stabilized with several syndrome measurements that permit the extraction of errors (and eventually their correction). This stabilization process occurs at regular intervals throughout the computation. The stabilization process is considered *active* when syndrome extraction and correction are carried out dynamically during the execution of the quantum circuit. In contrast, the approach is referred to as passive when error detection and correction are deferred after the final measurement (it is sometimes called post-selection). At scale, a stabilizer QECC must be active, which is obviously harder to implement as it requires low syndrome decoding latency with efficient dynamic corrections (sometimes, the correction can be transferred at the end of the circuit).

In general, a large set of logical operations can be efficiently implemented using *transversal operations*, wherein applying a logical gate to a logical qubit corresponds to the independent application of that gate to each constituent physical qubit. However, a universal logical gate set requires at least one *non-transversal* gate, which is difficult to realize in practice and involves the preparation of specific states called *magic states*. *Magic state distillation* is a process that enhances the fidelity of a magic state.

The following table summarizes experimental implementations of QECC conducted on real quantum hardware. Part of the presented data is adapted from the comparative study by R. Larose {% cite larose2024brief %}.

{% include tables/qecc-table.html %}

<script type="text/javascript">
    $(document).ready(function() {
      $('.qecc-table').DataTable(
        {
          "pageLength": 100
        } 
      );
    });
</script>

# References

{% bibliography --cited %}