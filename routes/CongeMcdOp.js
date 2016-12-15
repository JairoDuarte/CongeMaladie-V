module.exports= function(app) {

    var congemcd =app.controllers.CongeMcdOp;

    app.get('/api/congemcd/:id',congemcd.getById);
    app.get('/api/congemcds',congemcd.getAll);
    app.post('/api/congemcd',congemcd.add);
}
