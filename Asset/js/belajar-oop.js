export class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
      return "Buku berhasil ditambahkan";
    }
  
    lendBook(book) {
      const tempBook = this.books.find((b) => b === book);
      if (tempBook && tempBook.isAvailable) {
        tempBook.isAvailable = !tempBook.isAvailable;
        return "Buku berhasil dipinjam";
      }
      
      return "Buka tidak tersedia";
    }
  
    returnBook(book) {
      const tempBook = this.books.find((b) => b === book);
      if (tempBook && tempBook.isAvailable == false) {
        tempBook.isAvailable = !tempBook.isAvailable;
        return "Buku berhasil dikembalikan";
      }
      return "Buku tidak tersedia";
    }
  }
  

import { Book } from "./Book.js";
import { Library } from "./Library.js";

const harryPotter = new Book("Harry Potter", "J.K. Rowling");
const naruto = new Book("Naruto", "Masashi Kishimoto");
const library = new Library();

console.log(library.addBook(harryPotter));
console.log(library.addBook(naruto));
console.log(library.books);
console.log(library.lendBook(naruto));
console.log(library.lendBook(harryPotter));
console.log(library.books);
console.log(library.returnBook(harryPotter));
console.log(library.books);

export class Book {
    constructor(title, author, isAvailable = true) {
      this.title = title;
      this.author = author;
      this.isAvailable = isAvailable;
    }
  }
  