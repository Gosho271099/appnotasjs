const fs = require('fs')


/** Metodo Largo
let json = fs.readFileSync('./tareas.json')
let parseando = JSON.parse(json)
*/
//let lecturaJson = JSON.parse(fs.readFileSync('./tareas.json'))

let funciones = {
    path: "./tareas.json",
    lectura: function(){
        return JSON.parse(fs.readFileSync(this.path,"utf-8"))
    },
    escritura:function(){
        return fs.writeFileSync("./lolo.txt","Data2")
    }
}

module.exports = funciones;


