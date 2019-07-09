module.exports = function(app){
    app.post("/cartoes/autoriza", function(req, res){
        console.log('Processando pagamento com cartão');

        var cartao = req.body;

        req.assert("numero", "Numero é obrigatório e deve ter 16 digitos.").notEmpty().len(16,16);
        req.assert("bandeira", "Bandeira do cartão é obrigatória.").notEmpty();
        req.assert("ano_de_expiracao", "Ano de experição é obrigatório e deve ter 4 caracteres.").notEmpty().len(4,4);
        req.assert("mes_de_expericao", "Mês de expiração é obrigatório e deve ter 2 caracteres.").notEmpty().lent(2,2);
        req.assert("ccv", "CCV é obrigatório e deve ter 3 digitos.").notEmpty().len(3,3);

        var errors = req.validationErrors();

        if(errors){
            console.log(400).send(errors);
            return;
        }
        cartao.status = 'AUTROIZADO';

        var response = {
            dados_do_cartao = cartao,
        }

        res.status(201).json(response);
        return;
    })
}