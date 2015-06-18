angular.module('library.controllers', ['library.services'])

  .controller('AuthorsCtrl', ['$scope', 'AuthorSvc', function ($scope, AuthorSvc) {
    console.log("AuthorsCtrl");
    $scope.authors = AuthorSvc.query();
  }])

  .controller('BooksByAuthorCtrl', ['$scope', '$stateParams', 'BooksByAuthorSvc', function ($scope, $stateParams, BooksByAuthorSvc) {
    console.log("BooksByAuthorCtrl");
    $scope.author_books = true;
    $scope.books = BooksByAuthorSvc.query({authorId: $stateParams.authorId});
  }])

  .controller('BooksCtrl', ['$scope', 'BookSvc', function ($scope, BookSvc) {
    console.log("BooksCtrl");
    $scope.all_books = true;
    $scope.books = BookSvc.query();
  }])

  .controller('ADetailCtrl', ['$scope', '$stateParams', 'BookSvc', 'AuthorSvc', function ($scope, $stateParams, BookSvc, AuthorSvc) {
    console.log("ADetailCtrl");
    BookSvc.get({bookId: $stateParams.bookId})
      .$promise.then(function(book) {
        $scope.book = book;
        $scope.author = AuthorSvc.get({authorId: book.aid});
      });
  }])

  .controller('DetailCtrl', ['$scope', '$stateParams', 'BookSvc', 'AuthorSvc', function ($scope, $stateParams, BookSvc, AuthorSvc) {
    console.log("DetailCtrl");
    BookSvc.get({bookId: $stateParams.bookId})
      .$promise.then(function(book) {
        $scope.book = book;
        $scope.author = AuthorSvc.get({authorId: book.aid});
      });
  }]);
