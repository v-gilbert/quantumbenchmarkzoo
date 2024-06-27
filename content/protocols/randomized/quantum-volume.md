---
description: >
  Quantum Volume
---

{% assign hog = site.randomized-protocols.sampling-problems | where: "page-id", "hog-problem" | first %}

# Quantum Volume Benchmark

### List of acronyms
CE: Constructor Evaluation (checked if the evaluation is done by the chip manufacturer)  
SP: Scientific paper (checked if a scientific paper explain the results)  

For clarity the Quantum Volum is expressed in a logarithmic basis.
<table id="my_table" class="display">
  <thead>
    <tr>
      <th>Ref</th>
      <th>Company</th>
      <th>Year</th>
      <th>CE</th>
      <th>SP</th>
      <th>#Circ</th>
      <th>Shots</th>
      <th>CPU / QPU</th>
      <th>Technology</th>
      <th>Chip qubits</th>
      <th>QV</th>
      <th>Comment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{% cite aqt2023qv %}</td>
      <td>AQT</td>
      <td>2023/02</td>
      <td>x</td>
      <td></td>
      <td></td>
      <td></td>
      <td>Pine System</td>
      <td>Superconducting</td>
      <td>24</td>
      <td>7</td>
      <td>Not any information about the protocol</td>
    </tr>
    <tr>
      <td>{% cite sundaresan2020reducing %}</td>
      <td>IBM</td>
      <td>2020/07</td>
      <td>x</td>
      <td>x</td>
      <td></td>
      <td></td>
      <td>Johannesburg</td>
      <td>Superconducting</td>
      <td>20</td>
      <td>5</td>
      <td>initial protocol {% cite cross2019validating %}</td>
    </tr>
    <tr>
      <td>{% cite jurcevic2021demonstration %}</td>
      <td>IBM</td>
      <td>2020/09</td>
      <td>x</td>
      <td>x</td>
      <td></td>
      <td></td>
      <td>Montreal</td>
      <td>Superconducting</td>
      <td>27</td>
      <td>6</td>
      <td>initial protocol {% cite cross2019validating %}</td>
    </tr>
    <tr>
      <td>{% cite ibm2024qv %}</td>
      <td>IBM</td>
      <td>2022/12</td>
      <td>x</td>
      <td></td>
      <td></td>
      <td></td>
      <td>sherbrooke (Eagle r3)</td>
      <td>Superconducting</td>
      <td>127</td>
      <td>7</td>
      <td>initial protocol {% cite cross2019validating %}</td>
    </tr>
    <tr>
      <td>{% cite ibm2024qv %}</td>
      <td>IBM</td>
      <td>2022/12</td>
      <td>x</td>
      <td></td>
      <td></td>
      <td></td>
      <td>sherbrooke (Eagle r3)</td>
      <td>Superconducting</td>
      <td>127</td>
      <td>7</td>
      <td>initial protocol {% cite cross2019validating %}</td>
    </tr>
    <tr>
      <td>{% cite ibm2024qv %}</td>
      <td>IBM</td>
      <td>2022/12</td>
      <td>x</td>
      <td></td>
      <td></td>
      <td></td>
      <td>brisbane (Eagle r3)</td>
      <td>Superconducting</td>
      <td>127</td>
      <td>7</td>
      <td>initial protocol {% cite cross2019validating %}</td>
    </tr>
    <tr>
      <td>{% cite ibm2024qv %}</td>
      <td>IBM</td>
      <td>2022/12</td>
      <td>x</td>
      <td></td>
      <td></td>
      <td></td>
      <td>brisbane (Eagle r3)</td>
      <td>Superconducting</td>
      <td>127</td>
      <td>7</td>
      <td>initial protocol {% cite cross2019validating %}</td>
    </tr>
    <tr>
      <td>{% cite ibm2024qv %}</td>
      <td>IBM</td>
      <td>2022/12</td>
      <td>x</td>
      <td></td>
      <td></td>
      <td></td>
      <td>osaka (Eagle r3)</td>
      <td>Superconducting</td>
      <td>127</td>
      <td>7</td>
      <td>initial protocol {% cite cross2019validating %}</td>
    </tr>
    <tr>
      <td>{% cite ibm2024qv %}</td>
      <td>IBM</td>
      <td>2022/12</td>
      <td>x</td>
      <td></td>
      <td></td>
      <td></td>
      <td>osaka (Eagle r3)</td>
      <td>Superconducting</td>
      <td>127</td>
      <td>7</td>
      <td>initial protocol {% cite cross2019validating %}</td>
    </tr>
    <tr>
      <td>{% cite ibm2024qv %}</td>
      <td>IBM</td>
      <td>2022/12</td>
      <td>x</td>
      <td></td>
      <td></td>
      <td></td>
      <td>kyoto (Eagle r3)</td>
      <td>Superconducting</td>
      <td>127</td>
      <td>7</td>
      <td>initial protocol {% cite cross2019validating %}</td>
    </tr>
    <tr>
      <td>{% cite ibm2024qv %}</td>
      <td>IBM</td>
      <td>2022/12</td>
      <td>x</td>
      <td></td>
      <td></td>
      <td></td>
      <td>kyoto (Eagle r3)</td>
      <td>Superconducting</td>
      <td>127</td>
      <td>7</td>
      <td>initial protocol {% cite cross2019validating %}</td>
    </tr>
    <tr>
      <td>{% cite ibm2024qv %}</td>
      <td>IBM</td>
      <td>2022/12</td>
      <td>x</td>
      <td></td>
      <td></td>
      <td></td>
      <td>Quebec (Eagle r3)</td>
      <td>Superconducting</td>
      <td>127</td>
      <td>7</td>
      <td>initial protocol {% cite cross2019validating %}</td>
    </tr>
    <tr>
      <td>{% cite ibm2024qv %}</td>
      <td>IBM</td>
      <td>2022/12</td>
      <td>x</td>
      <td></td>
      <td></td>
      <td></td>
      <td>kawasaki (Eagle r3)</td>
      <td>Superconducting</td>
      <td>127</td>
      <td>7</td>
      <td>initial protocol {% cite cross2019validating %}</td>
    </tr>
    <tr>
      <td>{% cite ibm2024qv %}</td>
      <td>IBM</td>
      <td>2022/12</td>
      <td>x</td>
      <td></td>
      <td></td>
      <td></td>
      <td>rensselaer (Eagle r3)</td>
      <td>Superconducting</td>
      <td>127</td>
      <td>7</td>
      <td>initial protocol {% cite cross2019validating %}</td>
    </tr>
    <tr>
      <td>{% cite ibm2024qv %}</td>
      <td>IBM</td>
      <td>2022/12</td>
      <td>x</td>
      <td></td>
      <td></td>
      <td></td>
      <td>kyiv (Eagle r3)</td>
      <td>Superconducting</td>
      <td>127</td>
      <td>7</td>
      <td>initial protocol {% cite cross2019validating %}</td>
    </tr>
    <tr>
      <td>{% cite ibm2024qv %}</td>
      <td>IBM</td>
      <td>2022/12</td>
      <td>x</td>
      <td></td>
      <td></td>
      <td></td>
      <td>cleveland (Eagle r3)</td>
      <td>Superconducting</td>
      <td>127</td>
      <td>7</td>
      <td>initial protocol {% cite cross2019validating %}</td>
    </tr>
    <tr>
      <td>{% cite ibm2024qv %}</td>
      <td>IBM</td>
      <td>2022/12</td>
      <td>x</td>
      <td></td>
      <td></td>
      <td></td>
      <td>nazca (Eagle r3)</td>
      <td>Superconducting</td>
      <td>127</td>
      <td>7</td>
      <td>initial protocol {% cite cross2019validating %}</td>
    </tr>
    <tr>
      <td>{% cite ibm2024qv %}</td>
      <td>IBM</td>
      <td>2022/12</td>
      <td>x</td>
      <td></td>
      <td></td>
      <td></td>
      <td>cusco (Eagle r3)</td>
      <td>Superconducting</td>
      <td>127</td>
      <td>7</td>
      <td>initial protocol {% cite cross2019validating %}</td>
    </tr>
    <tr>
      <td>{% cite ibm2024qv %}</td>
      <td>IBM</td>
      <td>2023/12</td>
      <td>x</td>
      <td></td>
      <td></td>
      <td></td>
      <td>torino (Heron r1)</td>
      <td>Superconducting</td>
      <td>133</td>
      <td>9</td>
      <td>initial protocol {% cite cross2019validating %}</td>
    </tr>
    <tr>
      <td>{% cite pelofske2022quantum %}</td>
      <td>IonQ</td>
      <td>2022/03</td>
      <td></td>
      <td>x</td>
      <td>1000</td>
      <td>20</td>
      <td>Harmony</td>
      <td>Trapped-ions</td>
      <td>11</td>
      <td>3</td>
      <td>initial protocol {% cite cross2019validating %}</td>
    </tr>
    <tr>
      <td>{% cite pelofske2022quantum %}</td>
      <td>OQC</td>
      <td>2022/03</td>
      <td></td>
      <td>x</td>
      <td>1000</td>
      <td>20</td>
      <td>Lucy</td>
      <td>Superconducting</td>
      <td>8</td>
      <td>0</td>
      <td>initial protocol {% cite cross2019validating %}</td>
    </tr>
    <tr>
      <td>{% cite pelofske2022quantum %}</td>
      <td>Rigetti</td>
      <td>2022/03</td>
      <td></td>
      <td>x</td>
      <td>1000</td>
      <td>20</td>
      <td>Aspen-11</td>
      <td>Superconducting</td>
      <td>38</td>
      <td>2</td>
      <td>initial protocol {% cite cross2019validating %}</td>
    </tr>
    <tr>
      <td>{% cite pelofske2022quantum %}</td>
      <td>Rigetti</td>
      <td>2022/03</td>
      <td></td>
      <td>x</td>
      <td>1000</td>
      <td>20</td>
      <td>Aspen-M-1</td>
      <td>Superconducting</td>
      <td>80</td>
      <td>3</td>
      <td>initial protocol {% cite cross2019validating %}</td>
    </tr>
    <tr>
      <td>{% cite pelofske2022quantum %}</td>
      <td>Quantinuum</td>
      <td>2022/03</td>
      <td></td>
      <td>x</td>
      <td>1000</td>
      <td>20</td>
      <td>H1-2</td>
      <td>Trapped-ions</td>
      <td>12</td>
      <td>9</td>
      <td>initial protocol {% cite cross2019validating %}</td>
    </tr>
    <tr>
      <td>{% cite pino2021demonstration %} {% cite quantinuum2024qv %}</td>
      <td>Quantinuum</td>
      <td>2020/06</td>
      <td>x</td>
      <td>x</td>
      <td>400</td>
      <td>100</td>
      <td>H0</td>
      <td>Trapped-ions</td>
      <td></td>
      <td>6</td>
      <td>initial protocol {% cite cross2019validating %}</td>
    </tr>
    <tr>
      <td>{% cite honeywell2020qv %} {% cite quantinuum2024qv %}</td>
      <td>Quantinuum</td>
      <td>2020/09</td>
      <td>x</td>
      <td></td>
      <td></td>
      <td></td>
      <td>H1-1</td>
      <td>Trapped-ions</td>
      <td></td>
      <td>7</td>
      <td>initial protocol {% cite cross2019validating %}</td>
    </tr>
    <tr>
      <td>{% cite quantinuum2024qv %}</td>
      <td>Quantinuum</td>
      <td>2021/03</td>
      <td>x</td>
      <td></td>
      <td></td>
      <td></td>
      <td>H1-1</td>
      <td>Trapped-ions</td>
      <td></td>
      <td>9</td>
      <td>initial protocol {% cite cross2019validating %}</td>
    </tr>
    <tr>
      <td>{% cite quantinuum2024qv %}</td>
      <td>Quantinuum</td>
      <td>2021/07</td>
      <td>x</td>
      <td></td>
      <td></td>
      <td></td>
      <td>H1-1</td>
      <td>Trapped-ions</td>
      <td></td>
      <td>10</td>
      <td>initial protocol {% cite cross2019validating %}</td>
    </tr>
    <tr>
      <td>{% cite quantinuum092021qv %} {% cite quantinuum2024qv %}</td>
      <td>Quantinuum</td>
      <td>2021/09</td>
      <td>x</td>
      <td></td>
      <td>2000</td>
      <td>5</td>
      <td>H1-2</td>
      <td>Trapped-ions</td>
      <td></td>
      <td>11</td>
      <td>initial protocol {% cite cross2019validating %}</td>
    </tr>
    <tr>
      <td>{% cite quantinuum042022qv %} {% cite quantinuum2024qv %}</td>
      <td>Quantinuum</td>
      <td>2022/04</td>
      <td>x</td>
      <td></td>
      <td>200</td>
      <td>100</td>
      <td>H1-2</td>
      <td>Trapped-ions</td>
      <td></td>
      <td>12</td>
      <td>initial protocol {% cite cross2019validating %}</td>
    </tr>
    <tr>
      <td>{% cite quantinuum092022qv %} {% cite quantinuum2024qv %}</td>
      <td>Quantinuum</td>
      <td>2022/09</td>
      <td>x</td>
      <td></td>
      <td>220</td>
      <td>90</td>
      <td>H1-1</td>
      <td>Trapped-ions</td>
      <td></td>
      <td>13</td>
      <td>protocol {% cite baldwin2022re %}</td>
    </tr>
    <tr>
      <td>{% cite quantinuum2024qv %}</td>
      <td>Quantinuum</td>
      <td>2021/01</td>
      <td>x</td>
      <td></td>
      <td></td>
      <td></td>
      <td>H1-1</td>
      <td>Trapped-ions</td>
      <td></td>
      <td>14</td>
      <td>protocol {% cite baldwin2022re %}</td>
    </tr>
    <tr>
      <td>{% cite quantinuum022023qv %} {% cite quantinuum2024qv %}</td>
      <td>Quantinuum</td>
      <td>2021/01</td>
      <td>x</td>
      <td></td>
      <td>100</td>
      <td>200</td>
      <td>H1-1</td>
      <td>Trapped-ions</td>
      <td></td>
      <td>15</td>
      <td>protocol {% cite baldwin2022re %}</td>
    </tr>
    <tr>
      <td>{% cite quantinuum2024qv %}</td>
      <td>Quantinuum</td>
      <td>2023/04</td>
      <td>x</td>
      <td></td>
      <td></td>
      <td></td>
      <td>H2-1</td>
      <td>Trapped-ions</td>
      <td></td>
      <td>15</td>
      <td>protocol {% cite baldwin2022re %}</td>
    </tr>
    <tr>
      <td>{% cite moses2023race %} {% cite quantinuum2024qv %}</td>
      <td>Quantinuum</td>
      <td>2023/04</td>
      <td>x</td>
      <td>x</td>
      <td>200</td>
      <td>100</td>
      <td>H2-1</td>
      <td>Trapped-ions</td>
      <td></td>
      <td>16</td>
      <td>protocol {% cite baldwin2022re %}</td>
    </tr>
    <tr>
      <td>{% cite quantinuum2024qv %}</td>
      <td>Quantinuum</td>
      <td>2023/03</td>
      <td>x</td>
      <td></td>
      <td></td>
      <td></td>
      <td>H1-1</td>
      <td>Trapped-ions</td>
      <td></td>
      <td>16</td>
      <td>protocol {% cite baldwin2022re %}</td>
    </tr>
    <tr>
      <td>{% cite quantinuum042022qv %} {% cite quantinuum2024qv %}</td>
      <td>Quantinuum</td>
      <td>2023/05</td>
      <td>x</td>
      <td></td>
      <td></td>
      <td></td>
      <td>H1-1</td>
      <td>Trapped-ions</td>
      <td></td>
      <td>17</td>
      <td>protocol {% cite baldwin2022re %}</td>
    </tr>
    <tr>
      <td>{% cite quantinuum042022qv %} {% cite quantinuum2024qv %}</td>
      <td>Quantinuum</td>
      <td>2023/05</td>
      <td>x</td>
      <td></td>
      <td></td>
      <td></td>
      <td>H1-1</td>
      <td>Trapped-ions</td>
      <td></td>
      <td>18</td>
      <td>protocol {% cite baldwin2022re %}</td>
    </tr>
    <tr>
      <td>{% cite quantinuum042022qv %} {% cite quantinuum2024qv %}</td>
      <td>Quantinuum</td>
      <td>2023/06</td>
      <td>x</td>
      <td></td>
      <td></td>
      <td></td>
      <td>H1-1</td>
      <td>Trapped-ions</td>
      <td></td>
      <td>19</td>
      <td>protocol {% cite baldwin2022re %}</td>
    </tr>
    <tr>
      <td>{% cite quantinuum2024qv %}</td>
      <td>Quantinuum</td>
      <td>2023/10</td>
      <td>x</td>
      <td></td>
      <td></td>
      <td></td>
      <td>H1-2</td>
      <td>Trapped-ions</td>
      <td></td>
      <td>15</td>
      <td>protocol {% cite baldwin2022re %}</td>
    </tr>
    <tr>
      <td>{% cite quantinuum2024qv %}</td>
      <td>Quantinuum</td>
      <td>2024/04</td>
      <td>x</td>
      <td></td>
      <td></td>
      <td></td>
      <td>H1-1</td>
      <td>Trapped-ions</td>
      <td></td>
      <td>20</td>
      <td>protocol {% cite baldwin2022re %}</td>
    </tr>
    <tr>
      <td>{% cite quantinuum2024qv %}</td>
      <td>Quantinuum</td>
      <td>2024/05</td>
      <td>x</td>
      <td></td>
      <td></td>
      <td></td>
      <td>H2-1</td>
      <td>Trapped-ions</td>
      <td></td>
      <td>18</td>
      <td>protocol {% cite baldwin2022re %}</td>
    </tr>
  </tbody>
