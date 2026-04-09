---
title: Hardware Access
datatable: true
description: >
  Compare pricing and access options for quantum hardware across providers, technologies, usage types across cloud, subscription & custom plans.
navbar-page-id: hardware-access
---
{% assign modified = page.path | max_last_modified: "tables/pricing-table.html" %}

# Hardware pricing and access

The hardware are divided in three categories:
- [Universal gate-based quantum computers](#universal-qc)
- [Photonic quantum computers](#photonic-qc) (which can mix universal and non-universal models)
- [Analog quantum computers](#analog-qc) (which are not universal)

**List of acronyms:**  
**EM**: error mitigation  
**CIM**: Coherent Ising Machine  
**dqgs**: double qubit gate shot  
**sqgs**: single qubit gate shot  
**HQC**: H-system Quantum credits (specific to Quantinuum systems, <a href="https://learn.microsoft.com/en-us/azure/quantum/pricing?tabs=tabid-paygo%2Ctabid-paygoPasqal%2Ctabid-H2#quantinuum">click here for details</a>)  
**eHQC**: emulator H-system Quantum credits (specific to Quantinuum systems, <a href="https://learn.microsoft.com/en-us/azure/quantum/pricing?tabs=tabid-paygo%2Ctabid-paygoPasqal%2Ctabid-H2#quantinuum">click here for details</a>)  

## <a name="universal-qc"></a>Universal quantum computers (gate-based)

{% include tables/pricing-universal-QC-table.html %}
<script type="text/javascript">
    $(document).ready(function() {
      $('.pricing-universal-QC-table').DataTable(
        {
          "pageLength": 10,
          "ordering": false,
          columnDefs: [{ width: '20%', targets: 0 }],
          "drawCallback": function(settings){ 
            MathJax.Hub.Queue(["Typeset", MathJax.Hub]); 
          }
        } 
      );
    });
</script>

## <a name="photonic-qc"></a>Photonic quantum computers

{% include tables/pricing-photonic-QC-table.html %}
<script type="text/javascript">
    $(document).ready(function() {
      $('.pricing-photonic-QC-table').DataTable(
        {
          "pageLength": 10,
          "ordering": false,
          columnDefs: [{ width: '20%', targets: 0 }],
          "drawCallback": function(settings){ 
            MathJax.Hub.Queue(["Typeset", MathJax.Hub]); 
          }
        } 
      );
    });
</script>

## <a name="analog-qc"></a>Analog quantum computers

{% include tables/pricing-analog-QC-table.html %}
<script type="text/javascript">
    $(document).ready(function() {
      $('.pricing-analog-QC-table').DataTable(
        {
          "pageLength": 10,
          "ordering": false,
          columnDefs: [{ width: '20%', targets: 0 }],
          "drawCallback": function(settings){ 
            MathJax.Hub.Queue(["Typeset", MathJax.Hub]); 
          }
        } 
      );
    });
</script>
