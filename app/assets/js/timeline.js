app.controller('timeline', function ($rootScope, $document, $timeout, $scope, $location) {
	$rootScope.meta.title = "Timeline - McVitie's"
	$rootScope.meta.desc = "Goodness never gets old! Get a taste of the McVitie’s tradition that dates back to 1830.";
	$rootScope.meta.ogUrl = $location.absUrl();
	$rootScope.meta.ogImage = "mcvitiescanada.com/app/assets/images/mcvities-share.jpg";
	$scope.side = '';



	// optional: not mandatory (uses angular-scroll-animate)
	$scope.animateElementIn = function ($el) {
		$el.removeClass('timeline-hidden');
		$el.addClass('bounce-in');
	};

	// optional: not mandatory (uses angular-scroll-animate)
	$scope.animateElementOut = function ($el) {
		$el.addClass('timeline-hidden');
		$el.removeClass('bounce-in');
	};
});
