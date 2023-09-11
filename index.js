














/*
aula 11/09

A  interpretacao de codigo

1-

a- imprime o nome da pessoa e sua idade, se a idade for igual ou mais que 18, ira
 imprimir uma mensagem dizendo que essa pessoa pode dirigir, se nao, ira imprimir uma
  mesnagem dizendo que essa pessoa nao pode drigir 

b- a mensagem 'alice pode dirigir' sera impresa quando a idade da tal for 
igual ou maior que 18, ja a mensagem 'alice naom pode dirigir' sera impressa caso a 
idade seja menos que 18

2-

a- informar que o leão é carnivoro

b- 'leão é um animal carnivoro' 'leão não é um animal carnivoro'

3-

a- diz se o numero digitado é maior ou menor que o numero da variavel, 
ja o outro diz se o numero é par ou impar

b- 'o numero é maior que 10' 'o numero é menor que 10'  
 'o numero 5 é impar' 'o numero 10 é par'
*/
// exercicio de escrita de código:
//exercicio 1
/*
function suaIdade(idade){
  if (idade >= 18){
    return("você é maior de idade")
  }else{
    return("voce é menor de idade")
  }
}
let idadeUsuario = (Number(prompt('qual é a sua idade?')))
console.log(suaIdade(idadeUsuario));
*/

//exercicio 2
/*
function escola (turno){



    if (turno === 'M' ) {

        return 'bom dia'

    
}
 else if (turno === 'T' ){

    return 'boa tarde'


}
else if (turno === 'N'){

    return 'boa noite'

}

else {

return 'turno nao reconhecido'

}

}
let turnoFornecido = (prompt('qual seu turno de escola'));

console.log(escola(turnoFornecido));
*/

// exercicio 3
/*
let turno = prompt('qual turno você estuda?');
switch (turno){
 case 'M':
    console.log('bom dia')
    break
      case 'T':
        console.log('boa tarde')
        break
          case 'N':
            console.log('boa noite')
            break
            default:
              console.log('nao estuda')
}
*/
// exercicio 4
/*
let aluno  = {

  nome: (prompt('qual seu nome')),
  
  idade: Number(prompt('qual sua idade')),

  tipodecurso: Boolean(prompt('voce faz algum curso (true/false): ')),

  tembolsa: Boolean(prompt('voce tem bolsa'))

}

function candidatar (aluno){

  if (aluno.idade < 30){
      if (aluno.tipodecurso === true ){
              if (aluno.tembolsa === false){

        }
       }

       return 'voce esta apto para candidato'

  }
else {

return 'voce naom esta apto para se canditatar'


}


} 

console.log(candidatar (aluno));
*/
// exercicio 5
/*
let compra = {
  nome: 'meia',

  preço: 2.50,

  desconto: 2,

  fretegratis: false

}

function preçofinal (produto){
  let preçoComDesconto = (produto.preço - ((produto.preço * produto.desconto) / 100));
if(produto.fretegratis){
  if(produto.desconto , 0){
  return preçoComDesconto = ('preço final: ' + preçoComDesconto + ', frete gratis');
}else{
  if (desconto > 1){
    return preçoComDesconto + 'sem frete'
  }
    }
    
  }
}
console.log(preçofinal(compra));
*/
