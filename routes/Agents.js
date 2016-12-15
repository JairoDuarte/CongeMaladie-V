module.exports= function(app) {
    var agent =app.controllers.Agents;

    app.get('/api/agent/:id',agent.getById);
    app.get('/api/agents',agent.getAll);
    app.put('/api/agent/:id',agent.update);
    app.delete('/api/agent',agent.delete);
    app.post('/api/agent',agent.add);
}
