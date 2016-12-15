module.exports = function(app) {

  var model=app.models.CongeMcdOp,
      DB =model.Model;
  var AgentController = {
    getAll: function (req,res) {
      model.GetAll(req,res);
    },
    add:function (req,res) {
      console.log(req.body);
      console.log(req.body.Matricule);
      DB.forge({
        DateOP: req.body.DateOP || Date(),
        EtatOP: req.body.EtatOP,
        IdCongeMcdAncien: req.body.IdCongeMcdAncien || null,
        IdCongeMCDNouveau: req.body.IdCongeMCDNouveau || null,
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
      DB.forge({IdConge: req.params.id})
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
    }
  };
  return AgentController;
};
