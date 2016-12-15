module.exports= function(app) {
<<<<<<< HEAD
    var agent =app.controllers.Agent;
=======
    var agent =app.controllers.Agents;
>>>>>>> e1449f9bce872e23735087f69e56fa4df94ead7d

    app.get('/api/agent/:id',agent.getById);
    app.get('/api/agents',agent.getAll);
    app.put('/api/agent/:id',agent.update);
    app.delete('/api/agent/:id',agent.delete);
    app.post('/api/agent',agent.add);
}
