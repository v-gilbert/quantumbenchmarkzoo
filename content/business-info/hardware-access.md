---
datatable: true
description: >
  Hardware Access
---

# Hardware pricing and access

**List of acronyms:**  
**EM**: error mitigation  
**CIM**: Coherent Ising Machine  
**dqgs**: double qubit gate shot  
**sqgs**: single qubit gate shot  
**HQC**: H-system Quantum credits (specific to Quantinuum systems, <a href="https://learn.microsoft.com/en-us/azure/quantum/pricing?tabs=tabid-paygo%2Ctabid-paygoPasqal%2Ctabid-H2#quantinuum">click here for details</a>)  
**eHQC**: emulator H-system Quantum credits (specific to Quantinuum systems, <a href="https://learn.microsoft.com/en-us/azure/quantum/pricing?tabs=tabid-paygo%2Ctabid-paygoPasqal%2Ctabid-H2#quantinuum">click here for details</a>)  

{% include tables/pricing-table.html %}

<script type="text/javascript">
    $(document).ready(function() {
      $('.pricing-table').DataTable(
        {
          "pageLength": 10,
          "drawCallback": function(settings){ 
            MathJax.Hub.Queue(["Typeset", MathJax.Hub]); 
          }
        } 
      );
    });
</script>