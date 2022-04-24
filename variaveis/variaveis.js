//Declarando Variaveis

let minhavariavel; //undefined

minhavariavel = 'olá' // A variavel foi reatribuida

console.log(minhavariavel);

//Var = escopo de função
//Let e const = escopo de bloco


var global = "Sou uma var global"

function somar() {
    const local = "Sou uma var local";
    console.log(local);
    console.log(global);
}

somar()


