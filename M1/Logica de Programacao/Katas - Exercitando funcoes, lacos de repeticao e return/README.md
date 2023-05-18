# Entrega: SnapCrackle #


- Escreva uma função chamada __snapCrackle__ que leva um parâmetro: __maxValue__.
- Esta função deve fazer um loop de 1 até __maxValue__ (inclusive) e montar uma __string__ com as seguintes condições para cada número:
    1. Se o número for ímpar, no lugar dele, concatenar __"Snap"__ no final da string.
    2. Se o número for múltiplo de 5, no lugar dele, concatenar __"Crackle"__ no final da string.
    3. Se o número for tanto ímpar quanto múltiplo de 5, no lugar dele, concatenar __"SnapCrackle"__ no final da string.
    4. Se número não for nem ímpar nem múltiplo de 5, concatenar o próprio número no final da string.
    5. Seus itens devem ser separados sempre por __vírgula e espaço__ (veja o exemplo).
    6. Esta função deve __retornar__ a __string__ obtida.

## Exemplo

__snapCrackle(12)__ deve __retornar__ a string: 

__Snap, 2, Snap, 4, SnapCrackle, 6, Snap, 8, Snap, Crackle, Snap, 12__

<img src="https://files-kenzie-academy-brasil.s3.amazonaws.com/q1/spritn1/snapCrackle.gif" width="100%">

## Bônus
### Avançando...

Escreva uma segunda função chamada __snapCracklePrime__ que também recebe um parâmetro __maxValue__ com 1 regra adicional: 

Se o número for primo, no lugar dele, concatenar __"Prime"__ no final da string

__snapCracklePrime(15)__ deve __retornar__ a string:

__Snap, Prime, SnapPrime, 4, SnapCracklePrime, 6, SnapPrime, 8, Snap, Crackle, SnapPrime, 12, SnapPrime, 14, SnapCrackle__

<img src="https://files-kenzie-academy-brasil.s3.amazonaws.com/q1/spritn1/snapCracklePrime.gif" width="100%">

## Envio

Faça o push do código para o seu repositório GitHub e implemente-o GitHub pages. No Canvas, por favor, envie sua url do GitHub Pages: (ex: https://nomerandomico.github.io/snapcrackle) e envie o link do seu repositório nos comentários. Seu projeto deverá ficar como internal.
