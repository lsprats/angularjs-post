app.controller("MainController", function($scope, $resource, PostResource, UserResource){
	
	$scope.posts = PostResource.query();
	$scope.users = UserResource.query();
  
	$scope.removePost = function(post){
		PostResource.delete({id: post.id});
		$scope.posts = $scope.posts.filter(function(element){
			return element.id !== post.id;
		});
	}

});