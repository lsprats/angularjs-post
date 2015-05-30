app.controller("PostController", function($scope, PostResource, $routeParams, $location){

	$scope.title = "Edit Post"
	$scope.post = PostResource.get({id: $routeParams.id});
	
	$scope.savePost = function(){
		PostResource.update({id: $scope.post.id},{data: $scope.post}, function(data){
			console.log(data);
			$location.path("/post/"+$scope.post.id);
		});
	}

});