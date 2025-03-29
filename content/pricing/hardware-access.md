---
datatable: true
description: >
  Hardware Access
---

# Hardware pricing and access

List of acronyms:
* em: error mitigation
* CIM: Coherent Ising Machine
* dqgs: double qubit gate shot
* sqgs: single qubit gate shot

{% include tables/pricing-table.html %}

<script type="text/javascript">
    $(document).ready(function() {
      $('.pricing-table').DataTable(
        {
          "pageLength": 100
        } 
      );
    });
</script>