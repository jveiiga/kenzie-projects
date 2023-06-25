const verifyBookExistsMiddleware = (req, res, next) => {
    const book = books.find((book) => book.id === req.params.id);
  
    if (!book) {
      return res.status(404).json({ message: "Book not found." });
    }
  
    return next();
  };

  export default verifyBookExistsMiddleware