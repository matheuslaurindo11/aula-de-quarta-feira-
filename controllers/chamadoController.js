const chamadoService = require('../services/chamadosServices');
function criar(req, res){
    console.log("1 - CONTROLER RECEBIDO ", req.body);
    const chamado = chamadoService.criar(req.body);

    return res.status(201).json(chamado);
}
module.exports = {criar};


