// variaveis >>> var nome;
// funcoes >>> function NomeAluno(){}


function Contador(){
    // criar uma verificação de se o número digitado é par ou impar \\

    let ImparPar;
    
    // se for impar então vamos apresentar na tela odos os números impares de 1 até 50
    if(ImparPar % 2 == 1){
        console.log("Esse número é impar")
        for(numero; numero <= 50; numero++){
            if(numero & 2 === 1)
                console.log(numero)
        }


    }else if(ImparPar % 2 == 0){
        console.log('esse número é par')
        for(numero; numero <= 50; numero++){
            if(numero % 2 == 0){
                console.log(numero)
            }
        }

    
    }

    //Senão ( se for par ) vamos apresentar na tela todos os números paraes de 1 até 50
    
}

console.log(Contador())

console.clear()

// arrow function

let BoasVindas = () => {
    return 'Welcome Sofrendo com JS/Com TCC'
}

console.log(BoasVindas())

let Some = (num1, num2) => {
    return num1 + num2;
}

console.log(Soma(7,5))

console.clear()

function Clique(){
    let cliques = 0;

    return cliques++
}

console.log(Clique())