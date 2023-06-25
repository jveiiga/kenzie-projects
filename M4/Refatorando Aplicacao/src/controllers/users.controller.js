const retrieveBookService = (bookId) => {
    const book = books.find((book) => book.id === bookId);
    return book;
  };
  
  const createBookController = (req, res) => {
    const [status, data] = createBookService(req.body);
    return res.status(status).json(data);
  };
  
  const listBooksController = (req, res) => {
    return res.status(200).json(books);
  };
  
  const retrieveBookController = (req, res) => {
    const book = retrieveBookService(req.params.id);
  
    return res.status(200).json(book);
  }; 

  export {retrieveBookService, createBookController, listBooksController, retrieveBookController}