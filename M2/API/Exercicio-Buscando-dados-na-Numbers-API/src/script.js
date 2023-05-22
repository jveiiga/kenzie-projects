let notas = [5, 7, 10, 3, 9, 5, 5, 2, 1, 9, 8, 3, 4, 6, 7, 6, 7, 8, 10, 7, 1]
function adicionaNota(listaNotas, nota) {
    if (nota > 0 && nota <= 10) {
      listaNotas.push(nota);
    } else {
      return "Nota Invalida";
    }
    return listaNotas;
  }
  console.log(notas);
  console.log(adicionaNota(notas, 5));

  function adicionaNota(listaNotas, nota) {
    for (let i = 0; i < listaNotas.length; i++) {
      if (nota > 0 && nota <= 10) {
        listaNotas.push(nota);
      } else {
        return "Nota Invalida";
      }
    }
    return listaNotas
  }
  console.log(notas);
  console.log(adicionaNota(notas, 2));