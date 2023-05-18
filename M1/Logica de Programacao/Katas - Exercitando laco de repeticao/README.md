Katas de JavaScript 1
=====================

<div>

Introdução
----------

Um [kata](https://en.wikipedia.org/wiki/Kata_(programming)) é um
exercício individual onde você pratica uma habilidade de programação
repetidamente. Hoje você irá praticar o uso de loops, condicionais, e
expressões JavaScript através de uma série de katas.

Preencha o código que está faltando em cada função dentro do arquivo
katas1.js. Use um loop for ou while dentro de cada função. Cada kata
completado corretamente vale 1 ponto.

</div>

------------------------------------------------------------------------

Tarefa
======

1.  oneThroughTwenty - Retornar os números de 1 a 20. (1, 2, 3,...,
    19, 20)
2.  evensToTwenty - Retornar os números pares de 1 a 20. (2, 4, 6,...,
    18, 20)
3.  oddsToTwenty - Retornar os números ímpares de 1 a 20. (1, 3, 5,...,
    17, 19)
4.  multiplesOfFive - Retornar os múltiplos de 5 até 100. (5, 10,
    15,..., 95, 100)
5.  squareNumbers - Retornar todos os números até 100 que forem
    quadrados perfeitos. (1, 4, 9, ..., 81, 100)
6.  countingBackwards - Retornar os números contando de trás para frente
    de 20 até 1. (20, 19, 18, ..., 2, 1)
7.  evenNumbersBackwards - Retornar os números pares de 20 até 1. (20,
    18, 16, ..., 4, 2)
8.  oddNumbersBackwards - Retornar os números ímpares de 20 até 1. (19,
    17, 15, ..., 3, 1)
9.  multiplesOfFiveBackwards - Retornar os múltiplos de 5 contando de
    trás para frente a partir de 100. (100, 95, 90, ..., 10, 5)
10. squareNumbersBackwards - Retornar os quadrados perfeitos contando de
    trás para frente a partir de 100. (100, 81, 64, ..., 4, 1)

::: {.section .hilightedContet .hilightedContet--tip}
**Dica!**

Para relembrar:

-   O que é um número primo? [Acesse este
    link](https://pt.wikipedia.org/wiki/N%C3%BAmero_primo)
-   Quando é um quadrado Perfeito? [Acesse este
    link](https://pt.wikipedia.org/wiki/N%C3%BAmero_quadrado)
:::

Passo a Passo
=============

### 1 - Preparando o repositorio

O index.html já vem pronto para ser utilizado e configurado. Vá
até o arquivo katas1.js e começe a preencher o que se pede de acordo com
as instruções acima.

### 2 - Alterando o código

Altere as funções para elas agirem conforme o que se pede na entrega,
para ajuda-lo aqui está alguns exemplos de como seguir

    function oneThroughFive() {
        // Escreva seu código aqui
    }

Para testar as funções, você precisa chamá-las. Para ver o que esta
função retorna no console, podemos chamar a função oneThroughFive()
dentro do console.log() que então o return mostrará os resultados.
Ficando da seguinte forma:

    function oneThroughFive() {

        let meuRetorno = [];

        for (let counter = 1; counter <= 5; counter++) {
            meurRetorno.push(counter)
        }

        return meuRetorno;
    }

    console.log(oneThroughFive());

Observe que a função acima **oneThroughFive** já está resolvida e
totalmente funcional!

::: {.section .hilightedContet .hilightedContet--warning}
**Aviso!**

Nesse katas iremos utilizar apenas estruturas de repetições como:

1.  while
2.  do while
3.  for

**Não será utilizado métodos de iteração de array como: forEach, map,
filter, reduce, sort entre outros. Não será utilizado bibliotecas
matemáticas como: Math min, Math max**
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

Para teste de mesa de **LOOP**, basta realizar **5 iterações**.
:::

### 4 --- Finalizando o projeto

Faça o push do código para o seu repositório GitHub e implemente-o
GitHub pages. No Canvas, por favor, envie sua url do GitHub Pages: (ex:
https://nomerandomico.github.io/katas-javascript-1) e envie o link do
seu repositório nos comentários. Seu projeto deverá ficar Internal.
:::
