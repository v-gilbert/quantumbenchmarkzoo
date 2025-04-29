---
datatable: true
description: >
  Roadmaps
---

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

