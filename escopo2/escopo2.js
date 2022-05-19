function paramsLocais(local1, local2){
    console.log(local1, local2);
}

paramsLocais('Sou o seu local 1', 'Sou o seu local 2');

//Outra situação são as funções aninhadas

let nivelGlobal = 'Nivel global';
let nivel1 = undefined, nivel2 = undefined, nivel3 = undefined;

function funcaoNivel1(){
    let nivel1 = "Nível 1";

    function funcaoNivel2(){
        let nivel2 = "Nível 2";

        function funcaoNivel3() {
            let nivel3 = "Nível 3"
            console.log(`\nFunção nivel 3 resultados: \n${nivelGlobal} \n${nivel1} \n${nivel2} \n${nivel3}`)
        } 
        funcaoNivel3()

        console.log(`\nFunção nivel 2 resultados: \n${nivelGlobal} \n${nivel1} \n${nivel2 ? nivel2: 'nivel2 inacessível'} \n${nivel3 ? nivel3: 'nivel3 inacessível'}`)
    }
    funcaoNivel2()
    console.log(`\nFunção nivel 1 resultados: \n${nivelGlobal} \n${nivel1} \n${nivel2 ? nivel2: 'nivel2 inacessível'} \n${nivel3 ? nivel3: 'nivel3 inacessível'}`)
}

funcaoNivel1()