// function adicionarNome(nome){
//     return nome + "oi";
// }

// const adicionarNome = (nome) => nome + "oi";

// const soDeusSabe = (s, w, x) => {
//     console.log(s)
//     return (s + w) * (x - s)
// }


const soma = (a, b) => a + b;

const calculadora = (conta, a, b) => conta(a, b)

const subtrai = (a, b) => a - b;

console.log(calculadora(subtrai, 5, 4));