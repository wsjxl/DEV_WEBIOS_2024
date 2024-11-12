let numeros = [17, 43, 8, 4, 97, 56, 29, 95];

numeros.forEach((numero) => {
   
    if (numero % 2 === 0) {
        console.log(`${numero} é par`);
    } else {
        console.log(`${numero} é ímpar`);
    }
});

