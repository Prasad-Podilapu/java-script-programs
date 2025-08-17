/*console.log("arrays");
let arr = ["krish", "boostu"];
console.log(arr);
arr.push("prasu");
console.log(arr);
*/

//task

const library = {
  name: "krish library",
  books: [],
  totalBooks: 0,
  addBook(title) {
    this.books.push(title);
    this.totalBooks++;
  },
};
library.addBook("html");
library.addBook("css");
library.addBook("java script");
console.log(library.books);
console.log(library.totalBooks);
