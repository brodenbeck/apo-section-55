angular.module( 'apoMod', [ 'ngRoute' ] )

	.config( function( $routeProvider ) {
		$routeProvider

			.when( '/' ,  {
				templateUrl: 'partials/home.html',
				controller: 'homeController'
			})

			.when( '/events', {
				templateUrl: 'partials/events.html',
				controller: 'eventsController'
			})

			.when( '/chapters', {
				templateUrl: 'partials/chapters.html',
				controller: 'chaptersController'
			})

			.when( '/contact', {
				templateUrl: 'partials/contact.html',
				controller: 'contactController'
			})

			.when( '/alumni', {
				templateUrl: 'partials/alumni.html',
				controller: 'alumniController'
			})

			.when( '/awards', {
				templateUrl: 'partials/awards.html',
				controller: 'awardsController'
			})

			.when( '/resources', {
				templateUrl: 'partials/resources.html',
				controller: 'resourcesController'
			})

			.otherwise({
				redirectTo: '/404',
				templateUrl: 'partials/error.html',
				controller: 'errorController'
			});
	});