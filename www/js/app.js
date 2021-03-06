// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('library', ['ionic', 'library.controllers', 'library.services', 'ConsoleLogger'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleLightContent();
      }
    });
  })

  .run(['PrintToConsole', function(PrintToConsole) {
    // PrintToConsole.active = true;
  }])

  .config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
      })

      .state('tab.authors', {
        url: '/authors',
        cache: false,
        views: {
          'tab-authors': {
            templateUrl: 'templates/authors1.html',
            controller: 'AuthorsCtrl'
          }
        }
      })

      .state('tab.author-books', {
        url: '/authors/:authorId',
        cache: false,
        views: {
          'tab-authors': {
            templateUrl: 'templates/books.html',
            controller: 'BooksByAuthorCtrl'
          }
        }
      })

      .state('tab.author-book-detail', {
        url: '/authors/book/:bookId',
        cache: false,
        views: {
          'tab-authors': {
            templateUrl: 'templates/detail.html',
            controller: 'DetailCtrl'
          }
        }
      })

      .state('tab.books', {
        url: '/books',
        cache: false,
        views: {
          'tab-books': {
            templateUrl: 'templates/books.html',
            controller: 'BooksCtrl'
          }
        }
      })
    
      .state('tab.book-detail', {
        url: '/books/:bookId',
        cache: false,
        views: {
          'tab-books': {
            templateUrl: 'templates/detail.html',
            controller: 'DetailCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/authors');
  });
