module.exports = function(app) {
 
    const mama = require('../controller/mama.controller.js');
 
    // Create a new mama
    app.post('/api/mama', mama.create);
 
    // Retrieve all mama
    app.get('/api/mama/all', mama.findAll);
 
    // Retrieve a single mama by Id
    app.get('/api/mama/:grandmaId', mama.findById);
 
}