angular.module('library.services', ['ngResource'])

  .factory('AuthorSvc', ['$resource', function ($resource) {
    // return $resource('http://192.168.2.145:5000/sessions/:sessionId');
    return $resource('http://192.168.2.145:5000/api/authors/:authorId');
  }])

  .factory('BooksByAuthorSvc', ['$resource', function ($resource) {
    // return $resource('http://192.168.2.145:5000/sessions/:sessionId');
    return $resource('http://192.168.2.145:5000/api/booksbyauthor/:authorId');
  }])

  .factory('BookSvc', ['$resource', function ($resource) {
    return $resource('http://192.168.2.145:5000/api/books/:bookId');
  }]);
