const { Router } = require('express');
const NivelController = require('../controller/NivelController');

const router = Router();

router
  .get('/niveis', NivelController.pegaTodosOsNiveis)
  .get('/niveis/:id', NivelController.pegaUmNivel);

module.exports = router;