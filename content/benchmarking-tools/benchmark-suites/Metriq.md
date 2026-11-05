---
title: Metriq
description: >
    The Metriq Benchmark Suite is an open-source framework for evaluating and comparing quantum computers using system- and application-level protocols.
datatable: true
navbar-page-id: benchmark-suites
---

{% assign metriq-score = site.aggregated-scores | where: "page-id", "Metriq-score" | first %}

# Metriq benchmark suite

The Metriq Benchmark Suite {% cite cosentino2026metriq %} was introduced in March 2026 by the <a href="https://unitary.foundation" target="_blank">Unitary Foundation</a>, USA, as part of the Metriq platform. The initiative is also supported by the <a href="https://unitary.foundation/posts/2024_benchmark_committee/" target="_blank">Open Quantum Benchmark Committee (OQBC)</a>, established in 2024 to facilitate development and adoption of quantum benchmarks.

## Motivation

The Metriq Benchmark Suite aims to establish an open-source, community-driven framework for evaluating quantum computing performance. By enabling researchers and developers to contribute benchmarking protocols, execute them across different hardware platforms, and share results publicly, it seeks to improve the transparency, reproducibility, and comparability of quantum computing benchmarks.

## Architecture

The Metriq platform follows a modular architecture composed of three independent components:
- **metriq-gym — Benchmark execution**: A Python-based runner providing standardized implementations of benchmarking protocols, configurable parameters, hardware abstraction, and automated job execution. It uses the <a href="https://sdk.qbraid.com/qBraid/" target="_blank">qBraid SDK</a> for interoperability across quantum hardware providers.
- **metriq-data — Data collection**: A version-controlled repository containing structured, schema-validated JSON benchmarking results. Records include the device, provider, benchmark version, configuration, and execution timestamp, enabling traceability and independent analysis.
- **metriq-web — Results visualization**: A public web interface that aggregates, processes, and presents benchmarking results, supporting comparisons across devices and protocols.

The platform enables contributors to implement new protocols through a community review process, execute them using a common interface, and publish their results in a shared dataset. Benchmark configurations are defined through explicit parameter schemas to improve experimental reproducibility.

## Benchmark instances

The suite contains eight benchmarking protocols organized into two categories described in the following table.

{% include tables/benchmark-suite-Metriq-instances-table.html %}
<script type="text/javascript">
    $(document).ready(function() {
      $('.benchmark-suite-Metriq-instances-table').DataTable(
        {
          "pageLength": 10,
          "drawCallback": function(settings){ 
             MathJax.typesetPromise(); 
          }
        } 
      );
    });
</script>

These protocols are selected to cover different performance characteristics while keeping execution costs manageable The listed configurations correspond to the experiments reported in the publication. Benchmark parameters are configurable, and individual protocols can support additional instance sizes or circuit variants.

The figure of merit used to evaluate the performance of the quantum computer is the <a>Metric Score (MS)</a>, where normalized benchmark scores are combined using a weighted average across the different instances and benchmarks.

## Devices being benchmarked

The composite-score evaluation reported in the publication includes 11 quantum processors from five hardware providers.

{% include tables/benchmark-suite-Metriq-devices-table.html %}
<script type="text/javascript">
    $(document).ready(function() {
      $('.benchmark-suite-Metriq-devices-table').DataTable(
        {
          "pageLength": 15,
          "drawCallback": function(settings){ 
             MathJax.typesetPromise(); 
          }
        } 
      );
    });
</script>

## Limitations

The Metriq Benchmark Suite has several limitations, some of which are explicitly acknowledged by the authors:

- **Limited hardware scope**: The current suite primarily targets NISQ gate-based quantum computers. Analog quantum computing platforms and fault-tolerant logical-qubit systems are not yet covered by dedicated benchmarking protocols.

- **Incomplete cross-platform comparability**: The authors explicitly identify inconsistencies in the availability and reporting of device and job metadata across hardware providers. In particular, CLOPS requires reliable QPU execution-time information, which is not exposed by all providers. 

- **Metriq score limitation**: The aggregation of benchmark results introduces additional limitations, discussed in the dedicated <a href="{{ metriq-score.url | prepend: site.baseurl }}">Metriq Score page</a>.

## Implementation

The Metriq Benchmark Suite is implemented through three open-source repositories maintained by the Unitary Foundation: <a href="https://github.com/unitaryfoundation/metriq-gym" target="_blank">metriq-gym</a>, <a href="https://github.com/unitaryfoundation/metriq-data" target="_blank">metriq-data</a>, and <a href="https://github.com/unitaryfoundation/metriq-web" target="_blank">metriq-web</a>.

Benchmark results and device comparisons are publicly accessible through the <a href="https://metriq.info/" target="_blank">Metriq platform</a>.

## References

{% bibliography --cited %}