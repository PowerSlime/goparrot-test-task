export const getShelvesStore = (store) => store.shelves;

export const getShelve = (shelveName) => (store) => getShelvesStore(store)[shelveName];
