app.factory(

    'mockService',

    function($rootScope, $http, $sessionStorage, $timeout) {

        var mockService = {};
        mockService.currentJSON = null; //used for caching the JSON

        mockService.loadLocalization = function(callback) {

            //HTTP request to load the JSON, you can get the language from sessionStorage or even pass it in as an argument
            $timeout(function() {
                var href = location.pathname.split('/')[1];
                var lang = href;
                if (lang == "fr") {
                    $http.get("json/homefr.json")
                        .then(function(response) {
                            mockService.currentJSON = response;
                            callback();
                            // console.log("inside fr");
                        });
                } else {

                    $http.get("json/home.json")
                        .then(function(response) {
                            mockService.currentJSON = response;
                            callback();
                            // console.log(" inside en");

                        });
                }
            }, 100)

        };

        mockService.getLocalizationJSON = function() {
            return mockService.currentJSON;
        };

        return mockService;

    });

app.factory('share', function(){
  return [];
});



app.factory('homeContent', ['$http', function($http) {
    return {
        get: function(callback) {
            $http.get('json/home.json', {
                cache: true
            }).success(function(data) {
                callback(data);
            });
        }
    };
}]);

app.factory('getStores', function($http) {

    function getData(callback) {
        $http({
            method: 'GET',
            url: '/api/getstores.php',
            cache: false
        }).success(callback);
    }
    return {
        list: getData
    };
});
app.factory('APIservices', function($http) {
    var APIcarModels = {};
    APIcarModels.getAPIcarModels = function(arg) {
        function getData(callback) {
            $http({
                method: 'GET',
                url: '/api/getstores.php',
                cache: false
            }).success(callback);
        }
        return {
            list: getData
        };
    }
    return APIcarModels;

});
app.factory('tt', function($http) {
    return "test";
});

// app.factory('recipes', ['$http', function($http){
//     return{
//       get: function(callback){
//           $http.get('json/recipes.json', {cache:true}).success(function(data) {
//           callback(data);
//         });
//       }
//     };
//   }]);
// app.factory('faqs', ['$http', function($http){
//   console.log("asdasdas");
//     return{
//       get: function(callback){
//           $http.get('json/faq.json', {cache:true}).success(function(data) {
//           callback(data);
//         });
//       }
//     };
//   }]);
// app.factory('timeline', ['$http', function($http){
//     return{
//       get: function(callback){
//           $http.get('json/timeline.json', {cache:true}).success(function(data) {
//           callback(data);
//         });
//       }
//     };
//   }]);



/***************************************
Smooth Scroll Function
****************************************/
app.service('anchorSmoothScroll', function() {
    this.scrollTo = function(eID) {
        // This scrolling function
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY);
            return;
        }
        var speed = Math.round(distance / 100);
        speed = 30;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
                setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
                leapY += step;
                if (leapY > stopY) leapY = stopY;
                timer++;
            }
            return;
        }
        for (var i = startY; i > stopY; i -= step) {
            setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
            leapY -= step;
            if (leapY < stopY) leapY = stopY;
            timer++;
        }

        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }

        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop - 90;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            }
            return y;
        }
    };
});
