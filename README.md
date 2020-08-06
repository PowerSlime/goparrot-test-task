Let’s imagine we are organizing our simple digital home library.

We will have the following app menu structure: Books Lists, Shelves, Shelf with Review.

We should have an impressive list of books of different categories, genres. ( we can have actual API calls to some online services such as https://github.com/toddmotto/public-apis#books , or we can mock our own date, it doesn't matter)

One the home page of our app, we should have a list of available books, by clicking on the book from the list we should see its details.

We can have an option to add the selected book to a shelf, but there is a condition we cannot add the same book twice. Also, if our shelf has assigned categories, we cannot add a book to it if it’s not in the same category.

As we know already, we will have shelves. Also, we need a way to create them and add books to it. We don’t care about persisting data (on page reload). However if you can implement this, it will get some bonus points. Also, we can add a category for the shelf, and this will allow adding only specific categories to it.

And what’s the point of this if we cannot review things, make a review component, which will allow you to leave some notes to our shelf, and rate it. Use this component in book details, and in shelf view. Besides React’s composition abilities, try using some of Advanced React Patterns on this one.

Let’s not forget about styling since we are front-end developers and also as long we didn’t get any mocks from a designer; we are free to use any UI kit we want(ant.design, semantic-ui or any other). One of the requirements for our UI, however, is to make a way of changing it from day mode to night mode.
