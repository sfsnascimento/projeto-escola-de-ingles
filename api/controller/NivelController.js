const { Niveis } = require('../db/models');

class NivelController {
  static async pegaTodosOsNiveis(req, res) {
    try {
      const todosOsNiveis = await Niveis.findAll();
      return res.status(200).json(todosOsNiveis);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmNivel(req, res) {
    const { id } = req.params;
    try {
      const pegaUmNivel = await Niveis.findOne({ where: { id: +id } });
      return res.status(200).json(pegaUmNivel);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaNivel(req, res) {
    const novoNivel = req.body;
    try {
      const novoNivelCriado = await Niveis.create(novoNivel);
      return res.status(200).json(novoNivelCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = NivelController;