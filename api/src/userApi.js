

/*
	Rest routes and functionality oriented to manage users:
	StatusCodes List is: http://en.wikipedia.org/wiki/List_of_HTTP_status_codes
*/	
module.exports = function(rest){

	//Create new Opportunity
	rest.post('/opportunity', function(req, content, callback){
		
		var opportunity = new OpportunityModel();
		opportunity.setTitle(req.body.title);
		opportunity.setHeader(req.body.header);
		opportunity.setBody(req.body.body);
		opportunity.setPhotoPath(req.body.photoPath);
		opportunityDao.create(opportunity, function(opportunity){
			callback(null, { id: opportunity.id});
		});	
	});
}