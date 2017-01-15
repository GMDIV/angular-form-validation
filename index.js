var app = angular.module('minmax', [
   'jcs-autoValidate',
   'angular-ladda'

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
	$scope.submitting = false;

	$scope.onSubmit = function(){
		$scope.submitting = true;

		
			console.log("The submit button has been clicked!");
			console.log($scope.formModel);
		
			//insert $http requests/api destination here instead of just the console logs 
	}
	
})