function ConverterEmReal() { 
    const valorDoElemento = document.getElementById("valor");  // pegando o valor do elemento no HTML
    const valor = valorDoElemento.value;                       // pegando o valor digitado no input
    const valorEmDolarNumerico = parseFloat(valor);            // transformando o valor que esta no input no tipo parseFloat para um valor decimal

    const valorEmReal = valorEmDolarNumerico * 5;             // multiplicando o valor em dolar para real
    
    const elementoValorConvertido = document.getElementById("valorConvertidoEmReal"); // pegando o elemento no HTML
    console.log(valorEmReal);

    const valorConvertido = "O resultado em reais é R$: " + valorEmReal;        // concatenando o valor convertido
    elementoValorConvertido.innerHTML = valorConvertido;                       // colocando o valor convertido no elemento
}

function ConverterEmDolar() { 
    const valorDoElemento = document.getElementById("valor");  // pegando o valor do elemento no HTML
    const valor = valorDoElemento.value;                  // pegando o valor digitado no input
    const valorEmRealNumerico = parseFloat(valor);            // transformando o valor que esta no input no tipo parseFloat para um valor decimal 

    const valorEmDolar = valorEmRealNumerico / 5;             // dividindo o valor digitado em real para dolar
    
    
    const elementoValorConvertido = document.getElementById("valorConvertidoEmDolar"); // pegando o elemento no HTML
    console.log(valorEmDolar);

    const valorConvertidoEmDolar = "O resultado em dolar é U$: " + valorEmDolar;        // concatenando o valor convertido
    elementoValorConvertido.innerHTML = valorConvertidoEmDolar;                       // colocando o valor convertido no elemento
}

function ConverterEmLibraEstrelina() {
    const valorDoElemento = document.getElementById("valor");  // pegando o valor do elemento no HTML
    const valor = valorDoElemento.value;                  // pegando o valor digitado no input
    const valorEmRealNumerico = parseFloat(valor);            // transformando o valor que esta no input no tipo parseFloat para um valor decimal 

    const valorEmLibraEstrelina = valorEmRealNumerico * 0.15169;             // dividindo o valor digitado em real para libra estrelina
    
    
    const elementoValorConvertido = document.getElementById("valorConvertidoEmLibra"); // pegando o elemento no HTML
    console.log(valorEmLibraEstrelina);

    const valorConvertidoEmLibraEstrelina = "O resultado em libra estrelina é £:" + valorEmLibraEstrelina;        // concatenando o valor convertido
    elementoValorConvertido.innerHTML = valorConvertidoEmLibraEstrelina;                       // colocando o valor convertido no elemento
}

function ConverterEmMoedaTailandesa() {
    const valorDoElemento = document.getElementById("valor");  // pegando o valor do elemento no HTML
    const valor = valorDoElemento.value;                  // pegando o valor digitado no input
    const valorEmRealNumerico = parseFloat(valor);            // transformando o valor que esta no input no tipo parseFloat para um valor decimal 

    const valorEmMoedaTailandesa = valorEmRealNumerico * 6.59687;             // dividindo o valor digitado em real para moeda tailandesa
    
    
    const elementoValorConvertido = document.getElementById("valorConvertidoEmTailandesa"); // pegando o elemento no HTML
    console.log(valorEmMoedaTailandesa);

    const valorConvertidoEmMoedaTailandesa = "O resultado em moeda tailandesa é " + valorEmMoedaTailandesa;        // concatenando o valor convertido
    elementoValorConvertido.innerHTML = valorConvertidoEmMoedaTailandesa;                       // colocando o valor convertido no elemento
}