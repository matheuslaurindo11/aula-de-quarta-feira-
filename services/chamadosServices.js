const {suporteN1} = require('../handlers/suporteHandler')


function criar(dados){
    console.log("2 - SERVICE RECEBIDO ", dados);
    const chamado = {
       id:1,
       titulo:dados.titulo,
       prioridade:dados.prioridade,
       status:"aberto" 
    }
    chamado.resposavel = suporteN1(chamado); 


    console.log("3 - SERVICE CRIOU ", chamado);
    return chamado;
}
module.exports = {criar}
