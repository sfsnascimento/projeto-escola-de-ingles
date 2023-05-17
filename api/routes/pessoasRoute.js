const { Router } = require('express');
const PessoaController = require('../controller/PessoaController');

const router = Router();

router
  .get('/pessoas', PessoaController.pegaTodasAsPessoas)
  .get('/pessoas/:id', PessoaController.pegaUmaPessoa)
  .post('/pessoas', PessoaController.criaPessoa)
  .put('/pessoas/:id', PessoaController.atualizaPessoa)
  .delete('/pessoas/:id', PessoaController.apagaPessoa)
  .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
  .post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula);

module.exports = router;