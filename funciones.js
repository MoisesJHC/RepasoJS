function saludo(){
    console.log("Hola Mundo");
}
saludo();

function saludo2(){
    return 'Hola Mundo';

}
const result = saludo2();
console.log(saludo2());

function saludo3(){
      return function(){
        return 'Hola 3';
      }
}

console.log(saludo3());
console.log(saludo3()());

function hello3(name){
  return 'Hola' + name;
}

console.log(hello3('Luis'));
console.log(hello3());

//funcion va a dar nah por que los valores no
//estan indefinido

function agregar(x, y){
  return x + y;
}
console.log(agregar());
console.log(agregar(4,5));


//Parametors por default
function agregar2(x, y){
  if (y === undefiend){
      y = 0;
  }else if(x === undefined){
      x = 0;
  }else if(x === undefined && y == undefined){
      return 0;
  }
  return x + y;
}

function agregar3(x , y=1, z=2){
return x + y * z;
}

console.log(agregar3(5));

//Funciones de flecha
function sumar(){
return 3 + 4;
}
const suma = () => 3 + 4;


console.log(sumar());
console.log(suma());


function f1(x){
  return "Hola soy: " + x;

}

const f1a = x => "Hola soy: " + x;

console.log(f1("Gallardo"));
console.log(f1a("Mariano"));

function factorial(n){
  if(n==0 || n == 1 ){
      return 1;
  }else{
      return n * factorial(n-1);
  }
}

/*
const fac = n =>{
if(n==0 || n==1){
  return 1;
}else{
  return n * fac
}
}
*/

//Arraut fuction

function factorial2 (n){
  i = 1;
  fact = 1;
  while(i<=n){
      fact*=1;
      i++;
  }
  return fact;
}
const f = n => {
  i = 1;
  fact = 1;
  while(i <= n){
      fact*= i;
      i++;
  }
  return fact;
}
const valor = numero => (numero%2 == 0)?
'Numero Par':'Numero Impar'

console.log(factorial(3));
console.log(factorial2(3));
console.log(f(3));
console.log(valor(9));
