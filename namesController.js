angular.module('myApp', []).controller('namesCtrl', function($scope) {
	$scope.names = [
	{name:'John', country:'india'},
	{name:'Rahul', country:'usa'},
	{name:'Ramesh', country:'uk'}
	];
});