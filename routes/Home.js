module.exports= function(app) {
    var Home =app.controllers.Home;

    app.get('/',Home.index);
}
