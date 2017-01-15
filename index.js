var app = angular.module('minmax', [
   'jcs-autoValidate'

]);

app.run(function(defaultErrorMessageResolver){
	defaultErrorMessageResolver.getErrorMessages().then(function(errorMessages){
		errorMessages['tooYoung']= 'You must be at least {0} years old to use this website';
		errorMessages['tooOld']= 'You must be max {0} years old to use this website';
		errorMessages['badUserName']= 'Username can only consist of letters and numbers and "_" ';
	})
});
app.controller('MinMaxCtrl', function($scope){
	$scope.formModel = {};

	$scope.onSubmit = function(){
	
		
			console.log("The submit button has been clicked!");
			console.log($scope.formModel);
		

	}
	
})