function ConverterEmReal() { 
    const valorDoElemento = document.getElementById("valor");  // pegando o valor do elemento no HTML
    const valor = valorDoElemento.value;                       // pegando o valor digitado no input
    const valorEmDolarNumerico = parseFloat(valor);            // transformando o valor que esta no input no tipo parseFloat para um valor decimal

    const valorEmReal = valorEmDolarNumerico * 5;             // multiplicando o valor digitado em real pelo valor do dolar
    
    const elementoValorConvertido = document.getElementById("valorConvertido"); // pegando o elemento no HTML
    console.log(valorEmReal);

    const valorConvertido = "O resultado em reais é R$: " + valorEmReal;        // concatenando o valor convertido
    elementoValorConvertido.innerHTML = valorConvertido;                       // colocando o valor convertido no elemento
}

function ConverterEmDolar() { 
    const valorDoElemento = document.getElementById("valor");  // pegando o valor do elemento no HTML
    const valor = valorDoElemento.value;                  // pegando o valor digitado no input
    const valorEmRealNumerico = parseFloat(valor);            // transformando o valor que esta no input no tipo parseFloat para um valor decimal 

    const valorEmDolar = valorEmRealNumerico / 5;             // multiplicando o valor digitado em dolar pelo valor do Real
    
    
    const elementoValorConvertido = document.getElementById("valorConvertidoEmDolar"); // pegando o elemento no HTML
    console.log(valorEmDolar);

    const valorConvertidoEmDolar = "O resultado em dolar é U$: " + valorEmDolar;        // concatenando o valor convertido
    elementoValorConvertido.innerHTML = valorConvertidoEmDolar;                       // colocando o valor convertido no elemento
}
