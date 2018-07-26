module.exports = function(app) {
 
    const kid = require('../controller/kid.controller.js');
 
    // Create a new mama
    app.post('/api/kid', kid.create);
 
    // Retrieve all mama
    app.get('/api/kid/all', kid.findAll);
 
    // Retrieve a single mama by Id
    app.get('/api/kid/:mamaId', kid.findById);
 
}