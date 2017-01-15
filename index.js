var app = angular.module('minmax', []);

app.controller('MinMaxCtrl', function($scope){
	$scope.formModel = {};

	$scope.onSubmit = function(valid){
	
		if(valid) {
			console.log("The submit button has been clicked!");
			console.log($scope.formModel);
		}
		else {
			console.log("Invalid Form! Fill out all of the information required!")
		}
	}
	
})