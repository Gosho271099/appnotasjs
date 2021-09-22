
const funciones = require('./funcionesDeTareas')


let opcion = process.argv[2]

/*if (opcion =="listar"){
    lecturaJson.forEach((valor,index) => {
        console.log("Nombre de la tarea: "+lecturaJson[index].titulo + " y su estado es: "+ lecturaJson[index].estado)
    });
}else if(opcion == undefined) {
    console.log("Atención - Tienes que pasar una acción.")
} else {
    console.log("No entiendo qué quieres hacer.")
}*/

switch(opcion){
    case "listar":
        let lectura = funciones.lectura(); //Se manda a llamar la funcion lectura del archivo requirir
        lectura.forEach((valor,index) => {
            console.log("Nombre de la tarea: "+lectura[index].titulo + " y su estado es: "+ lectura[index].estado)
        });
        break
    case undefined: 
    console.log("Atención - Tienes que pasar una acción.")
    let escritura = funciones.escritura()
        break
    default:
        console.log("No entiendo qué quieres hacer.")
}