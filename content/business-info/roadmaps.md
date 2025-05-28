---
title: Roadmaps
datatable: true
description: >
  Roadmaps
---
{% assign modified = page.path | max_last_modified: "tables/roadmap-multi-header-2-table.html" %}

# Roadmaps

The presentation of the roadmaps is split into two main parts. The first part presents the roadmaps that are structured with detailed timelines. The second part presents the roadmaps composed of milestones without detailed timelines.

## Time-line Roadmaps

The following table present the roadmap publicly published of each manufacturer in a timeline fashion. The quantities recorded are:
- Number of physical qubits $$n_{phys}$$  
- 2-qubit average error rate $$\epsilon_{phys}$$  
- Number of logical qubits $$n_{log}$$  
- logical qubit error rate $$\epsilon_{log}$$  

{% include tables/roadmap-multi-header-2-table.html %}

<script type="text/javascript">
    $(document).ready(function() {
      $('.roadmap-multi-header-2-table').DataTable(
        {
          "bAutoWidth": true,
          "pageLength": 10,
          "drawCallback": function(settings){ 
            MathJax.Hub.Queue(["Typeset", MathJax.Hub]); 
          }
        } 
      );
    });
</script>

## Milestones Roadmaps

### Google roadmap (2024/12)

- Milestone 1: Perform a quantum supremacy (validated in 2019)
- Milestone 2: Perform quantum error correction beyond error correction theshold (validated in 2023)
- Milestone 3: Build a long lived logical qubit ($$n_{phys}=10^3$$, $$n_{log}=1$$, $$\epsilon_{log}=10^{-6}$$)
- Milestone 4: Perfom logical quantum gates ($$n_{phys}=10^4$$, $$n_{log} \ge 2$$, $$\epsilon_{log}=10^{-6}$$)
- Milestone 5: Engineering scaleup ($$n_{phys}=10^5$$, $$n_{log} \ge 2$$, $$\epsilon_{log}=10^{-6}$$)
- Milestone 6: Engineering large scale quantum platform ($$n_{phys}=10^6$$, $$n_{log} \ge 2$$, $$\epsilon_{log}=10^{-13}$$)  
Reference: <a href="https://quantumai.google/roadmap" target="_blank">https://quantumai.google/roadmap</a>

### Alice & Bob roadmap (2024/12)

- Milestone 1: Develop a single cat qubit (validated in 2024)
- Milestone 2: Build a long lived logical qubit ($$n_{phys}=10-16$$, $$n_{log}=1$$, $$\epsilon_{log}=10^{-2}$$)
- Milestone 3: Perfom logical quantum gates ($$n_{phys}=48$$, $$n_{log}=4$$, $$\epsilon_{log}=10^{-3}$$)
- Milestone 4: Implement universal gate set with magic states ($$n_{phys}=250$$, $$n_{log} = 5$$, $$\epsilon_{log}=10^{-4}$$)
- Milestone 5: Engineering scaleup ($$n_{phys}=2000$$, $$n_{log} = 100$$, $$\epsilon_{log}=10^{-6}$$) (expected in 2030)  
Reference: <a href="https://alice-bob.com/roadmap/" target="_blank">https://alice-bob.com/roadmap/</a>

### Microsoft roadmap (2023)

- Milestone 1: Create and control a majorana qubit (validated in 2023)
- Milestone 2: Digital control of a majorana qubit (validated in 2025 but still in controversy)
- Milestone 3: Manipulation of more than a single qubit (demonstration of entanglement)
- Milestone 4: Multi-qubit quantum chip
- Milestone 5: Create logical qubits from physical qubits (demonstrating high-quality threshold)
- Milestone 6: Design a large-scale quantum computer  
Reference: <a href="https://quantum.microsoft.com/en-us/vision/quantum-roadmap" target="_blank">https://quantum.microsoft.com/en-us/vision/quantum-roadmap</a>