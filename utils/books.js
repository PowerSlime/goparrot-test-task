export const getAvailableBooks = (books, usedIds) => {
    return books.filter((book) => !usedIds.includes(book.id));
};
