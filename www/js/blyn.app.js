//Welcome to blyn.js
//This is main application config of project. You can change a setting of :
//  - Global Variable
//  - Theme setting
//  - Icon setting
//  - Register View
//  - Spinner setting
//  - Custom style
//
//Global variable use for setting color, start page, message, oAuth key.
var db = null; //Use for SQLite database.
window.globalVariable = {
    //custom color style variable
    color: {
        appPrimaryColor: "",
        dropboxColor: "#017EE6",
        facebookColor: "#3C5C99",
        foursquareColor: "#F94777",
        googlePlusColor: "#D73D32",
        instagramColor: "#517FA4",
        wordpressColor: "#0087BE"
    },// End custom color style variable
    startPage: {
        url: "/",//Url of start page.
        state: ""//State name of start page.
    },
    message: {
        errorMessage: "Technical error please try again later." //Default error message.
    },
    oAuth: {
        dropbox: "your_api_key",//Use for Dropbox API clientID.
        facebook: "your_api_key",//Use for Facebook API appID.
        foursquare: "your_api_key", //Use for Foursquare API clientID.
        instagram: "your_api_key",//Use for Instagram API clientID.
        googlePlus: "your_api_key",//Use for Google API clientID.
    },
    adMob: "your_api_key" //Use for AdMob API clientID.
};// End Global variable

