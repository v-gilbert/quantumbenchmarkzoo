---
title: Latest updates
description: >
  Latest updates: List the latest updates that have been done on the quantum benchmark zoo website.
navbar-page-id: latest-updates
---

# Latest updates

## List of updates
{% assign hw-access = site.nav.Business-informations | where: "page-id", "hardware-access" | first %}
* 2026-04-09 <a href="{{ hw-access.url | prepend: site.baseurl }}">Hardware access</a>:
Update of hardware price access and modalities.
{% assign quark = site.benchmarking-suites | where: "page-id", "QUARK" | first %}
* 2026-04-09 <a href="{{ quark.url | prepend: site.baseurl }}">QUARK</a>:
Creation of a new page of content on QUARK benchmark suite.
{% assign supermarq = site.benchmarking-suites | where: "page-id", "Supermarq" | first %}
* 2026-04-09 <a href="{{ supermarq.url | prepend: site.baseurl }}">Supermarq</a>:
Creation of a new page of content on Supermarq benchmark suite.
{% assign qed-c = site.benchmarking-suites | where: "page-id", "QED-C" | first %}
* 2026-04-09 <a href="{{ qed-c.url | prepend: site.baseurl }}">QED-C</a>:
Creation of a new page of content on QED-C benchmark suite.
{% assign qasmbench = site.benchmarking-suites | where: "page-id", "QASMBench" | first %}
* 2026-04-09 <a href="{{ qasmbench.url | prepend: site.baseurl }}">QASMBench</a>:
Creation of a new page of content on QASMBench benchmark suite.
{% assign process-tomography = site.tomography | where: "page-id", "process-tomography" | first %}
* 2026-03-24 <a href="{{ process-tomography.url | prepend: site.baseurl }}">Quantum Process Tomography (QPT)</a>:
Creation of a new page of content on Quantum Process Tomography.
{% assign state-tomography = site.tomography | where: "page-id", "state-tomography" | first %}
* 2026-03-24 <a href="{{ state-tomography.url | prepend: site.baseurl }}">Quantum State Tomography (QST)</a>:
Creation of a new page of content on Quantum State Tomography.
{% assign mbqs = site.application-protocols | where: "page-id", "MBQS" | first %}
* 2026-02-04 <a href="{{ mbqs.url | prepend: site.baseurl }}" target="_blank">Many-body Quantum Score</a>: Creation of a new page of content on the application-level benchmark Many-body Quantum Score.
{% assign clv = site.other-system-level-protocols | where: "page-id", "clifford-volume" | first %}
* 2026-02-04 <a href="{{ clv.url | prepend: site.baseurl }}" target="_blank">Clifford Volume Benchmark</a>: Creation of a new page of content on the system-level benchmark Clifford volume benchmark.
{% assign otoc = site.supremacy-protocols | where: "page-id", "otoc" | first %}
* 2026-02-04 <a href="{{ otoc.url | prepend: site.baseurl }}" target="_blank">Quantum echoes - Out-of-time-order correlator (OTOC)</a>: Creation of a new page of content on the supremacy experiment based on OTOC.
{% assign supremacy = site.nav.System-level | where: "page-id", "supremacy-benchmarks" | first %}
* 2026-02-04 <a href="{{ supremacy.url | prepend: site.baseurl }}" target="_blank">Quantum supremacy</a>: Update of the quantum supremacy table with three new experiments that happened in 2025.