const { Router } = require('express');
const NivelController = require('../controller/NivelController');

const router = Router();

router
  .get('/niveis', NivelController.pegaTodosOsNiveis);

module.exports = router;