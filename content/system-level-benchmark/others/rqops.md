---
title: rQOPS
description: >
  rQOPS
---

# Reliable Quantum Operations Per Second (rQOPS)

This protocol was introduced by Microsoft in 2023 by C. Nayak {% cite rQOPS2023 %}. 

## Motivation

Microsoft introduced the reliable Quantum Operations Per Second (rQOPS) figure of merit to evaluate the performance of large-scale, fault-tolerant quantum computers. The principal motivation behind this figure of merit is quantifying the number of reliable logical operations a quantum computer can perform per second.

## Protocol details

The number of rQOPS is defined by the product of the number of logical qubits $$n$$ and the logical clock frequency $$f$$:

$$rQOPS = f \times n$$

The author specifies that the logical error rate should be reported along with the value of the $$rQOPS$$.

## Limitations

While the rQOPS metric provides a useful high-level indicator of performance, it is subject to several limitations arising from a lack of specification:
- The protocols used to measure the logical error rate and the logical clock frequency are not specified.
- The number of logical qubits $$n$$ is not fixed. As a result, the $$rQOPS$$ value may not accurately reflect performance at scale. For instance, the rQOPS derived from a small subset of logical qubits may not extrapolate to the full system, especially if clock frequency degrades with increasing system size due to routing or control overheads.

# References 
{% bibliography --cited %}

