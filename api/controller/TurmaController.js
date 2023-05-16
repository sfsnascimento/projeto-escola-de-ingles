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

  static async pegaUmaTurma(req, res) {
    const { id } = req.params;
    try {
      const pegaUmaTurma = await Turmas.findOne({ where: { id: +id } });
      return res.status(200).json(pegaUmaTurma);
    } catch (error) {
      return res.status(404).json(error.message);
    }
  }
}

module.exports = TurmaController;