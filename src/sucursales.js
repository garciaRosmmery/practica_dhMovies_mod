const fs = require('fs')
let sucursales = {
    db: './data/theaters.json',
    titulo: "Nuestras Salas\n",
    leerJSON: function() {
        let theatersJson = fs.readFileSync(this.db, 'utf-8');
        let theaters = JSON.parse(theatersJson);
        return theaters
    },
    cantidad: function() {
        return this.leerJSON().total_theaters
    },
    listarSalas: function() {
        let theaters = this.leerJSON();
        let lista_salas = []
        theaters.theaters.forEach(function(theater) {
            lista_salas.push(theater)
            
        })
        return lista_salas
    }
}
module.exports = sucursales
