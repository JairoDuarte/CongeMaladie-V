var db = require('../libs/db_connect')();

module.exports = function (app) {
  var CongeMcdOpModels = db.Model.extend({
      tableName:'CongeMcdOP'

  });

  return CongeMcdOpModels;
};
