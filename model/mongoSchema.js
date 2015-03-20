var mongoose = require('mongoose');
	mongoose.connect('mongodb://localhost/zero');
	
// user 
var user = mongoose.model('user', mongoose.Schema({
    name : String,
   	password : String
    

}));
exports.user = user;

var node = mongoose.model('node', mongoose.Schema({
	name : String,
    token : String
}));
exports.node = node;







 