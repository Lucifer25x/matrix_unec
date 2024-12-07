// Class for library
class Library {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    isOld(){
        return new Date().getFullYear() - this.year >= 50;
    }
}

// Class for book
class Book extends Library {
    constructor(title, author, year, genre, page_count, isbn){
        super(title, author, year);
        this.genre = genre;
        this.page_count = page_count;
        this.isbn = isbn;
    }

    isThick(){
        return this.page_count > 300;
    }
}

// Class for EBook
class EBook extends Book {
    constructor(title, author, year, genre, page_count, isbn, file_size, format){
        super(title, author, year, genre, page_count, isbn);
        this.file_size = file_size;
        this.format = format;
    }

    isPDF(){
        return this.format.toLowerCase() == "pdf";
    }

    printDetails(){
        return `Title: ${this.title}\nAuthor: ${this.author}\nPublication Year: ${this.year}\nGenre: ${this.genre}\nPage Count: ${this.page_count}\nISBN: ${this.isbn}\nFile Size: ${this.file_size}\nFormat: ${this.format}\n----------\nIs Old: ${this.isOld()}\nIs Thick: ${this.isThick()}`;
    }
}

// Usage:
const book = new EBook("The Metamorphosis", "Franz Kafka", 1915, "Novella", 44, "978-1557427663", "2.3MB", "PDF");
console.log(book.printDetails());