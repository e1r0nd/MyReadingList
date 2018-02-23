#### Revision: `rev:v2.1.0`

*Synonims:*
* "Want to Read" tab - Wish-list
* "Read Now" tab - Read
* "Favorites" tab - Favorites 
* "Read" tab - Done
* "Don't want to Read" tab - Blame-list
* "Statistics" tab - Statistics
* "Book(s)" - book(s) or article(s)

**PBS-UC-01** View Wish-list tab `rev:v2.1.0`

1. Open main page
3. Displays the list of books in the wish list in Custom order

**PBS-UC-02** View Read tab `rev:2.1.0`

1. Open main page
2. Open Read Now tab
3. Displays the list of currently reading books
4. Books are ordered in Custom order

**PBS-UC-03** View Favorites tab `rev:2.1.0`

1. Open main page
2. Open Favorites tab
3. Displays the list of favorites books, ordered by the end date

**PBS-UC-04** View Done tab `rev:2.1.0`

1. Open main page
2. Open Read tab
3. Displays the list of already read books, ordered by the end date
4. Rating for each book is visible

**PBS-UC-05** View Blame-list tab `rev:2.1.0`

1. Open main page
2. Open Blame-list tab
3. Displays the list of books don't want to read
4. The order might be any

**PBS-UC-06** View Statistics tab `rev:2.1.0`

1. Open main page
2. Open Statistics tab
3. Displays the Statistics of books: list of month with quantity of books for each

**PBS-UC-07** Change language `rev:2.1.0`