angular.module('starter', ['ionic', 'ngIOS9UIWebViewPatch', 'starter.controllers', 'starter.services', 'ngResource', 'ngMaterial', 'ngMessages', 'ngCordova', 'pascalprecht.translate'])
    .run(function ($ionicPlatform, $cordovaSQLite, $rootScope, $ionicHistory, $location, $state, $mdDialog, $mdBottomSheet, AuthService, $translate) {

        $rootScope.$on('$locationChangeStart', function (event, newUrl, oldUrl) {
            if (!$location.path() || $location.path() === '' || $location.path() === '/') {
                if (AuthService.isAuthenticated()) {
                    $state.go('user.dashboard');
                } else {
                    $state.go('public.dashboard');
                }
            }
            //console.log($location.path());
            //console.log(newUrl);
        });

        $rootScope.$on('$stateChangeStart', function (event, next, nextParams, fromState) {
            //console.log(next.name);
            if (!AuthService.isAuthenticated()) {
                if (next.name.indexOf('user.') === 0 && next.name !== 'public.login') {
                    event.preventDefault();
                    $state.go('public.login');
                }
            }
        });

        //Create database table of contracts by using sqlite database.
        //Table schema :
        //Column	   Type	     Primary key
        //  id	        Integer	    Yes
        //  firstName	Text	    No
        //  lastName	Text	    No
        //  telephone	Text	    No
        //  email	    Text	    No
        //  note	    Text	    No
        //  createDate	DateTime	No
        //  age	        Integer	    No
        //  isEnable	Boolean	    No

        //function initialSQLite() {
        //db = window.cordova ? $cordovaSQLite.openDB("contract.db") : window.openDatabase("contract.db", "1.0", "IonicMaterialDesignDB", -1);
        //$cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS contracts " +
        //    "( id           integer primary key   , " +
        //    "  firstName    text                  , " +
        //    "  lastName     text                  , " +
        //    "  telephone    text                  , " +
        //    "  email        text                  , " +
        //    "  note         text                  , " +
        //    "  createDate   dateTime              , " +
        //    "  age          integer               , " +
        //    "  isEnable     Boolean)                ");
        //};
        // End creating SQLite database table.

        // Create custom defaultStyle.
        function getDefaultStyle() {
            return "" +
                ".material-background-nav-bar { " +
                "   background-color        : " + appPrimaryColor + " !important; " +
                "   border-style            : none;" +
                "}" +
                ".md-primary-color {" +
                "   color                     : " + appPrimaryColor + " !important;" +
                "}";
        }// End create custom defaultStyle

        // Create custom style for product view.
        function getProductStyle() {
            return "" +
                ".material-background-nav-bar { " +
                "   background-color        : " + appPrimaryColor + " !important;" +
                "   border-style            : none;" +
                "   background-image        : url('img/background_cover_pixels.png') !important;" +
                "   background-size         : initial !important;" +
                "}" +
                ".md-primary-color {" +
                "   color                     : " + appPrimaryColor + " !important;" +
                "}";
        }// End create custom style for product view.

        // Create custom style for contract us view.
        function getContractUsStyle() {
            return "" +
                ".material-background-nav-bar { " +
                "   background-color        : transparent !important;" +
                "   border-style            : none;" +
                "   background-image        : none !important;" +
                "   background-position-y   : 4px !important;" +
                "   background-size         : initial !important;" +
                "}" +
                ".md-primary-color {" +
                "   color                     : " + appPrimaryColor + " !important;" +
                "}";
        } // End create custom style for contract us view.

        // Create custom style for Social Network view.
        function getSocialNetworkStyle(socialColor) {
            return "" +
                ".material-background-nav-bar {" +
                "   background              : " + socialColor + " !important;" +
                "   border-style            : none;" +
                "} " +
                "md-ink-bar {" +
                "   color                   : " + socialColor + " !important;" +
                "   background              : " + socialColor + " !important;" +
                "}" +
                "md-tab-item {" +
                "   color                   : " + socialColor + " !important;" +
                "}" +
                " md-progress-circular.md-warn .md-inner .md-left .md-half-circle {" +
                "   border-left-color       : " + socialColor + " !important;" +
                "}" +
                " md-progress-circular.md-warn .md-inner .md-left .md-half-circle, md-progress-circular.md-warn .md-inner .md-right .md-half-circle {" +
                "    border-top-color       : " + socialColor + " !important;" +
                "}" +
                " md-progress-circular.md-warn .md-inner .md-gap {" +
                "   border-top-color        : " + socialColor + " !important;" +
                "   border-bottom-color     : " + socialColor + " !important;" +
                "}" +
                "md-progress-circular.md-warn .md-inner .md-right .md-half-circle {" +
                "  border-right-color       : " + socialColor + " !important;" +
                " }" +
                ".spinner-android {" +
                "   stroke                  : " + socialColor + " !important;" +
                "}" +
                ".md-primary-color {" +
                "   color                   : " + socialColor + " !important;" +
                "}" +
                "a.md-button.md-primary, .md-button.md-primary {" +
                "   color                   : " + socialColor + " !important;" +
                "}";
        }// End create custom style for Social Network view.


        function initialRootScope() {
            $rootScope.appPrimaryColor = appPrimaryColor;// Add value of appPrimaryColor to rootScope for use it to base color.
            $rootScope.isAndroid = ionic.Platform.isAndroid();// Check platform of running device is android or not.
            $rootScope.isIOS = ionic.Platform.isIOS();// Check platform of running device is ios or not.
        };

        function hideActionControl() {
            //For android if user tap hardware back button, Action and Dialog should be hide.
            $mdBottomSheet.cancel();
            $mdDialog.cancel();
        };


        // createCustomStyle will change a style of view while view changing.
        // Parameter :
        // stateName = name of state that going to change for add style of that page.
        function createCustomStyle(stateName) {
            var customStyle =
                ".material-background {" +
                "   background-color          : " + appPrimaryColor + " !important;" +
                "   border-style              : none;" +
                "}" +
                ".spinner-android {" +
                "   stroke                    : " + appPrimaryColor + " !important;" +
                "}";

            switch (stateName) {
                case "app.productList":
                case "app.productDetail":
                case "app.productCheckout":
                case "app.clothShop":
                case "app.catalog":
                    customStyle += getProductStyle();
                    break;
                case "app.dropboxLogin":
                case "app.dropboxProfile":
                case "app.dropboxFeed":
                    customStyle += getSocialNetworkStyle(window.globalVariable.color.dropboxColor);
                    break;
                case "app.facebookLogin":
                case "app.facebookProfile":
                case "app.facebookFeed":
                case "app.facebookFriendList":
                    customStyle += getSocialNetworkStyle(window.globalVariable.color.facebookColor);
                    break;
                case "app.foursquareLogin":
                case "app.foursquareProfile":
                case "app.foursquareFeed":
                    customStyle += getSocialNetworkStyle(window.globalVariable.color.foursquareColor);
                    break;
                case "app.googlePlusLogin":
                case "app.googlePlusProfile":
                case "app.googlePlusFeed":
                    customStyle += getSocialNetworkStyle(window.globalVariable.color.googlePlusColor);
                    break;
                case "app.instagramLogin":
                case "app.instagramProfile":
                case "app.instagramFeed":
                    customStyle += getSocialNetworkStyle(window.globalVariable.color.instagramColor);
                    break;
                case "app.wordpressLogin":
                case "app.wordpressFeed":
                case "app.wordpressPost":
                    customStyle += getSocialNetworkStyle(window.globalVariable.color.wordpressColor);
                    break;
                case "app.contractUs":
                    customStyle += getContractUsStyle();
                    break;
                default:
                    customStyle += getDefaultStyle();
                    break;
            }
            return customStyle;
        }// End createCustomStyle

        // Add custom style while initial application.
        $rootScope.customStyle = createCustomStyle(window.globalVariable.startPage.state);

        $ionicPlatform.ready(function () {
            ionic.Platform.isFullScreen = true;
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
            //check language
            if (typeof navigator.globalization !== "undefined") {
                console.log(typeof navigator.globalization);
                navigator.globalization.getPreferredLanguage(function (language) {
                    // alert(language.value);
                    $translate.use((language.value).split("-")[0]);

                }, null);
            }
            //initialSQLite();
            initialRootScope();

            //Checking if view is changing it will go to this function.
            $rootScope.$on('$ionicView.beforeEnter', function () {
                //hide Action Control for android back button.
                hideActionControl();
                // Add custom style ti view.
                $rootScope.customStyle = createCustomStyle($ionicHistory.currentStateName());
            });
        });

    })
    .config(function ($ionicConfigProvider, $stateProvider, $urlRouterProvider, $mdThemingProvider, $mdColorPalette, $mdIconProvider, $translateProvider) {
        $translateProvider.translations("ch", {
            my_platform: "我的平台"
        });
        $translateProvider.translations("en", {
            my_platform: "My platform"
        });
        $translateProvider.preferredLanguage("en");
        $translateProvider.fallbackLanguage("en");
        // Use for change ionic spinner to android pattern.
        $ionicConfigProvider.spinner.icon("android");
        $ionicConfigProvider.views.swipeBackEnabled(false);
        $ionicConfigProvider.backButton.previousTitleText(false).text('');

        // mdIconProvider is function of Angular Material.
        // It use for reference .SVG file and improve performance loading.
        $mdIconProvider
            .icon('facebook', 'img/icons/facebook.svg')
            .icon('twitter', 'img/icons/twitter.svg')
            .icon('mail', 'img/icons/mail.svg')
            .icon('message', 'img/icons/message.svg')
            .icon('share-arrow', 'img/icons/share-arrow.svg')
            .icon('more', 'img/icons/more_vert.svg');

        //mdThemingProvider use for change theme color of Ionic Material Design Application.
        /* You can select color from Material Color List configuration :
         * red
         * pink
         * purple
         * purple
         * deep-purple
         * indigo
         * blue
         * light-blue
         * cyan
         * teal
         * green
         * light-green
         * lime
         * yellow
         * amber
         * orange
         * deep-orange
         * brown
         * grey
         * blue-grey
         */
        //Learn more about material color patten: https://www.materialpalette.com/
        //Learn more about material theme: https://material.angularjs.org/latest/#/Theming/01_introduction
        $mdThemingProvider
            .theme('default')
            .primaryPalette('teal')
            .accentPalette('blue');

        appPrimaryColor = $mdColorPalette[$mdThemingProvider._THEMES.default.colors.primary.name]["500"]; //Use for get base color of theme.

        $urlRouterProvider.when(
            '/public',
            '/public/dashboard');

        $stateProvider
            .state('public', {
                url: "/public",
                cache: false,
                templateUrl: "templates/blyn/core/public/html/public_menu.html",
                controller: 'publicMenuCtrl'
            })
            .state('user', {
                url: "/user",
                cache: false,
                templateUrl: "templates/blyn/core/user/html/user_menu.html",
                controller: 'userMenuCtrl'
            })
            .state('user.space', {
                url: "/space",
                params: {
                    spaceId: null
                },
                //abstract: true,
                templateUrl: "templates/blyn/core/space/html/userSpace.html",
                controller: 'spaceCtrl',
                resolve: {
                    currentSpace: function ($stateParams, $q, spaceService) {
                        if ($stateParams.spaceId) {
                            spaceService.setCurrent($stateParams.spaceId);
                            return spaceService.getCurrent();
                        }
                    }
                }
            })
            .state('user.space.app', {
                url: "/app",
                params: {
                    appId: null
                },
                //abstract: true,
                templateUrl: "templates/blyn/core/app/html/menu.html",
                controller: 'appCtrl',
                resolve: {
                    currentApp: function ($stateParams, $q, appService) {
                        if ($stateParams.appId) {
                            return appService.getCurrent(appId);
                        }
                    }
                }
            });// End $stateProvider

        //Use $urlRouterProvider.otherwise(Url);
        $urlRouterProvider.otherwise(window.globalVariable.startPage.url);
    });