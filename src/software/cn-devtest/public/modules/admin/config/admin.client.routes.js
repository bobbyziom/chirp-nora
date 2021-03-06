'use strict';

//Setting up route
angular.module('admin').config(['$stateProvider', 
	function($stateProvider) {
		// Admin state routing
		$stateProvider.
		state('location', {
			url: '/location',
			templateUrl: 'modules/admin/views/location.client.view.html'
		}).
		state('devices', {
			url: '/devices',
			templateUrl: 'modules/admin/views/admin.client.view.html'
		});
	}
]);