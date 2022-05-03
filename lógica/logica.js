let num1 = 12;
let num2 = 21 + num1;
let num3 = 33 * 12;

console.log(num2, num3);


//============================//
function salario(Salario1,Abono1){
    let se = Salario1 + Abono1;
    return se 
}

console.log('O novo salário será: R$'+ salario(600,60))

function salario2(Salario2, Abono2){
    let sal = Salario2 + Abono2;
    return sal
}

console.log('Seu novo salário é: R$'+ salario2(350, 35))

//==========================//

function reajuste(){
    let nome = "José";
    let salatual = 1200;
    let salnovo = 1200 + 180;// 1200 * 0.15, "Aumento de 15%, que seria  1200 vezes 0,15" que daria 180, então você fará 1200 + 180
    return salnovo
}

console.log(`Reajuste do salário é de R$`+ reajuste())


//=========================//

function bala(){
    let num = 1000;

    if(num === 100){
        let num = +100
        return num
    }else {
        let num = -100
        return num
    }
}

console.log(bala())

//==========//

function parimp(){
    let numero = 1806

    if(numero % 2 === 0){
        let p = `Esse número ${numero} é par ` 
        return p
    }else {
        let i = `Esse número ${numero} é ímpar`
        return i
    }
}

console.log(parimp())

//================================//

function retornador(){
    let N = 98;

    if(N >= 100){
        return `${N} é maior que 100`
    }else {
        return 0
    }
}
console.log(retornador())

//===============================//