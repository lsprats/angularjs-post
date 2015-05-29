app.factory("UserResource", function($resource){
	return $resource("http://jsonplaceholder.typicode.com/users/:id", {id: "@id"});
})