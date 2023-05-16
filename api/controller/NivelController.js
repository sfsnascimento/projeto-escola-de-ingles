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

  static async atualizaNivel(req, res) {
    const novasInfos = req.body;
    const { id } = req.params;
    try {
      await Niveis.update(novasInfos, { where: { id: +id } });
      const nivelAtualizado = await Niveis.findOne({ where: { id: +id } });
      return res.status(200).json(nivelAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async apagaNivel(req, res) {
    const { id } = req.params;
    try {
      await Niveis.destroy({ where: { id: +id }});
      return res.status(200).json({mensagem: `id ${id} deletado`});
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = NivelController;