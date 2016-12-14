var db = require('../libs/db_connect')();

module.exports = function (app) {
  var AgentModels = db.Model.extend({

    tableName: 'agents',

    posts: function () {
      return this.hasMany(Certifcats);
    }
  })

  return AgentModels;
};
