app.controller("NewPostController", function($scope, PostResource, $location){

	$scope.post = {};
	$scope.title = "New Post"
	$scope.savePost = function(){
		PostResource.save({data: $scope.post}, function(data){
			console.log(data);
			$location.path("/");
		});
	}

});