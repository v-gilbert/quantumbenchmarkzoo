---
title: Qubit Characterization
description: >
  Qubit characterization methodologies
---

# Qubit characterization methodologies  

## Qubit coherence

{% assign t1 = site.qubit-characterization | where: "page-id", "T1" | first %}
- <a href="{{ t1.url | prepend: site.baseurl }}">$$T_1$$ energy relaxation time</a>

In a nutshell, $$T_1$$ quantifies the time scale at which the qubit passes from an excited state to a ground state due to decoherence processes (e.g., the amplitude damping channel).


{% assign t2 = site.qubit-characterization | where: "page-id", "T2" | first %}
- <a href="{{ t2.url | prepend: site.baseurl }}">$$T_2$$ phase decoherence time</a>

In a nutshell, $$T_2$$ quantifies the time scale at which the qubit suffers from phase decoherence. Phase decoherence includes energy relaxation (characterized by $$T_1$$) and pure dephasing, corresponding to a knowledge loss about the phase of the qubit.
