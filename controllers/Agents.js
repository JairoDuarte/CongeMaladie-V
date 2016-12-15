module.exports = function(app) {
  var db = require('../libs/db_connect')();

  var AgentDB = app.models.Agent;

  var AgentsController = {
    getAll: function (req,res) {

    },
    add:function (req,res) {

    },
    getById:function (req,res) {


    },
    update:function (req,res) {

      return res.json(req.body);
    },
    delete:function (req,res) {

    }
  };
  return AgentsController;
};