</table>


<script type="text/javascript">
  $(document).ready(function() {
  $('#my_table').DataTable(
    {
      "pageLength": 100
    } 
  );});
</script>

# Quantum Volume protocol

The Quantum Volume (QV) {% cite bishop2017quantum cross2019validating %} is a benchmarking protocol used to measure the ability of circuit-based quantum computers to simulate quantum circuits. This protocol gathers in a single metric number, the maximum width and depth that a quantum computer can successfully implement. A quantum computer has to sucessfully solve the <a href="{{ hog.url | prepend: site.baseurl }}" target="_blank">Heavy Output Generation (HOG) problem  {% cite aaronson2016complexity %} of size $$n$$ to validate a quantum volume of size $$2^n$$.  

Receipe for a Quantum Volume Experiment:
- Choose a number $$n$$ as the width of the circuit (i.e., number of qubits in the circuit).
- Set $$n=d$$ with $$d$$ the number of layers of the quantum circuit.
- Generate a model circuit composed of $$d$$ layers. Each layer is composed of a random permutation of qubits $$\pi$$ and a random unitary sampled from $$SU(4)$$. 

<!-- Add a scheme of the random quantum circuit -->

This circuit is then used as input for the sampling task associated to the Heavy Output Generation (HOG) problem. If the quantum computer is able to sample the right distribution, it validates the associated quantum volume score of $$2^n$$.

## Assumptions
* The circuit compiler may use all the possible tricks to improve the mapping of the quantum circuit, which can lead to possibly high extra-processing time.
* The Quantum computer should make an honest attempt to solve the HOG problem and not choose an implementation that is far from the initial model of circuit (i.e., the approximation error should be limited).

## Elements of the quantum stack being benchmarked
* Gate fidelity
* Coherence time
* Chip topology
* Efficiency of the transpilation method

## Protocol complexity
The complexity of the HOG problem is exponential either in time or space for a classical computer. For further details on the complexity the reader may refer to {% cite aaronson2016complexity %}.

## References
{% bibliography --cited %}