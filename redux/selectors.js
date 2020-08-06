export const getShelvesStore = (store) => store.shelves;

export const getShelve = (shelveName) => (store) => getShelvesStore(store)[shelveName];

export const getBooksOnShelves = (store) => {
    const shelves = getShelvesStore(store);
    return Object.entries(shelves || {}).reduce((accumulator, [, { books = [] }]) => {
        return accumulator.concat(books);
    }, []);
};
