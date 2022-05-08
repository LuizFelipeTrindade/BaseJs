//Formas de Inicializar um objeto


//new Object();

//Object.create();

//const ObjectLiteral = {};

const dotNotation = {
    prop1 : "Sou uma propriedade",
    metodo: function(){
        return 'Sou um retorno bitch'
    }
}

console.log(dotNotation.metodo())
console.log(dotNotation.prop1)


//Atribuindo com Dotnotation

dotNotation.prop2 = "Sou uma fuck linda"
dotNotation.metodo2 = () => {
    return 'Sou uma vagabunda'
}

console.log(dotNotation.prop2) //Atribui na constante um novo método
console.log(dotNotation.metodo2()) //Atribui na constante uma nova função


//==============================================//

    //===========BreakNotation(Notação de colchete)===========//

const brek = {
    propriedade1 : 'Pitú',
    metodoM : () => {
        return 'Sou eu ahhaudashduahdus'
    }
}

console.log(brek["propriedade1"], brek["metodoM"]()) // Dentro das chaves tem que ter as '' aspas simples ou "" duplas

brek['propriedade2'] = "Sou um CU"
brek['metodoMais'] = () => {
    return 'bunda'
}

console.log(brek['propriedade2'], brek['metodoMais']())