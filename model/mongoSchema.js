var mongoose = require('mongoose'),
	mongoose.connect('mongodb://localhost/zero');
	
/*
	User model
*/
var userSchema = mongoose.Schema({
    name : String,
    password : String

});	

/*
	Node model
*/
var  nodeSchema = mongoose.Schema({
	name : String,
    token : String

});

// prototipes to use
var user = db.model('user', userSchema);
var node = db.model('node', nodeSchema);






