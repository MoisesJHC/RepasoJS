function cuadradopromesa1(value){
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

const cuadradoPromesa2 = value=>{
    //Async y await

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
async function funcionAsyncronaDeclarada(valor = 1){
try{
console.log('Inicia async Function');
let obj =  await cuadradopromesa1(5)
console.log(`Promesa: valor: ${obj.value}
cuadrado: ${obj.result}
`
);

}catch(error){
console.log(error)
}
}
funcionAsyncronaDeclarada();

const functionAsyncronaFlecha = async (valor = 1)=>{
    try{
    console.log('Inicia async Function');
    let obj =  await cuadradopromesa1(valor)
    console.log( `
    Promesa valor: ${obj.value}
    cuadrado: ${obj.result}
    `
    );
    
    }catch(error){
    console.log(error)
    }
    }
    functionAsyncronaFlecha(10);