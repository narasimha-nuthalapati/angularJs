(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
	$scope.menuItems="";
	$scope.message="";
	//myStyle is used to color the message dynamically
	$scope.myStyle={};

	$scope.updateMessage= function(){
		if($scope.menuItems==""){
			$scope.myStyle={color:'red'};
			$scope.message="Please enter data first";
			return;
		}
		$scope.myStyle={color:'green'};
		length = $scope.menuItems.split(",").length;
		if(length<=3){
			$scope.message="Enjoy!"
		}else{
			$scope.message="Too much!"
		}
	}
});

})();