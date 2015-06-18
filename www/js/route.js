var express = require('express');
var router = express.Router();
var fs = require('fs');
var plist = require('plist');

var parray = plist.parse(fs.readFileSync('js/Books.plist', 'utf8'));
// console.log(JSON.stringify(books));

var authors = [];
var books = [];
var aindex = 0;
var bindex = 0;

for (var i = 0; i < parray.length; i++) {
  var pa = parray[i];
  var author = {id: aindex++, name: pa.Author, avatar: pa.Avatar, bookCount: pa.Books.length};
  authors.push(author);

  // console.log(author);

  for (var j = 0; j < pa.Books.length; j++ ) {
    pa.Books[j].id = bindex++;
    pa.Books[j].aid = author.id;
    books.push(pa.Books[j]);
    // console.log(book);  // pretty printed json object
    // console.log(JSON.stringify(book));   // format suitable for return
  }
}

books.sort(function(a, b) {
  // for strict engine
  return a.Title == b.Title ? 0 : +(a.Title > b.Title) || -1;
  // for less strick engine
  // return a.Title > b.Title;

  // plain implementation
  // if (a.Title > b.Title ) {
  //   return 1;
  // }
  // if (a.Title < b.Title ) {
  //   return -11;
  // }

  // return 0;
});

// for (var k = 0; k < books.length; k++) {
//   books[k].id = k;
// }

console.log("Book.plist read-in", books.length, " books");

router.get('/authors', function (req, res, next) {
  res.send(authors);
});

router.get('/authors/:id', function (req, res, next) {
  var id = req.params.id;
  console.log('/authors/', id);
  console.log(authors[id]);
  res.send(authors[id]);
});

router.get('/booksbyauthor/:id', function (req, res, next) {
  var id = req.params.id;
  var abooks = [];
  for (var i = 0; i < books.length; i++) {
    if (books[i].aid == id)
      abooks.push(books[i]);
  }
  console.log('/booksbyauthor/', id, ' ', abooks.length);
  res.send(abooks);
});

router.get('/books', function (req, res, next) {
  console.log('/books');
  res.send(books);
});

router.get('/books/:id', function (req, res, next) {
  var id = req.params.id;
  var bid = 0;
  
  for (var k = 0; k < books.length; k++) {
    if (books[k].id == id) {
      bid = k;
      break;
    }
  }
  
  console.log('/books/', id, bid);
  console.log(books[bid]);
  res.send(books[bid]);
});

module.exports = router;
