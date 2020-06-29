const fs = require('fs');
let preguntasFrecuentes = {
    db: './data/faqs.json',
    titulo: "----------------Preguntas Frecuentes -----------------",
    leerJSON: function() {
        let faqsJson = fs.readFileSync(this.db, 'utf-8');
        let faqs = JSON.parse(faqsJson);
        return faqs
    },
    cantidad: function() {
        return this.leerJSON().total_faqs
    },
    listarPreguntas: function() {
        let faqs = this.leerJSON();
        let preguntas_frecuentes = []
        faqs.faqs.forEach(function(faq){
            preguntas_frecuentes.push(faq);
            
        })
        return preguntas_frecuentes;
    }
}
module.exports = preguntasFrecuentes
