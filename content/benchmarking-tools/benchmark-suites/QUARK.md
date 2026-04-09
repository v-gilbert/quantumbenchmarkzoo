---
title: QUARK
description: >
  QUARK is a quantum application benchmarking framework for evaluating quantum computers on specific industrial use cases in optimization and machine learning.
navbar-page-id: benchmark-suites
---

{% assign initiatives = site.nav.Business-informations | where: "page-id", "benchmarking-initiatives" | first %}

# QUARK: a framework for QUantum Application benchmaRK

The QUantum Application benchmaRK (QUARK) was initially created in 2022 and propose a programming framework for facillitating the development of quantum computer benchmarking tests. The motivations and initial description of the QUARK benchmark suite is done in {% cite finvzgar2022quark %}. This framework is mainly developped by European institutes and private industries and more specifically, German institutions such as the Technical University of Munich, Fraunhofer Institute and BMW. The German <a href="{{ initiatives.url | prepend: site.baseurl }}#benchqc" target="_blank">Bench-QC project</a> {% cite geissler2025benchqc %} is based on this framework.

## Motivation

QUARK is one of the first initiatives to create a dedicated Python programming framework for evaluating the performance of quantum computers holistically, with a focus on applications. This tool aims to facilitate the evaluation of the maturity of quantum technologies for industrial applications by focusing on end-to-end application performance investigation. It is an open-source framework for designing, implementing, executing, and analysing benchmarks on quantum computers.

## Architecture

The QUARK framework has been iteratively developed and enhanced since 2022. The first description of the architecture appears in {% cite finvzgar2022quark %}, and consists of the first version of the software, primarily adapted for benchmarking optimization problems. This architecture has then been further generalized to include benchmarking processes related to quantum machine learning models in {% cite kiwit2023application %}. 

The core architecture is precisely described in {% cite kiwit2023application %} and is currently organized into abstract modules that can be easily extended to meet users' specific needs. The next figure is inspired by {% cite kiwit2023application %} and shows the benchmark process based on the module architecture, where each module has a custom preprocessing and postprocessing method that act on the module's inputs and outputs, respectively. A benchmark process consists of a list of chained modules (blue boxes). The head of the chain is always an Application module (red box), which generally consists of methods for generating problem instances and evaluating the quality of solutions returned by the submodules. 

<div class="center">
  <img src="/img/multi-level-benchmark/framework/QUARK-module-architecture.png" class="img-large" alt="Representation of the module architecture of the QUARK framework"/>
</div>

## Benchmark instances

The framework has primarily been developed for benchmarking optimization problems and subsequently extended to quantum machine learning tasks.

### Optimization

The first version of the QUARK framework described in {% cite finvzgar2022quark %} includes the following optimization problems:
* **Robot Path Planning problem**. This problem is a variant of the Travelling Salesman Problem, where the objective is to minimize the robot’s total travel cost while visiting all required tasks exactly once under configuration and feasibility constraints.
* **Vehicle option optimization problem**. This problem is a variant of the MAX-SAT problem, where the objective is to find a feasible configuration for a vehicle (satisfaction of hard constraints) that maximizes the number of testing requirements (assessment of the feasibility and functionality of a configuration).

In this first study, the authors use three figures of merit to assess the performance of the quantum computer:
* **Validity**: indicate whether a solution found by the solver is valid or not (with respect to the constraints).
* **Quality**: indicate the quality of a solution (cost function).
* **Time to reach the solution**: in {% cite finvzgar2022quark %}, the authors call this figure of merit Time To Solution (TTS), but we prefer to avoid this term as it does not match the usual definition of the TTS in the Terminology section. Instead, this metric is the end-to-end time to approximate the solution to a problem, including: the time to map the input problem to the representation solved by the quantum computer, the solver's runtime, and the time required to convert the solution back for validation.

### Machine learning

The QUARK framework has then subsequently been extended to machine learning problems in {% cite kiwit2023application %}. This second version evaluates the trainability of different Quantum Machine Learning (QML) models and, more specifically, studies:
* **QCBM** (Quantum Circuit Born Machine)
* **QGAN** (Quantum Generative Adversarial Network)

This first study assesses the training performance of QML models using emulators with different hyperparameters by evaluating the Kullback-Leibler divergence between the model and target distribution and the precision of the trained model (ability to generate solutions from the solution set either seen or unseen).  
They also characterize other figures of merit, such as:
* **Coverage**: evaluates the portion of the solution space reached by the model.
* **Exploration**: evaluates the portion of unseen generated samples which are valid or invalid (novelty).
* **Fidelity**: evaluates the ability of the model to generate unseen and valid samples, normalized by the number of new samples.
* **Rate**: evaluates the ability of the model to generate unseen and valid samples, normalized by the total number of samples.

A second publication concerning this work {% cite kiwit2024benchmarking %} has studied the impact of statistical and quantum noise on the training capabilities of quantum generative learning models.

## Devices being benchmarked

The framework already permits connections to different types of quantum computers:
* Trapped-ions IonQ and superconducting Oxford Quantum Circuit and Rigetti computers via <a href="https://aws.amazon.com/braket/pricing/" target="_blank">Amazon Braket</a>.
* Neutral-atom quantum computer via <a href="https://docs.pasqal.com/pulser/" target="_blank">Pasqal Pulser</a>.
* Quantum annealing via <a href="https://docs.dwavequantum.com/en/latest/ocean/" target="_blank">D-Wave ocean library</a>.

Simulators:
* <a href="https://www.ibm.com/quantum/qiskit" target="_blank">Qiskit simulator</a>
* <a href="https://www.qrisp.eu/" target="_blank">Qrisp simulator</a>
* <a href="https://aws.amazon.com/braket/pricing/" target="_blank">Braket simulators</a> (state vector and tensor network simulators)

## Implementation

The source code of the QUARK framework is available <a href="https://github.com/QUARK-framework/QUARK" target="_blank">here</a>.  
Last update of the source code: 30/07/2025

## References

{% bibliography --cited %}