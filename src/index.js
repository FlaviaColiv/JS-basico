// window.alert("Olá Mundo!")
// window.confirm("Quer continuar?")
// window.prompt("Digite sua idade.")

// var nomePessoa = "Flávia";
// console.log(nomePessoa)

// const emailPessoa = "flaviacoliv@hotmail.com"
// console.log(emailPessoa)

// let telefonePessoa = "71983628135"
// console.log(telefonePessoa)

// let idade = prompt("Digite sua idade")

// console.log(idade)
/////////////////////////////////////////////
// let nome = "Flávia";
// let numero = 0.6666666666
// let usuarioVerificado = true
// if(usuarioVerificado){
//   console.log("Usuário Verificado.")
// }else{
//   console.log("Usuário Não é Verificado.")
// }
////////////////////////////////////////////
// let pessoa = null;

// console.log("A cada tarefa feita, sabe-se mais sobre a pureza da alma. Porém surge a dúvida: ''E quando a alma não é mais pura? Se essa pureza não foi retirado por escolha, mas por imposição em uma época que a capacidade de decição era bem remota e fraca, por haver pouco desenvolvimento da alma e da própria vidaa, por ter pouca idade e pouquíssimo tempo de desenvolvimento?''");

// console.log("A Resposta está na escolha, de quando se tomou consciência sobre a possibilidade daquele ato e escolha ser um fator de impureza da alma, parar imediatamente, se perdoar, e nunca mais repetir aquela atitute, aquele ato. Escolher fazer diferente do que foi inflenciado até então, e fazer a NOVA vida de acordo ao que traz de volta pureza da alma, que nunca foi perdida, só sofreu sujicidade e não sua extinção. Com as escolhas certas, recupera-se aquela pureza que estava escondida.") 
/////////////////////////////////////////////////

// OPERADORES LÓGICOS

// const a = 3
// const b = 3
// const c = 1

// console.log(a==b)
// console.log(a!=b)
// console.log(c < b)
// console.log(b <= a)

// console.log(a !== b && c < a)
// console.log(a != b || c > a)
// console.log(!(a != b))

//OPERADORES MATEMÁTICOS

// let primeiroValor = 11
// let segundoValor = 2

// console.log(primeiroValor + segundoValor)
// console.log(primeiroValor - segundoValor)
// console.log(primeiroValor / segundoValor)
// console.log(primeiroValor * segundoValor)
// console.log(primeiroValor % segundoValor)

// LAÇOS

// for(let i = 0; i <= 5; i++) {
//   console.log("Olá!")
// }

// let d = 10
// let e = 15

// while (d < e) {
//   console.log('incrementando a variável d ' + d)
//   d++;
// }

// var f = 1

// do{
//   console.log('entrou ' + f)
//   f++
// }while(f <= 5)

/////////////////////////////////////////////////////////
// CONDICIONAIS

// let nomeFilme = 'IT'

// // if(nomeFilme === 'Vingadores'){
// //   console.log('É o filme dos Vingadores')
// // }else if(nomeFilme == 'IT'){
// //   console.log('É o filme do IT')
// // }else{
// //   console.log('É outro filme.')
// // }

// nomeFilme == 'IT' ? console.log('É o filme do IT') : console.log('É outro filme.')

// switch (nomeFilme) {
//   case 'Vingadores':
//     console.log('È o filme Vingadores')
//     break;
//   default:
//     console.log('É outro filme.')
//     break;
// }

// let avaliacao = 1

// switch(avaliacao){

// }

///////////////////////////////////////////////////////
//FUNÇÕES

// function primeiroNome(nomeIncentivo = 'Aprendiz'){
//   alert('Muito bem ' + nomeIncentivo + ', você chegou ao JS, continue assim! ')
// }

// primeiroNome('Flávia')

// function soma(numero1, numero2){
//   return numero1 + numero2
// }

// let resultadoSoma = soma(1, 2)
// console.log(resultadoSoma)
/*
function calcularFatorial(numero) {
  let resultado = 1;

  for(let i = 1; i <= numero; i++) {
    resultado *= i;
  }

  return resultado;
}

function imprimirFatorial(numero) {
  const fatorial = calcularFatorial(numero);
  console.log(`O fatorial de ${numero} é ${fatorial}`);
}

const numero = 3;
imprimirFatorial(numero); */