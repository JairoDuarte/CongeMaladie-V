module.exports = function(app) {
  var AgentDB = app.models.Agent;

  var AgentController = {
    getAll: function (req,res) {
      AgentDB.forge()
      .fetchAll()
      .then(function (collection) {
        res.json(collection.toJSON());
      })
      .otherwise(function (err) {
        res.status(500).json({error:true, message:err.message});
      });
    },
    add:function (req,res) {
      console.log(req.body);
      console.log(req.body.Matricule);
      AgentDB.forge({
        Matricule : req.body.Matricule,
        Nom: req.body.Nom,
        Prenom: req.body.Prenom,
        IdCongeMCDActuel: req.body.IdCongeMCDActuel || null
      })
      .save()
      .then(function (user) {
        res.json({error:false ,data:user.toJSON()});
      })
      .otherwise(function (err) {
        res.status(500).json({error:true, message: err.message});
      });
    },
    getById:function (req,res) {
      AgentDB.forge({Matricule: req.params.id})
      .fetch()
      .then(function (agent) {
        if (!agent) {
          res.status(404).json({error:true,data:{}});
        }
        res.json({error:false, data: agent.toJSON()});
      })
      .otherwise(function (err) {
        res.status(500).json({error:true, message:err.message});
      });
    },
    update:function (req,res) {
      AgentDB.forge({Matricule: req.params.id})
      .fetch({require: true})
      .then(function (agent) {
        console.log(agent.toJSON());
        agent.set({
          Matricule: agent.get('Matricule'),
          Nom: req.body.Nom || agent.get('Nom'),
          Prenom: req.body.Prenom || agent.get('Prenom'),
          IdCongeMCDActuel: req.body.IdCongeMCDActuel || agent.get('IdCongeMCDActuel')
        }).save()
        .then(function () {
          res.json({error:false, data: {message:'agent details updated'}});
        })
        .catch(function () {
            res.status(500).json({error:true, message:err.message});
        });
      })
      .catch(function (err) {
        res.status(500).json({error:true, message:err.message});
      });
    },
    delete:function (req,res) {
      AgentDB.forge({Matricule: req.params.id})
      .fetch()
      .then(function (agent) {
        console.log(agent);
        agent.destroy()
        .then(function () {
          res.json({error: true, data: {message: 'agent successfully deleted'}});
        })
        .catch(function (err) {
          res.status(500).json({error: true, data: {message: err.message}});
        });
      })
      .catch(function (err) {
        res.status(500).json({error:true, message:err.message});
      });
    }
  };
  return AgentController;
};
