/**
 * EXERCISE 4 - Read Books
 *
 * Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro. Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.
 */
var books = [
    { title: 'Harry Potter y la piedra filosofal', isRead: true },
    { title: 'Canción de hielo y fuego', isRead: false },
    { title: 'Devastación', isRead: true },
];
var isBookRead = function (books, titleToSearch) {
    if (books === void 0) { books = []; }
    var searchBook = books.find(function (book) { return (book === null || book === void 0 ? void 0 : book.title) === titleToSearch; });
    if (searchBook === undefined) {
        return false;
    }
    ;
    return Boolean(searchBook === null || searchBook === void 0 ? void 0 : searchBook.isRead);
};
console.log({ books: books });
console.log("\u00ECs the book 'Devastaci\u00F3n' read?: ".concat(isBookRead(books, 'Devastación')));
console.log("\u00ECs the book 'Canci\u00F3n de hielo y fuego' read?: ".concat(isBookRead(books, 'Canción de hielo y fuego')));
console.log("\u00ECs the book 'Harry Potter y la piedra filosofal' read?: ".concat(isBookRead(books, 'Harry Potter y la piedra filosofal')));
console.log("\u00ECs the book 'Software Engineering' read?: ".concat(isBookRead(books, 'Software Engineering')));
