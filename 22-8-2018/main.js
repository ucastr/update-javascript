//dia 1 testes

/*VARIÁVEIS*/

var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello World!';


//bloco de teste
var myVar;
myvar= 'bob';
myvar;
"bob"

//array
myvar= [1,'bob','steve',10];
myvar;
(4) [1, "bob", "steve", 10]
//print de posição no array
myvar[2]
"steve"
myvar[0];
1

/*OPERADORES*/

//Operador de identificação
//Faz um teste para ver se dois valores são iguais um ao outro, retornando um resultado true/false (boolean).
// ===
var myVariable = 3;
myVariable === 4;

//Negação (!), não igual (!==)
//Se a expressão é true, então a comparação retorna false porque ela foi negada:
var myVariable = 3;
!(myVariable === 3);

//Aqui nós estamos testando "myVariable não é igual a 3". Isso retorna false, porque myVariable é igual a 3.
var myVariable = 3;
myVariable !== 3;


/*CONDICIONAIS*/
//if else

var icecream = 'chocolate';

if (icecream === 'chocolate'){
    alert('I Love chocolate icecream');
} else {
    alert('Aww, but chocolate is my favorite...');
}

/* FUNÇOES */
// .querySelector(); é a função aplicada ao documento, h1 é o ARGUMENTO, objecto. Os argumentos são colocados dentro dos parênteses e separados por vírgulas, se houver mais de um
// alert(); tb é uma função da libraria javascript
var myVariable = document.querySelector('h1');
alert('hello');

//FUNÇÕES COSTUMIZADAS
//funçao recebe 2 num como argumento e procede à sua multiplicaçãoptimize
function multiply(num1,num2){
  var result = num1 * num2;
  return result;
}
//O comando return diz ao navegador para retornar a variável result da função para que ela esteja disponível para uso

//depois da função definida, podemos chamala com novos argumentos (num1 e num2)
multiply(4,7);
multiply(0.5,3);

//teste na consola
function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}
12:16:17.012 undefined
12:16:22.499 multiply(4,7);
12:16:22.507 28
12:16:29.554 multiply(2,2);
12:16:29.563 4

/*EVENTOS*/
//CLICK EVENT alert
document.querySelector('html').onclick =function(){
  alert('OUCH! Stop clicking me!');
}

//Há muitas maneiras de associar um evento a um elemento, aqui estamos a selecionar o elemento HTML e fazendo sua propriedade onclick igual a uma função anonima que contem o código que queremos rodar qd clicar

//tb podemos fazer ((associar evento a uma var)definir uma var corresponder ao elemento e de seguida o evento à var...)
var myHtml = document.querySelector('html');
myHtml.onclick = function(){

}


//lição de amanhã  (pasta já tem os ficheiro de trabalho)-> https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/JavaScript_basico#Dando_uma_melhorada_no_seu_site_de_exemplo
/*Dando uma melhorada no seu site de exemplo*/
