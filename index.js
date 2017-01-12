var app = angular.module('minmax', []);

app.controller('MinMaxCtrl', function($scope){
	$scope.formModel = {};

	$scope.onSubmit = function(){
		console.log("The submit button has been clicked!");
		console.log($scope.formModel);
	}
	
})