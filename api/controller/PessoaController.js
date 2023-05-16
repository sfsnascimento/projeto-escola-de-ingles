const { Pessoas } = require('../db/models');

class PessoaController {
  static async pegaTodasAsPessoas(_req, res) {
    try {
      const pegaTodasAsPessoas = await Pessoas.findAll();
      return res.status(200).json(pegaTodasAsPessoas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmaPessoa(req, res) {
    const { id } = req.params;
    try {
      const pegaUmaPessoa = await Pessoas.findOne({ where: +id });
      return res.status(200).json(pegaUmaPessoa);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaPessoa(req, res) {
    const novaPessoa = req.body;
    try {
      const novaPessoaCriada = await Pessoas.create(novaPessoa);
      return res.status(200).json(novaPessoaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PessoaController;