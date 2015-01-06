angular.module('ebony.tabs', [])
.controller('EbonyTabsController', [ '$scope', function($scope){
	this.tabs =[];

	this.select = function(_tab){
		angular.forEach(this.tabs, function(tab){
			if(tab != _tab) {
				tab.isSelected = false;
			}
		});
		_tab.isSelected = true;
	};

	//called by tab directive
	this.add_tab = function(_tab){
		if(this.tabs.length === 0){
			//select the first tab
			_tab.isSelected = true;
		};
		this.tabs.push(_tab);
	};
}])
.directive('tabs', function(){
	return {
		restrict: 'E',
		transclude: true,
		replace: false,
		scope: {},
		controller: 'EbonyTabsController',
		templateUrl: 'ebony/ui/templates/tabs.html'
	};
})
.directive('tab', function(){
	return {
		require: '^tabs',
		restrict: 'E',
		scope: {
			title: '@',
		},
		transclude: true,
		replace: true,
		templateUrl: 'ebony/ui/templates/tab.html',
		link: function(scope, element, attr, tabsCtrl){
			tabsCtrl.add_tab(scope);

			scope.select = function(){
				tabsCtrl.select(scope);
			};
		},
		controller: function(){
			this.setTitle = function(element){
				this.title = element;
			};
		}
	};
})
.directive('tabTitle', function(){
	return {
		require: '^tab',
		restrict: 'E',
		transclude: true,
		template: '',
		replace: true,
		link: function(scope, element, attr, tabCtrl, transclude){
			tabCtrl.setTitle(transclude(scope, function(){}));
		}
	};
})
.directive('tabTransclude', function(){
	return {
		require: '^tab',
		restrict: 'A',
		link: function(scope, element, attr, controller){
			scope.$watch( function(){
				return controller[attr.tabTransclude];
			}, function(title){
				if(title){
					element.html('');
					element.append(title);
				}
			});
		}
	};
});
