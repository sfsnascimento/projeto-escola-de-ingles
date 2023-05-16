const { Router } = require('express');
const TurmaController = require('../controller/TurmaController');

const router = Router();

router
  .get('/turmas', TurmaController.pegaTodasAsTurmas)
  .get('/turmas/:id', TurmaController.pegaUmaTurma)
  .post('/turmas', TurmaController.criaTurma);

module.exports = router;