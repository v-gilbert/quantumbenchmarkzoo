---
title: Benchmark suites
description: >
  List of quantum computing benchmarking suites and frameworks to ease the design and execution of benchmarking experiments.
navbar-page-id: benchmark-suites
---

# Benchmark suites

{% assign qasmbench = site.benchmarking-suites | where: "page-id", "QASMBench" | first %}
{% assign qed-c = site.benchmarking-suites | where: "page-id", "QED-C" | first %}
{% assign supermarq = site.benchmarking-suites | where: "page-id", "Supermarq" | first %}
{% assign quark = site.benchmarking-suites | where: "page-id", "QUARK" | first %}


## List of application-oriented benchmark suites

- <a href="{{ qasmbench.url | prepend: site.baseurl }}">QASMBench benchmark suite</a> (2020): Define a set of instances and figures of merit to characterize input instances. It focuses on evaluation of quantum circuits.
- <a href="{{ qed-c.url | prepend: site.baseurl }}">QED-C benchmark suite</a> (2021): Define a set of instances and visualization of performance profiles. It includes evaluations both on quantum circuits and analog quantum computers.
- <a href="{{ supermarq.url | prepend: site.baseurl }}">Supermarq benchmark suite</a> (2022): Define a set of instances and figures of merit to evaluate the coverage of input instance sets. It focuses on evaluation of quantum circuits.
- <a href="{{ quark.url | prepend: site.baseurl }}">QUARK benchmark suite</a> (2022): Define a set of instances of specific industrial use-cases . It focuses on evaluation of quantum circuits.
