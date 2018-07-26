module.exports = function(app) {
 
    const grandma = require('../controller/grandma.controller.js');
    
    // Create a new Grandma
    app.post('/api/grandma', grandma.create);
 
    // Retrieve all Grandma
    app.get('/api/grandma/all', grandma.findAll);
 
    // Retrieve a single Grandma by Id
    app.get('/api/grandma/:grandmaId', grandma.findById);
 

}