const { Pessoas, Matriculas } = require('../db/models');

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
      const pegaUmaPessoa = await Pessoas.findOne({ where: { id: +id } });
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

  static async atualizaPessoa(req, res) {
    const novasInfos = req.body;
    const { id } = req.params;
    try {
      await Pessoas.update(novasInfos, { where: { id: +id } });
      const pessoaAtualizada = await Pessoas.findOne({ where: { id: +id } });
      return res.status(200).json(pessoaAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async apagaPessoa(req, res) {
    const { id } = req.params;
    try {
      await Pessoas.destroy({ where: { id: +id }});
      return res.status(200).json({mensagem: `id ${id} deletado`});
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmaMatricula(req, res) {
    console.log(req)
    const { estudanteId, matriculaId } = req.params;
    try {
      const pegaUmaMatricula = await Matriculas.findOne({
        where: {
          id: +matriculaId,
          estudante_id: +estudanteId
        } 
      });
      return res.status(200).json(pegaUmaMatricula);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaMatricula(req, res) {
    const { estudanteId } = req.params;
    const novaMatricula = { ...req.body, estudante_id: +estudanteId };
    try {
      const novaMatriculaCriada = await Matriculas.create(novaMatricula);
      return res.status(200).json(novaMatriculaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params;
    const novasInfos = req.body;
    try {
      await Matriculas.update(novasInfos, {
        where: {
          id: +matriculaId,
          estudante_id: +estudanteId
        }
      });
      const matriculaAtualizada = await Matriculas.findOne({ where: { id: +matriculaId } });
      return res.status(200).json(matriculaAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PessoaController;