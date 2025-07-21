---
title: Factorization Applications
description: >
  Recaps the different factorization applications that have be proposed in the Litterature
---

# Factorization

Modern cryptography is mainly based on hard computational problem. For instance, the security of the widely used RSA cryptosystem {% cite rivest1978method %} relies on the difficulty of factorizing big numbers.

## RSA

The encryption/decryption process of RSA is described in the following picture:
<div class="center">
  <img src="/img/application-level-benchmark/RSA_cryptosystem.png" class="img-large" alt="Scheme describing the RSA cryptosystem. Alice generates the public and private keys. Bob uses Alice's public key to cipher the message. The ciphered message is sent to Alice, who is able to decipher it with her private key."/> 
</div>
where $$p$$ and $$q$$ are big prime numbers, $$e$$ can be choosen arbitrarily (often, $$e = 65537 = 2^{16} + 1$$) as long as $$e$$ is coprime to $$(p-1)(q-1)$$. There are other important criterions to choose $$p$$, $$q$$ and $$e$$ for RSA security {% cite chen2023dss %}, but it is not the main subjet here.
The secret key $$d$$ is computed such that:

$$ ed \equiv 1 \mod (p-1)(q-1) $$

which is easy when $$p$$ and $$q$$ are known. Therefore, RSA security is based on the two following assumptions : 
- Deciphering the message $$m$$ from $$c$$ knowing the public key ($$n$$, $$e$$) is hard.
- Factoring the modulus $$n$$ to recover its prime factors is hard.

## Factorization results

**List of acronyms:**  
**FER**: Factorization Equation Reduction  
**NE**: Not Explicited (so it is deduced by the contributor)  

{% include tables/factorization-table.html %}
<script type="text/javascript">
    $(document).ready(function() {
      $('.factorization-table').DataTable(
        {
          "pageLength": 10,
          "drawCallback": function(settings){ 
            MathJax.Hub.Queue(["Typeset", MathJax.Hub]); 
          }
        } 
      );
    });
</script>



## References

{% bibliography --cited %}
