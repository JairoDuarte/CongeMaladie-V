var db = require('../libs/db_connect')();

module.exports = function (app) {
  var AgentModels = db.Model.extend({

    tableName: 'Agents'

  });


  return AgentModels;
};
