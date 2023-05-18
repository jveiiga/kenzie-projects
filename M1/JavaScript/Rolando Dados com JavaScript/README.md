# Entrega: Rolando os Dados

Para começar, faça o clone desse repositório.

**O objetivo desta atividade é simular a rolagem de dois dados várias vezes, anotar a frequencia de cada resultado e depois fazer o display dessas frequencias obtidas.**

Ao rolar dois dados de seis faces, cada dado irá mostrar um número entre 1 e 6. Quando estes números nos dois dados forem somados, o resultado será um número entre 2 e 12. **Multiplicar o resultado por 2 não é o mesmo que rolar dois dados**

Use JavaScript para simular 1000 lançamentos de um par de dados. *Você precisará descobrir como gerar números aleatórios no JavaScript, use suas habilidades de busca no Google!*

Para cada possível lançamento, conte a frequência. Você deve usar um array para registrar essas contagens.

Inicialize um array chamado *`count`* preenchendo-o com zeros. Em seguida, sempre que uma rolagem de dados resultar em, digamos, sete, adicione um ao valor do 7º elemento do array de contagem.

Por exemplo, se a variável rollOfDice contiver a rolagem atual, você pode incrementar a contagem com um código assim:

```js
count[rollOfDice] = count[rollOfDice] + 1;
```

Depois que as 1000 rolagens terminarem, mostre o resultado delas em uma página HTML.

__IMPORTANTE__: O layout deve ser implementado utilizando o conceito de __Mobile First__, ou seja, deve estar responsivo.

Aqui está um exemplo do tipo de resultado que seu programa pode produzir:

```
2: 32  
3: 50  
4: 76  
5: 120  
6: 151  
7: 161  
8: 125  
9: 121  
10: 89  
11: 52  
12: 23
```

## Formato de saída
Além do resultado numérico descrito acima, mostre os resultados finais em forma de uma barra gráfica (usando um DIV para cada barra, e variando as dimensões proporcionalmente aos resultados).

### Dica
Como estamos falando de tamanhos específicos, usar classes de CSS não seria o mais apropriado, mas sim configurar o tamanho em pixels da altura ou largura de cada barra representando cada valor.

Para isso podemos usar a propriedade style para configurar a altura ou largura individual de cada barra. E podemos fazer isso dinamicamente usando o DOM no JavaScript da seguinte forma:

```javascript
minhaBarra.style.width = `${larguraDaBarra}px`;
```

onde minhaBarra é a variável contendo o DOM element da div e larguraDaBarra é a variável contendo o valor a ser aplicado.

## Envio

Faça o push do código para o seu repositório GitHub e implemente-o GitHub pages. No Canvas, por favor, envie sua url do GitHub Pages: (ex: https://nomedeusuario.github.io/s_rolling-dice) e envie o link do seu repositório nos comentários. Após ser a correção, seu projeto deverá ficar privado.

