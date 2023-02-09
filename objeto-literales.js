//Objetos literales

const usuario ={
    nombre : "Moisés",
    apellido : "Hernández",
    edad:  30,
    direccion: {
     pais: 'Mexico',
     ciudad: 'Macua',
     calle: 'principal 45'
    }, amigos: ['Pepe', 'Toño', 'Sergio'],
    active: true,
    enviarMail: function(){
     return "Enviardo email"
    },
    enviarMail2(){
     return 'Enviar email2'
    }
 }
 console.log(usuario);
 console.log(usuario.nombre);
 console.log/(usuario.direccion);
 console.log(usuario.direccion.ciudad);
 console.log(usuario.amigos);
 console.log(usuario.amigos[1]);
 console.log(usuario.enviarMail);
 console.log(usuario.enviarMail());
 console.log(usuario.enviarMail2());
 
 console.log('Nombre del Usuario:' + usuario.nombre);
 
 const salida = `Nombre del Usuario ${usuario.nombre}`;
 
 console.log(salida);
 
 
                 const salida2 = 'Nombre de usuario: ' + usuario.nombre + 
                 "\n Apellidos: " + usuario.apellido+ 
                 "\n Edad: " + usuario.edad +
                 "\n Dirección - país: " + usuario.direccion.pais +
                 "\n Dirección - ciudad: " + usuario.direccion.ciudad +
                 "\n Dirección - Calle: " + usuario.direccion.calle +
                 "\n Amigo 1: " + usuario.amigos[0] +
                 "\n Amigo 2: " + usuario.amigos[1] +
                 "\n Amigo 3: " + usuario.amigos[2] +
                 "\n Activo: " + usuario.active +
                 "\n Función 1: " + usuario.enviarMail();
                 "\n Función 2: " + usuario.enviarMail2();
 
                 console.log(salidad2);
 
                 
 const salida3 = ` Nombre de usuario: ${usuario.nombre} 
 Apellidos: ${usuario.apellido}
 Edad: ${usuario.edad}
 Dirección - país: ${usuario.direccion.pais} 
 Dirección - ciudad: ${usuario.direccion.ciudad} 
 Dirección - Calle: ${usuario.direccion.calle}
 Amigo 1: ${usuario.amigos[0]} 
 Amigo 2: ${usuario.amigos[1]}
 Amigo 3: ${usuario.amigos[2]}
 Activo: ${usuario.active}
 Función 1: ${usuario.enviarMail()}
 Función 2: ${usuario.enviarMail2()}`
 
 console.log(salidad3);