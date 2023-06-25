const createBookService = (payload) => {
    const foundBook = books.find((book) => book.name === payload.name);
  
    if (foundBook) {
      return [409, { message: "Book already exists!" }];
    }
  
    payload.id = getLastId().toString();
  
    books.push(payload);
  
    return [201, payload];
  };

  export default createBookService