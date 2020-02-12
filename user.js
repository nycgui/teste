const user = {
    nome: "me",
    idade:18,
    sexo: "", 
}
const adicionarNome = (name) => user.nome = name;
console.log(adicionarNome('eu'))
console.log(user.nome);
module.exports = user