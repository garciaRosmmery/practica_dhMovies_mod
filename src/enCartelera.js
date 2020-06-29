const fs = require('fs');
let enCartelera = {
    db: './data/movies.json',
    titulo: "En Cartelera\n",
    leerJSON: function() {
        let moviesJson = fs.readFileSync(this.db, 'utf-8');
        let movies = JSON.parse(moviesJson);
        return movies
    },
    cantidad: function() {
        return this.leerJSON().total_movies
    },
    listarPelis: function() {
        let movies = this.leerJSON();
        /*let titleMovies = []
        movies.movies.forEach(function(movie) {
            titleMovies.push(movie.title)
        })
        titleMovies.sort()*/
        return movies
    }
}
module.exports = enCartelera