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

function sal(){
    let salbase = 1700;
    let gratif = 300;
    let salbruto = salbase + gratif;
    if(salbruto < 1000 ){
        let IF = salbruto * (15/100);
        return IF
    } else {
        let IR = salbruto * (20/100);
        let ar = 2000 - 400;
        return ar;
    } 

}

console.log(sal())

//=================================//



//========================================///

function salde(){
    let salabruto = 100;
    let salliqui = 100;
    if(salliqui >= 100){
        return true
    }else {
        return false
    }
}


function tosemnome(){
    let sallae = 200;
    let irfdp = 10;
    let liquido = sallae - irfdp;
    if(liquido < 190){
        return true
    }else {
        return false
    }
}

function naoaguentomais(){
    let salfunc = 300;
    let irdnv = 15;
    let liquidifica = 285
    if(liquidifica == salfunc - irdnv){
        return true
    }else {
        return false
    }
}

console.log(salde(), tosemnome(), naoaguentomais())



function ler(){
    let salariobase = 4000;
    let gratificacao = 250;
    let salariobruto = salariobase + gratificacao;
    if(salariobruto < 1000){
        let impostoderenda = salariobruto * (15/100)
        let salatioliquido = salariobruto - impostoderenda;
        return salatioliquido
    }else {
        let impostoderenda = salariobruto * (20/100)
        let salatioliquido = salariobruto - impostoderenda;
        return salatioliquido
    }   
}

console.log(ler())

function media(){
    let nota = 6;
    if(nota >= 5){
        if(nota >= 7){
            return 'aluno aprovado'
        }else{
            return 'precisa fazer outra avaliação'
        }
    }else{
        return 'aluno reprovado'
    }
}

console.log(media())

function pescador(){
    let peso = 300;
    if(peso > 50){
        let e = peso;
        let m = `Você excedeu o peso minínimo de 50kg, ${e}, terá que pagar uma multa R$4,00`
        return m
    }else{
        let a = `Você não excedeu o peso, até mais`
        return a
    }
}

console.log(pescador())


function trabalho(){
    let codigodotrabalhador = 006;
    let horastrabalhadas = 100;
    let precohora = 10;
    if(horastrabalhadas > 50){
        let salario = (horastrabalhadas - 50) * precohora
        let excedente = (horastrabalhadas - 50) * (precohora * 2);
        return salario, excedente
    }else {
        return 0
    }
}
console.log(trabalho())


//==================================================//



function numeros(){
    let a = 20 ** 2
    let b = 120 ** 2
    let c = 50 ** 2
    let d = 70 ** 2
    if (c >= 1000){
        return 'Finalizado'
    } else {
        return a, b, c, d
    }
}
console.log(numeros())

const ator = () => {
    let aa = 21
    if(aa % 2 === 0){
        return 'Par'
    }else {
        return 'Ímpar'
    }
}
console.log(ator())

//=====================================//

function intimar(){
    let poluicao = 0.2;
    if(poluicao === 0.5){
        return 'Todas as atividades serão suspensas'
    }else if(poluicao === 0.3){
        return 'Apenas o primeiro grupo será intimado'
    }if(poluicao === 0.4){
        return 'O primeiro e segundo grupo será intimado'
    }if(poluicao <= 0.2){
        return 'Tudo certo por aqui'
    }
}
console.log(intimar())

//==============================================//



for(let c = 1; c <= 200; c++){
    if(c % 2 === 1){
        console.log(c)
    }
}

