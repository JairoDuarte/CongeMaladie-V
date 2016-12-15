var db = require('../libs/db_connect')(),
Agent = require('./Agent');

module.exports = function (app) {
  var CongeMcdModels = db.Model.extend({
      tableName:'CongeMcd',
      agent:function () {
        return this.belongsTo(Agent);
      }
  })


  return CongeMcdModels;
};
