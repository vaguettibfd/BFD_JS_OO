// comando que importa as funcoes somar() e subtrair() para serem reutilizadas
const calculadora = require('./biblioteca/definemodulo.js');
var  x = 10, y = 30;
console.log(calculadora.soma(x,y));
console.log(calculadora.subtrair(y,x));
//console.log(calculadora.dividir(x,y));
//console.log(calculadora.multiplicar(x,y));