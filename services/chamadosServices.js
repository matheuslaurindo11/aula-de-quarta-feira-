function criar(dados){
    console.log("2 - SERVICE RECEBIDO ", dados);
    const chamado = {
       id:1,
       titulo:dados.titulo,
       status:"aberto" 
    }
    console.log("3 - SERVICE CRIOU ", chamado);
    return chamado;
}
module.exports = {criar}
