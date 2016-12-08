module.exports = function(app) {

  var HomeController = {
    index: function (req,res) {
        return res.json({name:'Ryan',firstname:'Dahl'});
    }
  };
  return HomeController;
};
