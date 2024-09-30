// Solicitar nome do usuário

const nome = prompt("Por favor, digite seu nome:");

// Apresenta mensagem de boas-vindas
alert("Seja Bem-vindo(a), " + nome + "!");

const boletoPago = false;

if (boletoPago) {
    alert("O boleto está pago, " + nome + ".")
} else {
    alert("O boleto não está pago, " + nome + ".")
}
const querHospedagem = confirm("Seja bem-vindo(a), aventureiro(a) " + nome + "! Gostaria de pagar R$ 50,00 para passar a noite na nossa hospedagem?")

if (querHospedagem) {
    alert("Ótimo! Nós temos as melhores camas de toda a região!")
} else {
    alert("Que pena! Você parecia ser uma pessoa mais legal")
}

for (var i = 0; i <= 10; i++) {
    console.log("O número atual é o " + i);
    
}