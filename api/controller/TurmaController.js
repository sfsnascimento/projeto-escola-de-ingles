const { Turmas } = require('../db/models');

class TurmaController {
  static async pegaTodasAsTurmas(req, res) {
    try {
      const todasAsTurmas = await Turmas.findAll();
      return res.status(200).json(todasAsTurmas);
    } catch (error) {
      return res.status(404).json(error.message);
    }
  }
}

module.exports = TurmaController;