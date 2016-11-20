(function () {
'use strict';

angular.module('lunchCheckerApp', [])
.controller('LunchCheckController',LunchCheckController); 

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
	//comma seperated menu items data as string
	$scope.menuItemsString="";
	$scope.message="";
	//messageStyle is used to color the message dynamically
	$scope.messageStyle={};

	$scope.checkLunchItems= function(){
		$scope.messageStyle={color:'green'};
		var menuItemsArray = $scope.menuItemsString.split(",");
		var filteredMenuItems= menuItemsArray.filter(function(menuItem){
			return menuItem!=='';
		});
		if(filteredMenuItems.length ==0){
			$scope.messageStyle={color:'red'};
			$scope.message="Please enter data first";
			return;
		}
		else if(filteredMenuItems.length <=3){
			$scope.message="Enjoy!"
		}else{
			$scope.message="Too much!"
		}
	}
}

})();