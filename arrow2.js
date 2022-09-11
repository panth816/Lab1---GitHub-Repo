const author = {
    fullName: "Bob Alice",
    books: ["Book1"],
        printBooks() {
        this.books.forEach(book => console.log(book + 'by ' + this.fullName));
        }
    };