/**
 * EXERCISE 4 - Read Books
 *
 * Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro. Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.
 */

interface Book {
  title: String;
  isRead: Boolean;
}

const books: Book[] = [
  { title: 'Harry Potter y la piedra filosofal', isRead: true },
  { title: 'Canción de hielo y fuego', isRead: false },
  { title: 'Devastación', isRead: true },
];

const isBookRead = (books: Book[] = [], titleToSearch: string): boolean => {
  const searchBook = books.find((book) => book?.title === titleToSearch);

  if (searchBook === undefined) {
    return false
  };

  return Boolean(searchBook?.isRead);
};

console.log({ books });
console.log(`ìs the book 'Devastación' read?: ${isBookRead(books, 'Devastación')}`);
console.log(`ìs the book 'Canción de hielo y fuego' read?: ${isBookRead(books, 'Canción de hielo y fuego')}`);
console.log(`ìs the book 'Harry Potter y la piedra filosofal' read?: ${isBookRead(books, 'Harry Potter y la piedra filosofal')}`);
console.log(`ìs the book 'Software Engineering' read?: ${isBookRead(books, 'Software Engineering')}`);

