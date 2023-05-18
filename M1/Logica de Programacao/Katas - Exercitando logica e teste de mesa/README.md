Katas de JavaScript 2
=====================

<div>

Introdução
----------

Um [kata](https://en.wikipedia.org/wiki/Kata_(programming)) é um
exercício individual onde você pratica uma habilidade de programação
repetidamente. Hoje você irá praticar o uso de loops e funções
JavaScript. Iremos começar com funções fáceis e subiremos o grau de
dificuldade gradativamente

Tendo como objetivo acostumá-lo a escrever e chmar funções que recebem
**argumentos** e retornam **resultados** e a decompor um problema nas
diversas partes de um loop.

Usaremos a palavra-chave return para obter o resultado da função.
Diferentemente de outros katas que fizemos até agora, a maioria destes
vai sendo construído uns em cima dos outros, o que significa que **você
precisará completá-los em ordem**.

</div>

------------------------------------------------------------------------

Tarefa
======

### Soma (1 ponto)

### 

Escreva uma função chamada **\"add\"** que pega dois argumentos e
retorna a soma deles.

Você pode usar operadores incorporados para finalizar a definição.

Por exemplo, chamar **add(2, 4)** deve retornar um **resultado 6**.

### Multiplicação (2 ponto)

### 

Escreva uma função chamada **\"multiply\"** que pega dois argumentos e
retorna o seu produto.

Em vez de usar operadores mátematicos ou funções aritimeticas
incorporadas, você precisará de um loop for que chama a função
**\"add\"** criada anteriormente.

Por exemplo, chamar **multiply(6, 8)** deve retornar um **resultado
48**.

### Potência (2 pontos)

### 

Escreva uma função chamada **\"power\"** que pega dois argumentos (x e
n) e retorna o resultado de x elevado à potência n.

Em vez de usar operadores mátematicos ou funções aritimeticas
incorporadas, use outras funções que você escreveu em katas anteriores.

Outra palavra usada para potência é **\"exponenciação\"**. Por exemplo,
se nós chamarmos **power(2, 8)**, **retornaremos 256** ao multiplicar 2
por ele mesmo 8 vezes.

    2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 = 256

### Fatorial (2 pontos)

### 

Escreva uma função chamada **\"factorial\"** que pega um único argumento
e retorna o fatorial dele.

Em vez de usar operadores mátematicos ou funções aritimeticas
incorporadas, use outras funções que você escreveu em katas anteriores.

Por exemplo, chamar **factorial(4)** deve retornar um **resultado 24**.

### Bônus:

::: {.section .hilightedContet}
**Importante!**

Lembrando que a função Bônus a seguir é um pouco mais avançada que a
anterior e **Não é Obrigatória**
:::

### Fibonacci (3 pontos)

Escreva uma função chamada **\"fibonacci\"** que pega um argumento n e
retorna o enésimo número Fibonacci.

Em vez de usar operadores mátematicos ou funções aritimeticas
incorporadas, use outras funções que você escreveu em katas anteriores.

Por exemplo, chamar **fibonacci(7)** deve retornar o **resultado 13**.

    0 1 1 2 3 5 8 [13] 21

O número distacado entre colchetes é o oitavo número fibonacci

::: {.section .hilightedContet .hilightedContet--tip}
**Dica!**

A resposta para a maioria desses katas será similar. Ela envolverá
tipicamente:

-   a declaração de uma variável para manter o registro de um resultado
    final.
-   a escrita de um loop for para modificar o resultado
    consistentemente.
-   o retorno do resultado

Se você demorar mais de 5 minutos, **peça ajuda!** Este é um exercício
de raciocínio crítico, e não de tortura. Temos uma equipe de
**Facilitadores** e **Coaches** a sua disposição!

Para relembrar:

-   O que é exponenciação [Acesse este
    link](https://pt.wikipedia.org/wiki/Exponencia%C3%A7%C3%A3o)
-   O que é Fibonacci [Acesse este
    link](https://pt.wikipedia.org/wiki/Sequ%C3%AAncia_de_Fibonacci)
:::

Passo a Passo
=============

### 1 - Preparando o repositorio

O index.html já vem pronto para ser utilizado e configurado. Vá
até o arquivo katas2.js e começe a preencher o que se pede de acordo com
as instruções acima.

### 2 - Alterando o código

Altere as funções para elas agirem conforme o que se pede na entrega,
para ajuda-lo aqui está alguns exemplos de como seguir

    function bringMyName(firstname, lastname) {
        // Escreva seu código aqui
    }

Para testar as funções, você precisa chamá-las. Para ver o que esta
função retorna no console, podemos chamar a função bringMyName() dentro
do console.log() que então o return mostrará os resultados. Ficando da
seguinte forma:

    function bringMyName(firstname, lastname) {

        let fullname = firstname + " " + lastname

        return fullname
    }

    console.log(bringMyName("Davey","Strus"));

Observe que a função acima **bringMyName** já está resolvida e
totalmente funcional!

::: {.section .hilightedContet .hilightedContet--warning}
**Aviso!**

Nesse katas iremos utilizar apenas estruturas de repetições como:

1.  while
2.  do while
3.  for

Não será utilizado operadores matemáticos como: **Adição(+),
Subtração(-), Divisão(/)** e **Multiplicação(\*)** ou funções
aritméticas incorporadas como **Math min, Math max**. Única função que
foge da regra e está liberado o uso do operador matemático da **Adição**
é a **\"add\"**.

**Não será utilizado métodos de iteração de array como: forEach, map,
filter, reduce, sort entre outros.**
:::

### 3 --- Teste de mesa

Realize a montagem do teste de mesa para validar a lógica do seu
algorítimo, use esse recurso antes de recorrer a ajuda do suporte. Se
estiver com dúvidas em como utilizar a tabela, veja a aula de
**Aquecimento: Fazendo o Tracing Manual de Códigos** para entender os
passos. **O teste de mesa é obrigatório para a entrega**.

::: {.tableTest}
  -- -- -- --
           
           
           
           
           
  -- -- -- --
:::

::: {.section .hilightedContet .hilightedContet--warning}
**Aviso!**

Para teste de mesa de **LOOPS**, basta realizar **5 iterações**.
:::

### 4 --- Finalizando o projeto

Faça o push do código para o seu repositório GitHub e implemente-o
GitHub pages. No Canvas, por favor, envie sua url do GitHub Pages: (ex:
https://nomerandomico.github.io/katas-javascript-2) e envie o link do
seu repositório nos comentários. Seu projeto deverá ficar Internal.
:::
