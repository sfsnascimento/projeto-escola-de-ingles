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

  static async criaTurma(req, res) {
    const novaTurma = req.body;
    try {
      const novaTurmaCriada = await Turmas.create(novaTurma);
      return res.status(200).json(novaTurmaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaTurma(req, res) {
    const novasInfos = req.body;
    const { id } = req.params;
    try {
      await Turmas.update(novasInfos, { where: { id: +id } });
      const turmaAtualizada = await Turmas.findOne({ where: { id: +id } });
      return res.status(200).json(turmaAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async apagaTurma(req, res) {
    const { id } = req.params;
    try {
      await Turmas.destroy({ where: { id: +id }});
      return res.status(200).json({mensagem: `id ${id} deletado`});
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = TurmaController;