1. Open main page
2. Select another language
3. Displays all messages (except user's) in another language

**PBS-UC-08** Add Book `rev:2.1.0`

1. Open main page
2. Select Add new book
3. Fill the Title field (length 1-255 symbols UTF-8)
4. Fill the Author field (length 1-128 symbols UTF-8)
5. Select Tag "Fiction"
6. Fill the Mark field [Reading/1/2/3/Favorite/Want to read/Don't want to read]
7. Fill the Start date field (dd.mm.YYYY)
8. Switch to Quotes: Fill the Quote field (length 1-4096 symbols UTF-8)

* New Book added in the list according to the sort rule (Reading - Read; 1/2/3 - Done; Favorite - Favorites; Want to Read - Wish-list; Don't want to read - Blame-list)
* New Book hasn't been added on error, the list of books stayed in the previous state
* New Book hasn't been added with an existing title, the info massage displayed, the list of books stayed in the previous state
* New Book added with the current date if date was not provided for [1/2/3/Favorite]

**PBS-UC-09** Change Book's state on Read tab `rev:2.1.0`

1. Open main page
2. Open Read tab
3. Click on the selected book - Modal Popup is opened
4. Fill the Author field (length 1-128 symbols UTF-8)
5. Fill the Title field (length 1-255 symbols UTF-8)
6. Fill the Quote field (length 1-4096 symbols UTF-8) (out of scope)
7. Fill the Mark field [Reading/1/2/3/Favorite/Want to read/Don't want to read]
8. Fill the Start date field (dd.mm.YYYY)
* Selected Book renamed
* Selected Book hasn't been renamed on error, the book's parameters stayed in the previous state
* Selected Book hasn't been added with an existing title, the info massage displayed, the list of books stayed in the previous state
* Selected Book renamed with the current date if date was not provided for [1/2/3/Favorite]

**PBS-UC-10** Change Book's state on Favorites tab `rev:2.1.0`

1. Open main page
2. Open Favorites tab
3. Click on the selected book - Modal Popup is opened
4. Fill the Author field (length 1-128 symbols UTF-8)
5. Fill the Title field (length 1-255 symbols UTF-8)
6. Fill the Quote field (length 1-4096 symbols UTF-8) (out of scope)
7. Fill the Mark field [Reading/1/2/3/Favorite/Want to read/Don't want to read]
8. Fill the Start date field (dd.mm.YYYY)
* Selected Book renamed
* Selected Book hasn't been renamed on error, the book's parameters stayed in the previous state
* Selected Book hasn't been added with an existing title, the info massage displayed, the list of books stayed in the previous state
* Selected Book renamed with the current date if date was not provided for [1/2/3/Favorite]

**PBS-UC-11** Change Book's state on Done tab `rev:2.1.0`

1. Open main page
2. Open Done tab
3. Click on the selected book - Modal Popup is opened
4. Fill the Author field (length 1-128 symbols UTF-8)
5. Fill the Title field (length 1-255 symbols UTF-8)
6. Fill the Quote field (length 1-4096 symbols UTF-8) (out of scope)
7. Fill the Mark field [Reading/1/2/3/Favorite/Want to read/Don't want to read]
8. Fill the Start date field (dd.mm.YYYY)
* Selected Book renamed
* Selected Book hasn't been renamed on error, the book's parameters stayed in the previous state
* New Book hasn't been added with an existing title, the info massage displayed, the list of books stayed in the previous state
* Selected Book renamed with the current date if date was not provided for [1/2/3/Favorite]

**PBS-UC-12** Change Book's state on Blame-list tab `rev:2.1.0`

1. Open main page
2. Open Blame-list tab
3. Click on the selected book - Modal Popup is opened
4. Fill the Author field (length 1-128 symbols UTF-8)
5. Fill the Title field (length 1-255 symbols UTF-8)
6. Fill the Quote field (length 1-4096 symbols UTF-8) (out of scope)
7. Fill the Mark field [Reading/1/2/3/Favorite/Want to read/Don't want to read]
8. Fill the Start date field (dd.mm.YYYY)
* Selected Book renamed
* Selected Book hasn't been renamed on error, the book's parameters stayed in the previous state
* New Book hasn't been added with an existing title, the info massage displayed, the list of books stayed in the previous state
* Selected Book renamed with the current date if date was not provided for [1/2/3/Favorite]

**PBS-UC-13** Remove Book on Wish-list tab `rev:2.1.0`

1. Open main page
2. Select Remove on the selected book
* Selected Book removed from the list
* Selected Book hasn't been removed on error, the list stayed in the previous state

**PBS-UC-14** Remove Book on Read tab `rev:2.1.0`

1. Open main page
2. Open Read tab
3. Select Remove on the selected book
* Selected Book removed from the list
* Selected Book hasn't been removed on error, the list stayed in the previous state

**PBS-UC-15** Remove Book on Favorites tab `rev:2.1.0`

1. Open main page
2. Open Favorites tab
3. Select Remove on the selected book
* Selected Book removed from the list
* Selected Book hasn't been removed on error, the list stayed in the previous state

**PBS-UC-16** Remove Book on Done tab `rev:2.1.0`

1. Open main page
2. Open Done tab
3. Select Remove on the selected book
* Selected Book removed from the list
* Selected Book hasn't been removed on error, the list stayed in the previous state

**PBS-UC-18** Remove Book on Blame-list tab `rev:2.1.0`

1. Open main page
2. Open Blame-list tab
3. Select Remove on the selected book
* Selected Book removed from the list
* Selected Book hasn't been removed on error, the list stayed in the previous state
  
**PBS-UC-19** Change order on Wish-list tab `rev:2.1.0`

1. Open main page
2. Change order on the selected book
* Selected Book changed its place in the list
* Selected Book's order hasn't been changed on error, the list stayed in the previous state

**PBS-UC-20** Add Article `rev:2.1.0`

1. Open main page
2. Select Add new article
3. Fill the Title field (length 1-255 symbols UTF-8)
4. Fill the URL field (length 1-128 symbols UTF-8)
5. Select Tag "Fiction"
6. Fill the Mark field [Reading/1/2/3/Favorite/Want to read/Don't want to read]
7. Fill the Start date field (dd.mm.YYYY)
8. Switch to Quotes: Fill the Quote field (length 1-4096 symbols UTF-8)
* New Article added in the list according to the sort rule (Reading - Read; 1/2/3 - Done; Favorite - Favorites; Want to Read - Wish-list; Don't want to read - Blame-list)
* New Article hasn't been added on error, the list of books stayed in the previous state
* New Article hasn't been added with an existing title, the info massage displayed, the list of books stayed in the previous state
* New Article added with the current date if date was not provided for [1/2/3/Favorite]
