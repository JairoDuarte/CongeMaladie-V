var db = require('../libs/db_connect')(),
config =require('../knexfile');
var knex = require('knex')(config.development);
module.exports = function (app) {
  var CongeMcdOpModels = db.Model.extend({
      tableName:'CongeMcdOP'

  });
  var CongeMcdOpAll = function (req,res) {
    knex.select('IdConge','DateOP','EtatOP','IdCongeMcdAncien','IdCongeMCDNouveau','IdCongeMCD','Matricule','Nom','Prenom')
    .from('CongeMcdOP')
    .leftJoin('CongeMcd', 'CongeMcdOP.IdCongeMCDNouveau', 'CongeMcd.IdCongeMCD')
    .leftJoin('Agents', 'CongeMcd.MatriculeAgent', 'Agents.Matricule')
    .then(function (operations) {
      res.json({error:false, data: operations});
    })
    .catch(function (err) {
      res.status(500).json({error:true, message: err.message});
    });

  };
  var model = {Model:CongeMcdOpModels, GetAll:CongeMcdOpAll};
  return model;
};
