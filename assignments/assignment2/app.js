(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
	var buyList = this;
	buyList.items = ShoppingListCheckOffService.getToBuyItems();

	buyList.boughtItem = function(item){
		ShoppingListCheckOffService.boughtItem(item);
	};
};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
	var boughtList = this;
	boughtList.items = ShoppingListCheckOffService.getBoughtItems();
};

function ShoppingListCheckOffService(){
	var service=this;

	var toBuyItems=[
		{ name: "cookies", quantity: 10 },
		{ name: "apples", quantity: 5 },
		{ name: "notebooks", quantity: 6 },
		{ name: "pencils", quantity: 4 },
		{ name: "mangos", quantity: 8 },
		{ name: "laptops", quantity: 2 },
		{ name: "printers", quantity: 2 },
		{ name: "tv", quantity: 1 }
	];
	var boughtItems=[];

	service.boughtItem = function(item){
		var index =toBuyItems.indexOf(item);
    	if(index> -1){
    		toBuyItems.splice(index,1);	
    	}
    	boughtItems.push(item);
	}
	service.getToBuyItems= function(){
		return toBuyItems;
	};

	service.getBoughtItems= function(){
		return boughtItems;
	};
};

})();