//Promesas

const usuarioAutenticado = new Promise(
    (resolve, reject) => {
        const auth = true;
        console.log("Esperando respuesta");
        setTimeout(() =>{

            if(auth){
                resolve("Usuario Autenticado");
            }else{
                reject("No se pudo iniciar");
            }
        }, 5000);
    }
);

//console.log(usuarioAutenticado);

usuarioAutenticado
.then((resultado) => console.log(resultado))
.catch((error) => console.log(error))

/*
function cuadradopromesa(value){
    if(typeof value !== "number"){
        return Promise.reject("El error el valor ${value} no es un número");
    }

    return new Promise((resolve, reject)=>{
    
    setTimeout(() => {
        resolve({
            value:value,
            result: Math.pow(value,2)
    });
        }, 3000);
})
}
*/

const cuadradoPromesa = value=>{
    if(typeof value !== "number"){
        return Promise.reject("El error el valor ${value} no es un número");
    }

    return new Promise((resolve, reject)=>{
    
    setTimeout(() => {
        resolve({
            value:value,
            result: Math.pow(value,2)
    });
        }, 3000);
})
}

cuadradopromesa(6)

.then((respuesta) =>{
   console.log('Inicia Promesa');
   console.log(`Promesa: value: ${respuesta.value}
           cuadrado: ${respuesta.result}`
           );
           return cuadradopromesa(3)
})

.then((respuesta) =>{
    console.log('Inicia Promesa');
    console.log(`Promesa: value: ${respuesta.value}
            cuadrado: ${respuesta.result}`
            );
            return cuadradopromesa(x)
 })
 
.then((respuesta) =>{
    console.log('Inicia Promesa');
    console.log(`Promesa: value: ${respuesta.value}
            cuadrado: ${respuesta.result}`
            );
            return cuadradopromesa(5)
 })
 
.then((respuesta) =>{
    console.log('Inicia Promesa');
    console.log(`Promesa: value: ${respuesta.value}
            cuadrado: ${respuesta.result}`
            );
 })
.catch(err=>console.log(err));
