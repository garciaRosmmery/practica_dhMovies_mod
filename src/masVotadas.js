const fs = require('fs')
let masVotadas = {
    db: './data/movies.json',
    titulo: "Más Votadas\n",
    leerJSON: function() {
        let moviesJson = fs.readFileSync(this.db, 'utf-8');
        let movies = JSON.parse(moviesJson);
        return movies
    },
    cantidad: function() {
        return this.leerJSON().total_movies
    },

    listarPelis_masVotadas: function() {
        let movies = this.leerJSON();

        let mas_votadas = movies.movies.filter(function(movie){
            return(movie.vote_average >= 7);
        })
       
        return mas_votadas
    }
}
module.exports = masVotadas