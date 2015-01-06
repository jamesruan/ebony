angular.module('ebony.accordion', [])
.controller('EbonyAccordionController', [ '$scope', function($scope){
	this.groups =[];

	this.select = function(_group){
		angular.forEach(this.groups, function(group){
			if(group != _group) {
				group.isOpen = false;
			}
		});
	};

	//called by accordion-group directive
	this.add_group = function(_group){
		this.groups.push(_group);
	};
}])
.directive('accordion', function(){
	return {
		restrict: 'E',
		transclude: true,
		replace: false,
		scope: {},
		controller: 'EbonyAccordionController',
		templateUrl: 'ebony/ui/templates/accordion.html'
	};
})
.directive('accordionGroup', function(){
	return {
		require: '^accordion',
		restrict: 'E',
		scope: {
			title: '@',
			isOpen: '=?'
		},
		transclude: true,
		replace: true,
		templateUrl: 'ebony/ui/templates/accordion-group.html',
		link: function(scope, element, attr, accordionCtrl){
			accordionCtrl.add_group(scope);

			scope.$watch('isOpen', function(value){
				if( value ){
					accordionCtrl.select(scope);
				}
			});

			scope.toggle = function(){
				scope.isOpen = !scope.isOpen;
			};
		},
		controller: function(){
			this.setTitle = function(element){
				this.title = element;
			};
		}
	};
})
.directive('accordionTitle', function(){
	return {
		require: '^accordionGroup',
		restrict: 'E',
		transclude: true,
		template: '',
		replace: true,
		link: function(scope, element, attr, accordionGroupCtrl, transclude){
			accordionGroupCtrl.setTitle(transclude(scope, function(){}));
		}
	};
})
.directive('accordionTransclude', function(){
	return {
		require: '^accordionGroup',
		restrict: 'A',
		link: function(scope, element, attr, controller){
			scope.$watch( function(){
				return controller[attr.accordionTransclude];
			}, function(title){
				if(title){
					element.html('');
					element.append(title);
				}
			});
		}
	};
});
