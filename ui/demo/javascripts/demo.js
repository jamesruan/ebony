angular.module('ebony.demo',['ebony'])
.controller('AccordionDemoController', function($scope){
	$scope.groups=[
		{
			title: "Dynamic Title 1",
			content: "Dynamic content 1"
		},
		{
			title: "Dynamic Title 2",
			content: "Dynamic content 2"
		}
	];
})
.controller('TabsDemoController', function($scope){
	$scope.groups=[
		{
			title: "Dynamic Title 1",
			content: "Dynamic content 1"
		},
		{
			title: "Dynamic Title 2",
			content: "Dynamic content 2"
		}
	];
});
