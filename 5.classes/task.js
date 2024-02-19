//Task 1
class PrintEditionItem {
  constructor (name, releaseDate, pagesCount)  {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    return this.state = this.state * 1.5;
  }

  set state(state) {
    if (state < 0) {
      this._state = 0;
    }
    else if (state > 100) {
      this._state = 100;
    } else {
      this._state = state;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount)  {
    super(name, releaseDate, pagesCount);
    super.state;
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount)  {
    super(name, releaseDate, pagesCount);
    super.state;
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount)  {
    super(name, releaseDate, pagesCount);
    super.state;
    this.author = author;
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount)  {
    super(name, releaseDate, pagesCount);
    super.state;
    this.author = author;
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount)  {
    super(name, releaseDate, pagesCount);
    super.state;
    this.author = author;
    this.type = 'detective';
  }
}

//Task 2
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
     if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
   let haveBook = this.books.find(book => book[type] === value);
   return (haveBook) ? haveBook : null;
  }

   giveBookByName(bookName) {
    let haveName = this.books.find(book => book.name === bookName);
    if (haveName) {
      this.books.splice(this.books.indexOf(haveName), 1);
      return haveName;
    } else {
      return null;
    }
  }
}
