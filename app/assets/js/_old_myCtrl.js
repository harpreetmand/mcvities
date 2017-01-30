  /***************************************
                Main App Controller
                ****************************************/
                app.controller('mainApp', function($scope, $timeout, $rootScope, anchorSmoothScroll, homeContent, $routeParams, $window, $location, mockService, $sessionStorage, $interval) {
                  mockService.loadLocalization(function() {
                    $scope.homeContent = mockService.getLocalizationJSON().data;
                  });
                  $scope.date = new Date();
                  $scope.isActive = false;
      /***************************************
      Mobile Nav Click Function
      ****************************************/
      $scope.mobileNav = function() {
        $scope.isActive = !$scope.isActive;
      }
          /***************************************
          Close Mobile Nav Click Function
          ****************************************/
          $scope.closeMobileNav = function() {
            $scope.isActive = !$scope.isActive;
          }
          /***************************************
          find location
          ****************************************/
          $scope.findLocation = function() {
            return location.href;
          }
         /***************************************
          find Product Nutrition Image
          ****************************************/
          $scope.thisProduct = function(image, name) {
            $rootScope.productImage = image;
            $rootScope.productName = name;
          }
          /********************************************
          Function will call when ui-view will change
          **********************************************/
          $scope.removeActive = function() {
            $rootScope.homeClass = 'page';
              /***************************************
              Go to section on navigation clicked
              ****************************************/
              $scope.gotoElement = function(eID) {
                $timeout(function() {
                  anchorSmoothScroll.scrollTo(eID);
                }, 200);
              }
              $scope.changeLang = function(newLang) {
                $sessionStorage.lang = newLang;
                mockService.loadLocalization(function() {
                  $scope.homeContent = mockService.getLocalizationJSON().data;
                  console.log(mockService.getLocalizationJSON().data)

                });

              }
                  /**********************************************
             Active the navigation when scroll on home page
             ***********************************************/
             $timeout(function() {
              if ($rootScope.homeClass != 'homepage') {
                $('.top-menu').removeClass('active');
                $('.modal-backdrop').remove();
                $('body').removeClass('modal-open');
              } else {
                $(window).scroll(function() {
                  if ($rootScope.homeClass === 'homepage') {
                    var scroll = $(window).scrollTop();
                    var scrolltop = window.pageYOffset;
                    var currentScroll = $(this).scrollTop(),
                    $currentSection;
                    $('.section').each(function() {
                      var divPosition = $(this).offset().top - 120;
                      if (divPosition - 1 < currentScroll) {
                        $currentSection = $(this);
                      }
                      var id = $currentSection.attr('id');
                      $('.top-menu').removeClass('active');
                      $('.' + id).addClass('active');
                    });
                  }
                });
              }
            }, 1000);
              /***************************************
              Scroll to top when ui-view change
              ****************************************/
              $("html, body").animate({
                scrollTop: '0px'
              }, 0);
              $("html, body").delay(0).animate({
                scrollTop: '1px'
              }, 0);
            }
          /***************************************
          Animation on window scroll
          ****************************************/
          $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            var scrolltop = window.pageYOffset;
            TweenMax.to('.anim-text', 0, {
              y: -scrolltop * .5 + 'px'
            });
            TweenMax.to('.wtb-back1 ,.wtb-back16 ,.wtb-back15 ,.wtb-back10 ,.wtb-back19', 0, {
              y: scrolltop * .1 + 'px'
            });
            TweenMax.to('.wtb-back7 ,.wtb-back18 ,.wtb-back14 ,.wtb-back4 ,.wtb-back17', 0, {
              y: scrolltop * .1 + 'px'
            });
            TweenMax.to('.wtb-back13 ,.wtb-back19 ,.wtb-back18 ,.wtb-back16', 0, {
              y: -scrolltop * .1 + 'px'
            });
            TweenMax.to('.wtb-back11 ,.wtb-back12 ,.wtb-back2 ,.wtb-back5', 0, {
              y: -scrolltop * .1 + 'px'
            });

            if ($(this).scrollTop() > 130) {
              $('header').addClass('sticky');
            }
            if ($(this).scrollTop() <= 1) {
              $('header').removeClass('sticky');
            }
          });
        });
  /***************************************
  Products section Controller
  ****************************************/
  app.controller('productsCtrl', function($scope, $attrs, $http) {
    $scope.activeProduct = false;
    $scope.showMore = function() {
      $scope.activeProduct = !$scope.activeProduct;
      $scope.activePro = false;
      $scope.section = false;
    }
    $scope.showProduct = function(key, index) {
      $scope.activeProduct = true;
      if(key === $scope.activePro) {
        $scope.activePro = false
        $scope.section =  false
      } else{
       $scope.activePro = key;
       $scope.section = "section" + index;
     }
   }
   $scope.getRandomNum = function() {
    var total = (Object.keys($scope.productContent.mcvities).length - 1) * 3;
    return Math.floor((Math.random() * total) + 1);
  }
  $scope.productFind = function(product) {
    var results = [];
    var pro = 'product' + product;
    var obj = Object.keys($scope.productContent.mcvities);
    for (var i = 0; i < obj.length - 1; i++) {
      for (key in $scope.productContent.mcvities) {
        var subObj = Object.keys($scope.productContent.mcvities[key]);
        if (subObj[i].indexOf(pro) != -1) {
          return $scope.productContent.mcvities[key][subObj[i]].name;
        }
      }
    }
  }
});
  /***************************************
 Brands section Controller
 ****************************************/
 app.controller('brandsController', function($scope, $attrs, $http) {
  $scope.activeBrand = false;
  $scope.activePro = false;
  $scope.section = false;
  $scope.showMore = function(key, name) {
    $scope.activeBrand = true;
    $scope.thisBrand = name.image;
    $scope.activePro = false;
    $scope.section = false;
  }
  $scope.close = function() {
    $scope.activeBrand = false;
    $scope.thisBrand = false;
    $scope.activePro = false;
    $scope.section = false;
  }
  $scope.showProduct = function(key, index) {
    $scope.activeProduct = true;
    if(key === $scope.activePro) {
        $scope.activePro = false
        $scope.section =  false
      } else{
       $scope.activePro = key;
       $scope.section = "section" + index;
     }
  }
});
  /***************************************
  Our Story Section Controller
  ****************************************/
  app.controller('ourstoriesNav', function($scope) {

  });
  /************************************
  Faq Page controller
  ***********************************/
  app.controller('privacyCtrl', function($rootScope) {
    $rootScope.thisIsTitle = "Privacy - McVitie's"
    $rootScope.metaDesc = "read our privacy policy here";
  });
  /************************************
  Faq Page controller
  ***********************************/
  app.controller('faqsCtrl', function($scope, anchorSmoothScroll, $http, $location, $rootScope) {
    $rootScope.thisIsTitle = "FAQ - McVitie's"
    $rootScope.metaDesc = "Learn more about the products we use to make McVitie’s cookies and find answers to the most frequently asked questions.";

    console.log($location.path());
    $scope.hh = "sadasdadasdsafsdgdfh";

    $scope.activeClass = 'red';
    $scope.activeQuestion = function(key) {
      $scope.isActiveQuestion = key;
    }
    $scope.gotoElement = function(eID) {
      anchorSmoothScroll.scrollTo(eID);
    };
  });
  /***************************************
  store lcoator controller
  ****************************************/
  app.controller('storeLocatorCtrl', function($http, $scope, $interval, NgMap, getStores, APIservices, $rootScope, $routeParams) {
    $rootScope.thisIsTitle = "Store Locator - McVitie's"
    $rootScope.metaDesc = "Why wait any longer? Satisfy your sweet tooth today at a retailer near you.";
    $scope.newAddress = $routeParams.postalCode;
    $scope.address = $routeParams.postalCode;
    if (!$scope.address) {
      $scope.address = "toronto";
    }

      //initial address

      $http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + $scope.address + "")
      .then(function(response) {
        $scope.converted = response.data;
        $scope.lat = $scope.converted.results[0].geometry.location.lat;
        $scope.lng = $scope.converted.results[0].geometry.location.lng;
        $http.get("/api/getstores.php/?slug=ttdd&lat=" + $scope.lat + "&lng=" + $scope.lng + "")
        .then(function(response) {
          vm.shops = response.data;
          console.log(vm.shops);
          vm.shop = vm.shops[0];
        });
      });

      //init
      var vm = this;
      NgMap.getMap().then(function(map) {
        vm.map = map;
      });

      //get new address
      $scope.newAddressBtn = function() {

        $http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + $scope.newAddress + "")
        .then(function(response) {
          $scope.converted = response.data;
          $scope.lat = $scope.converted.results[0].geometry.location.lat;
          $scope.lng = $scope.converted.results[0].geometry.location.lng;


          $http.get("/api/getstores.php/?slug=ttdd&lat=" + $scope.lat + "&lng=" + $scope.lng + "")
          .then(function(response) {
            vm.shops = response.data;
            console.log(vm.shops);
            vm.shop = vm.shops[0];
          });



        });





      }

      vm.showDetail = function(e, shop) {
        vm.shop = shop;
        vm.map.showInfoWindow('foo-iw', shop.id);
      };

      vm.hideDetail = function() {
        vm.map.hideInfoWindow('foo-iw');
      };
    });

  /***************************************
  Contorller to add class home in ui-view
  ****************************************/
  app.controller('activeScrollCtrl', function($scope, $timeout, $sessionStorage, $window, $routeParams, $rootScope, anchorSmoothScroll) {
    $rootScope.thisIsTitle = "McVitie's Canada"
    $rootScope.metaDesc = "Britain’s favourite biscuits are now available in Canada! With a variety of mouth-watering flavours available, McVitie’s has something for every sweet tooth.";
    $scope.changeLang = function() {}

    $timeout(function() {
      $rootScope.homeClass = 'homepage';
    }, 200);
    var i = $sessionStorage.SessionMessage;
    // $(window).scroll(function() {
    //   if (i === undefined) {
    //     if ( $(window).scrollTop() > 1){
    //       $('#promotions.modal').modal('show');
    //       $sessionStorage.SessionMessage = 1;
    //       i = $sessionStorage.SessionMessage;
    //     }
    //     $sessionStorage.SessionMessage = 1;
    //   }
    // });
  });

  app.controller('contestFormCtrl', function($scope, $http, $rootScope) {
    $scope.contestFormSubmit = function() {
      $http({
        method: 'POST',
        url: 'api/submit-contest.php',
                data: $.param($scope.contestForm), // pass in data as strings
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                } // set the headers so angular passing info as form data (not request payload)
              })
      .success(function(data) {

        if (data.success == false) {
                    // if not successful, bind errors to error variables
                    $scope.errorName = data.errors.fullName;
                    $scope.errorEmail = data.errors.email;
                    $scope.errorEmailAgain = data.errors.emailAgain;
                    $scope.errorAgeCheck = data.errors.ageCheck;
                    $scope.errorPhone = data.errors.phone;
                    $scope.message = data.message;
                    $scope.thankYou = data.thankYou;
                    // console.log(data.errors.emailAgain);
                  } else {
                    // if successful, bind success message to message
                    $scope.message = data.message;
                    $scope.thankYou = data.thankYou;
                    $scope.emailExist = data.emailExist;
                    if ($scope.thankYou || $scope.emailExist) {
                      $scope.hideForm = true;
                    }

                  }
                });
      console.log($scope.contestForm);
    }
  });
  app.controller('contestCtrl', function($scope, $http, $rootScope) {
    $rootScope.thisIsTitle = "Promotions - McVitie's"
    $rootScope.metaDesc = "Visit McVitie’s often to find exclusive coupons, special offers, and to enter for your chance to win amazing prizes.";


  });

  app.controller('newsletterCtrl', function($scope, $http) {
    $scope.newsletterSignUp = function() {
      $http({
        method: 'POST',
        url: 'api/submit-newsletter.php',
                  data: $.param($scope.newsletterForm), // pass in data as strings
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                  } // set the headers so angular passing info as form data (not request payload)
                })
      .success(function(data) {
        console.log(data);

        if (data.success == false) {

          $scope.thankYou = data.thankYou;
          $scope.message = data.message;


        } else {

          $scope.thankYou = data.thankYou;

        }

      });

      console.log($scope.newsletterForm.email);
    }
  });
