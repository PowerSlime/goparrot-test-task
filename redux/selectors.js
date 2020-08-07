export const getShelvesStore = (store) => store.shelves;

export const getShelf = (shelfName) => (store) => getShelvesStore(store)[shelfName];

export const getBooksOnShelves = (store) => {
    const shelves = getShelvesStore(store);
    return Object.entries(shelves || {}).reduce((accumulator, [, { books = [] }]) => {
        return accumulator.concat(books);
    }, []);
};

export const getTheme = (store) => store.theme;
