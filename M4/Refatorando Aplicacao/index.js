const getLastId = () => {
  
  const sortedBooks = books.sort(
    (bookA, bookB) => parseInt(bookA.id) > parseInt(bookB.id)
  );

  if (!sortedBooks.length) {
    return 1;
  }

  const lastId = sortedBooks.at(-1).id;

  return parseInt(lastId) + 1;
};

export default getLastId









