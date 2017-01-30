var app = angular.module("myApp", ['ngAnimate', 'ngRoute', 'angularLazyImg', 'ui.bootstrap', 'ngSanitize', 'angular-timeline', 'ngStorage', 'ngMap']);


app.config(function(lazyImgConfigProvider, $routeProvider, $locationProvider) {
    lazyImgConfigProvider.setOptions({
        offset: 300, // how early you want to load image (default = 100), 'angular-scroll-animate'
        errorClass: 'error', // in case of loading image failure what class should be added (default = null)
        successClass: 'imgLoaded', // in case of loading image success what class should be added (default = null)
        onError: function(image) {}, // function fired on loading error
        onSuccess: function(image) {} // function fired on loading success

    });
    $routeProvider
    // route for the home page
        .when('/', {
            title: "McVities",
            templateUrl: 'views/home.html',
            controller: 'activeScrollCtrl'
        })
        .when('/en', {
            templateUrl: 'views/home.html',
            controller: 'activeScrollCtrl'
        })

    .when('/:lang/our-recipes', {
            templateUrl: 'views/our-recipes.html',
            controller: 'ourRecipesCtrl'
        })
        .when('/:lang/recipe/:param', {
            templateUrl: 'views/recipes-desc.html',
            controller: 'recipeCtrl'
        })

        .when('/:lang/timeline', {
            templateUrl: 'views/timeline.html',
            controller: 'timeline'
        })
        .when('/:lang/contest', {
            templateUrl: 'views/contest.html',
            controller: 'contestCtrl'
        })
        .when('/:lang/faq', {
            templateUrl: 'views/faq.html',
            controller: 'faqsCtrl'
        })
        .when('/:lang/privacy_policy', {
            templateUrl: 'views/privacy.html',
            controller: 'privacyCtrl'
        })
        .when('/:lang/store-locator', {
            templateUrl: 'views/storelocator.html',
            controller: ''
        })
        .when('/:lang/blog', {
            templateUrl: 'views/blog.html',
            controller: 'allBlogs'
        })
        .when('/:lang/blog/:param', {
          templateUrl: 'views/oneblog.html',
          controller: 'oneBlogCtrl'
        })
        .when('/:lang/store-locator/:postalCode', {
            templateUrl: 'views/storelocator.html',
            controller: ''
        })
        .when('/fr', {
            templateUrl: 'views/home-fr.html',
            controller: 'activeScrollCtrl'
        })

    $locationProvider.html5Mode(true);

});
