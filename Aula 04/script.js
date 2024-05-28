var numero = parseInt(prompt("Insira um número:"));

while (numero < 0){
    alert ("Apenas números inteiros e positivos são aceitos");
    numero = parseInt(prompt("Insira um número inteiro e positivo:"));
}

const calculoFatorial = (numero) => {
    var fatorial = numero;
    var resultado = fatorial;
    var primeiroMultipicador = fatorial - 1;
    for (var i = primeiroMultipicador; i > 1; i--) {
        resultado *= i;
    }
     
    return resultado;
}

const calculoFibonacci = (numero) => {
    if (numero == 0) return [];
    if (numero == 1) return [1];
    var fibonacci = [1, 1];
    for (var i = 2; i < numero; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    };
    return fibonacci;
};

console.log(`O fatorial de ${numero} é: ${calculoFatorial(numero)}`);
console.log(`A sequência de Fibonacci de ${numero} é: ${calculoFibonacci(numero).join('-')}`);