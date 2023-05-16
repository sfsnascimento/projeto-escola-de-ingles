const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoute');
const turmas = require('./turmasRoute');

module.exports = app => {
  app.use(bodyParser.json(),
    pessoas,
    turmas
  );
}