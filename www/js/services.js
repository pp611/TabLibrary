angular.module('library.services', ['ngResource'])

  .factory('AuthorSvc', ['$resource', function ($resource) {
    // return $resource('http://192.168.2.145:5000/sessions/:sessionId');
    return $resource('http://yz-lib-app.herokuapp.com/api/authors/:authorId');
  }])

  .factory('BooksByAuthorSvc', ['$resource', function ($resource) {
    // return $resource('http://192.168.2.145:5000/sessions/:sessionId');
    return $resource('http://yz-lib-app.herokuapp.com/api/booksbyauthor/:authorId');
  }])

  .factory('BookSvc', ['$resource', function ($resource) {
    return $resource('http://yz-lib-app.herokuapp.com/api/books/:bookId');
  }]);
