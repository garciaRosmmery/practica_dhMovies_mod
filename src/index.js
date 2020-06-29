let homePage = require('./homePage');
let enCartelera = require('./enCartelera');
let masVotadas = require('./masVotadas');
let sucursales = require('./sucursales');
let contacto = require('./contacto');
let preguntasFrecuentes = require('./preguntasFrecuentes');
let index = {

    homePage:function(res){
        res.write(`----------------------------------------------------------------------------------------------------------------------------
                                                                DH Movies
---------------------------------------------------------------------------------------------------------------------------\n`)
        res.write(homePage.titulo + '\n\n');
        res.write("Total: " + homePage.cantidad() + '\n\n');

        let titulos = homePage.listarPelis();
        titulos.forEach(function(titulo){
            res.write(titulo);
            res.write('\n');
        })
        res.end();
    },
    enCartelera:function(res){
        res.write(enCartelera.titulo + '\n');
        res.write("Total: " + enCartelera.cantidad() + '\n\n');

        let movies = enCartelera.listarPelis();
        movies.movies.forEach(function(movie){
            res.write(movie.title + '\n');
            res.write(movie.overview + '\n\n');

        })
        res.end();
    },
    masVotadas:function(res){
        res.write(masVotadas.titulo + '\n');
        res.write("Total: " + masVotadas.cantidad() + '\n\n');

        let movies_masVotadas = masVotadas.listarPelis_masVotadas();
        movies_masVotadas.forEach(function(movie){
            res.write(movie.title + '\n');
            res.write(movie.vote_average + '\n');
            res.write(movie.overview + '\n\n');
        })
        res.end();


    },
    sucursales:function(res){
        res.write(sucursales.titulo + '\n');
        res.write("Total: " + sucursales.cantidad() + '\n\n');

        let theaters = sucursales.listarSalas();
        theaters.forEach(function(theater){
            res.write(theater.name + '\n');
            res.write(theater.address + '\n');
            res.write(theater.description + '\n\n');

        })
        res.end();

    },
    contacto:function(res){

        res.write(contacto.titulo);
        res.write(contacto.contenido);
        res.end();
    },
    preguntasFrecuentes:function(res){
        res.write(preguntasFrecuentes.titulo + '\n');
        res.write("Total Preguntas: " + preguntasFrecuentes.cantidad() + '\n\n');

        let preguntas = preguntasFrecuentes.listarPreguntas();

        preguntas.forEach(function(pregunta){
            res.write(pregunta.faq_title + '\n');
            res.write(pregunta.faq_answer + '\n\n');
        })

        res.end();

    },

}

module.exports = index