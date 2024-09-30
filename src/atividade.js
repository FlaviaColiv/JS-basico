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

