app.controller('recipeCtrl', function recipeCtrl($scope, $window, $location, $http, $routeParams, $rootScope, mockService) {
    var slug = $routeParams.param;
    // $rootScope.thisIsTitle = $routeParams.param +" - McVitie's";
    // console.log($scope.homeContent);
    // console.log($scope.recipe);
    // console.log(document.getElementById('pName').value);
    mockService.loadLocalization(function () {
        var metaStuff = mockService.getLocalizationJSON().data;
        metaStuff = metaStuff.recipes.allRecipes;
        $rootScope.meta = {};
        for (var i = 0; i < metaStuff.length; i++) {
            if (metaStuff[i].slug === slug) {
                $scope.recipe = metaStuff[i];

                $rootScope.meta.title = metaStuff[i].title + " - McVitie's";
                $rootScope.meta.desc = metaStuff[i].meta;
                $rootScope.meta.ogUrl = $location.absUrl();
                $rootScope.meta.ogImage = "http://mcvitiescanada.com/app/assets/images/recipes/big/" + metaStuff[i].image + ".jpg";
            }
        }
        // console.log($scope.metaStuff.recipes);

    });
});











app.controller('TestController', ['$scope', function ($scope) {


    var schemaOrg = angular.toJson({
        '@context': 'http://schema.org',
        '@type': 'MusicGroup'
    });

    angular.element(document).ready(function () {
        var jsonLd = angular.element(document.getElementById('json-ld-music-group'))[0];
        jsonLd.innerHTML = schemaOrg;
    });









    // console.log("aaaa");
    $scope.jsonId = {
        "@context": "http://schema.org",
        "@type": "Place",
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "40.75",
            "longitude": "73.98"
        },
        "name": "Empire State Building"
    };
}]).directive('jsonld', ['$filter', '$sce', function ($filter, $sce) {
    return {
        restrict: 'E',
        template: function () {
            return '<' + 'script type="application/ld+json" ng-bind-html="onGetJson()">' + '<' + '/script>';
        },
        scope: {
            json: '=json'
        },
        link: function (scope, element, attrs) {
            scope.onGetJson = function () {
                return $sce.trustAsHtml($filter('json')(scope.json));
            }
        },
        replace: true
    };
}]);







app.controller('emailFormCtrl', function ($scope, $http) {
    $scope.emailForm = function () {

    }
});

app.controller('ourRecipesCtrl', function ourRecipesCtrl($scope, $window, $location, $http, $routeParams, mockService, $rootScope) {
    $rootScope.meta = {};
    $rootScope.meta.title = "Recipes - McVitie's";
    $rootScope.meta.desc = "Browse through a huge assortment of delicious recipes featuring your favourite McVitie’s flavours. We’ve got something for every occasion.";


    $rootScope.meta.title = "Recipes - McVitie's";
    $rootScope.meta.desc = "Browse through a huge assortment of delicious recipes featuring your favourite McVitie’s flavours. We’ve got something for every occasion.";
    $rootScope.meta.ogUrl = $location.absUrl();
    $rootScope.meta.ogImage = "mcvitiescanada.com/app/assets/images/mcvities-share.jpg";
    $scope.filterThisCate = function (x) {
        if (x == "All" || x == "Tout") {
            $scope.showThisCate = "";
        } else {
            $scope.showThisCate = x;
        }
    };
    mockService.loadLocalization(function () {
        $scope.homeContent = mockService.getLocalizationJSON().data;
        $scope.activeRecipe = $scope.homeContent.recipes.categories[0];
        $scope.recipesFilter = function (category) {
            $scope.activeRecipe = category;
        }

    });
})
app.controller('socialCtrl', function ($scope, $window, $location) {
    $scope.location = function () {
        return $location.absUrl().split('#')[0];
    }
    /*************************************
    Social Share function
    ************************************/
    $scope.social = function (title, social, image) {
        var leftPosition, topPosition, height = 350,
            width = 545;
        var href = $location.absUrl().split('#')[0];
        leftPosition = ($window.innerWidth / 2) - ((width / 2) + 10);
        topPosition = ($window.innerHeight / 2) - ((height / 2) + 50);
        if (social === 'fb') {
            window.open('https://facebook.com/sharer.php?u=' + $location.absUrl(), "Window2", "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no");
        }
        if (social === 'tw') {
            window.open('http://twitter.com/share?text=McVities: ' + title + ' recipe', "Window2", "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no");
        }
        if (social === 'pin') {
            window.open('https://www.pinterest.com/pin/create/button/?url=' + location.href + '&media=' + location.origin + '/app/assets/images/recipes/big/' + image + '.jpg&description=' + title, "Window2", "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no");
        }
    }
    /*************************************
    Print Recipe Function
    ************************************/
    $scope.printDiv = function (divName, title, image) {
        var printContents = document.getElementById(divName).innerHTML;
        var popupWin = window.open('', '_blank');
        popupWin.document.open();
        popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="' + location.origin + '/app/assets/css/style.css" /><style>.title{display:none;}</style></head><body onload="window.print()"><div class="container" style="text-align:left"><img src="' + location.origin + '/app/assets/images/logo.png" alt="logo" class="pad50"/><p class="secondary-font red">' + title + '</p><br/> <img src=' + location.origin + '/app/assets/images/recipes/big/' + image + '.jpg alt="" />' + printContents + '</div></body></html>');
        popupWin.document.close();
    }
})
