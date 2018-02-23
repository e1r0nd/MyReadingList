#### Revision: `rev:v2.1.0`

**PBS-TC-01** View Wish-list tab `rev:v2.1.0`

_Precondition:_ none <br>
_Steps:_

1. Open page http://e1r0nd.github.io/PersonalBookShelf/

_Expected results:_<br>
The list of books in the wish list is displayed in Custom order

**PBS-TC-02** View Read tab `rev:v2.1.0`

_Precondition:_ PBS-TC-01<br>
_Steps:_

1. Open Read tab

_Expected results:_<br>
The list of currently reading books is displayed, ordered by the end date

**PBS-TC-03** View Favorites tab `rev:v2.1.0`

_Precondition:_ PBS-TC-01<br>
_Steps:_

1. Open Favorites tab

_Expected results:_<br>
The list of favorites books is displayed, ordered by the end date.

**PBS-TC-04** View Done tab `rev:v2.1.0`

_Precondition:_ PBS-TC-01<br>
_Steps:_

1. Open Done tab

_Expected results:_<br>
The list of already read books is displayed, ordered by the end date. Rating for each book is visible


**PBS-TC-05** View Blame-list tab `rev:v2.1.0`

_Precondition:_ PBS-TC-01<br>
_Steps:_

1. Open Blame-list tab

_Expected results:_<br>
The list of books don't want to read is displayed

**PBS-TC-06** View Statistics tab `rev:2.1.0`

_Precondition:_ PBS-TC-01<br>
_Steps:_

1. Open Statistics tab

_Expected results:_<br>
The Statistics is displayed. It contains the list of month (current year) with quantity of books for each month

**PBS-TC-07** Change language `rev:2.1.0`

_Precondition:_ PBS-TC-01<br>
_Steps:_

1. Select language "Russian"

_Expected results:_<br>
All messages (except user's) is displayed in Russian language

**PBS-TC-08** Add Book `rev:2.1.0`

_Precondition:_ PBS-TC-01<br>
_Steps:_

1. Select Add new book
2. Fill:
  * the Title field with "New Book"
  * the Author field with "Author A.B."
  * the Mark field "Reading"
  * the Start date with 13.02.1982
  * the Tag select "Fiction"
  * swith to Quote: the Quote field with "a little note here"
3. Fill:
  * the Title field with empty string/10 spaces
  * the Author field with empty string/10 spaces
  * leave Tag as is
  * leave the Mark as is
  * the Start date with "aa.nn.qwer"
  * swith to Quote: the Quote field with empty string/10 spaces
4. Fill:
  * the Title field with 300 symbols string
  * the Author field with 300 symbols string
  * leave Tag as is
  * leave the Mark as is
  * leave the Start date as is
  * swith to Quote: the Quote field with 5000 symbols string
5. Save book

_Expected results:_

1. New Book with Author "Author A.B. ", Title "New Book", Quote "a little note here", Mark "Reading", Start date "13.02.1982" added in the list "Read"
2. New Book hasn't been added, the list of books stayed in the previous state, a field [Author/Title/Start date] with error state highlighted
3. The next symbol after [length] in a field [Author/Title/Quote] cannot be added

**PBS-TC-09** Change Book's state on Wish-list tab `rev:2.1.0`

_Precondition:_ PBS-TC-01<br>
_Steps:_

1. Click on the selected book - Modal Popup is opened
2. Fill:
  * the Author field with "Dichter Z.X."
  * the Title field with "Neues Buch"
  * the Quote field with "ein kurz Text ist here"
  * the Mark field "1"
  * the Start date with 01.01.2015
3. Fill:
  * the Author field with empty string/10 spaces
  * the Title field with empty string/10 spaces
  * the Quote field with empty string/10 spaces
  * leave the Mark as is
  * the Start date with "aa.nn.qwer"
4. Fill:
  * the Author field with 300 symbols string
  * the Title field with 300 symbols string
  * the Quote field with 5000 symbols string
  * leave the Mark as is
  * leave the Start date as is
5. Save book

_Expected results:_

1. Selected Book renamed with Author "Dichter Z.X.", Title "Neues Buch", Quote "ein kurz Text ist here", Mark "1", Start date "01.01.2015", moved to Done tab and has "1 star"
2. Selected Book hasn't been renamed, the list of books stayed in the previous state, a field [Author/Title/Start date] with error state highlighted
3. The next symbol after [length] in a field [Author/Title/Quote] cannot be added

**PBS-TC-10** Change Book's state on Read tab `rev:2.1.0`

_Precondition:_ PBS-TC-02<br>
_Steps:_

1. Click on the selected book - Modal Popup is opened
2. Fill:
  * the Author field with "Dichter Z.X."
  * the Title field with "Neues Buch"
  * the Quote field with "ein kurz Text ist here" (out of scope)
  * the Mark field "1"
  * the Start date with 01.01.2015
3. Fill:
  * the Author field with empty string/10 spaces
  * the Title field with empty string/10 spaces
  * the Quote field with empty string/10 spaces (out of scope)
  * leave the Mark as is
  * the Start date with "aa.nn.qwer"
4. Fill:
  * the Author field with 300 symbols string
  * the Title field with 300 symbols string
  * the Quote field with 5000 symbols string (out of scope)
  * leave the Mark as is
  * leave the Start date as is
5. Save book

_Expected results:_

1. Selected Book renamed with Author "Dichter Z.X.", Title "Neues Buch", Quote "ein kurz Text ist here", Mark "1", Start date "01.01.2015", moved to Done tab
2. Selected Book hasn't been renamed, the list of books stayed in the previous state, a field [Author/Title/Start date] with error state highlighted
3. The next symbol after [length] in a field [Author/Title/Quote] cannot be added

**PBS-TC-11** Change Book's state on Favorites tab `rev:2.1.0`

_Precondition:_ PBS-TC-03<br>
_Steps:_

1. Click on the selected book - Modal Popup is opened
2. Fill:
  * the Author field with "Dichter Z.X."
  * the Title field with "Neues Buch"
  * the Quote field with "ein kurz Text ist here" (out of scope)
  * the Mark field "1"
  * the Start date with 01.01.2015
3. Fill:
  * the Author field with empty string/10 spaces
  * the Title field with empty string/10 spaces
  * the Quote field with empty string/10 spaces (out of scope)
  * leave the Mark as is
  * the Start date with "aa.nn.qwer"
4. Fill:
  * the Author field with 300 symbols string
  * the Title field with 300 symbols string
  * the Quote field with 5000 symbols string (out of scope)
  * leave the Mark as is
  * leave the Start date as is
5. Save book

_Expected results:_

1. Selected Book renamed with Author "Dichter Z.X.", Title "Neues Buch", Quote "ein kurz Text ist here", Mark "1", Start date "01.01.2015", moved to Done tab
2. Selected Book hasn't been renamed, the list of books stayed in the previous state, a field [Author/Title/Start date] with error state highlighted
3. The next symbol after [length] in a field [Author/Title/Quote] cannot be added

**PBS-TC-12** Change Book's state on Done tab `rev:2.1.0`

_Precondition:_ PBS-TC-04<br>
_Steps:_

1. Click on the selected book - Modal Popup is opened
2. Fill:
  * the Author field with "Dichter Z.X."
  * the Title field with "Neues Buch"
  * the Quote field with "ein kurz Text ist here" (out of scope)
  * the Mark field "Favorite"
  * the Start date with 01.01.2015
3. Fill:
  * the Author field with empty string/10 spaces
  * the Title field with empty string/10 spaces
  * the Quote field with empty string/10 spaces (out of scope)
  * leave the Mark as is
  * the Start date with "aa.nn.qwer"
4. Fill:
  * the Author field with 300 symbols string
  * the Title field with 300 symbols string
  * the Quote field with 5000 symbols string (out of scope)
  * leave the Mark as is
  * leave the Start date as is
5. Save book

_Expected results:_

1. Selected Book renamed with Author "Dichter Z.X.", Title "Neues Buch", Quote "ein kurz Text ist here", Mark "Reading", Start date "01.01.2015", moved to Favorite tab
2. Selected Book hasn't been renamed, the list of books stayed in the previous state, a field [Author/Title/Start date] with error state highlighted
3. The next symbol after [length] in a field [Author/Title/Quote] cannot be added

**PBS-TC-13** Change Book's state on Blame-list tab `rev:2.1.0`

_Precondition:_ PBS-TC-05<br>
_Steps:_

1. Select Rename on the selected book
2. Fill:
  * the Author field with "Dichter Z.X."
  * the Title field with "Neues Buch"
  * the Quote field with "ein kurz Text ist here" (out of scope)
  * the Mark field "1"
  * the Start date with 01.01.2015
3. Fill:
  * the Author field with empty string/10 spaces
  * the Title field with empty string/10 spaces
  * the Quote field with empty string/10 spaces (out of scope)
  * leave the Mark as is
  * the Start date with "aa.nn.qwer"
4. Fill:
  * the Author field with 300 symbols string
  * the Title field with 300 symbols string
  * the Quote field with 5000 symbols string (out of scope)
  * leave the Mark as is
  * leave the Start date as is
5. Save book

_Expected results:_

1. Selected Book renamed with Author "Dichter Z.X.", Title "Neues Buch", Quote "ein kurz Text ist here", Mark "1", Start date "01.01.2015", moved to Done tab
2. Selected Book hasn't been renamed, the list of books stayed in the previous state, a field [Author/Title/Start date] with error state highlighted
3. The next symbol after [length] in a field [Author/Title/Quote] cannot be added

**PBS-TC-14** Remove Book on Wish-list tab `rev:2.1.0`

_Precondition:_ PBS-TC-01<br>
_Steps:_

1. Select Remove on the selected book

_Expected results:_<br>
Selected book removed from the list

**PBS-TC-15** Remove Book on Read tab `rev:2.1.0`

_Precondition:_ PBS-TC-02<br>
_Steps:_

1. Select Remove on the selected book

_Expected results:_<br>
Selected book removed from the list

**PBS-TC-16** Remove Book on Favorites tab `rev:2.1.0`

_Precondition:_ PBS-TC-03<br>
_Steps:_

1. Select Remove on the selected book

_Expected results:_<br>
Selected book removed from the list

**PBS-TC-17** Remove Book on Done tab `rev:2.1.0`

_Precondition:_ PBS-TC-04<br>
_Steps:_

1. Select Remove on the selected book

_Expected results:_<br>
Selected book removed from the list

**PBS-TC-18** Remove Book on Blame-list tab `rev:2.1.0`

_Precondition:_ PBS-TC-05<br>
_Steps:_

1. Select Remove on the selected book

_Expected results:_<br>
Selected book removed from the list

**PBS-TC-19** Change order Book on Wish-list tab `rev:2.1.0`

_Precondition:_ PBS-TC-01<br>
_Steps:_

1. Change order of the selected book

_Expected results:_<br>
Selected book changed its position in the list

**PBS-TC-20** Add Article `rev:2.1.0`

_Precondition:_ PBS-TC-01<br>
_Steps:_

1. Select Add new book
2. Fill:
  * the Title field with "New Article"
  * the URL field with "http://google.com"
  * the Mark field "Reading"
  * the Tag select "Fiction"
  * the Start date with 13.02.1982
  * swith to Quote: the Quote field with "a little note here"
3. Fill:
  * the Title field with empty string/10 spaces
  * the URL field with empty string/10 spaces
  * leave Tag as is
  * leave the Mark as is
  * the Start date with "aa.nn.qwer"
  * swith to Quote: the Quote field with empty string/10 spaces
4. Fill:
  * the Title field with 300 symbols string
  * the URL field with 300 symbols string
  * leave Tag as is
  * leave the Mark as is
  * leave the Start date as is
  * swith to Quote: the Quote field with 5000 symbols string
5. Save changes

_Expected results:_

1. New Article with Title "New Article", URL "http://google.com", Quote "a little note here", Mark "Reading",Tag "Fiction", Start date "13.02.1982" added in the list "Read"
2. New Article hasn't been added, the list of books stayed in the previous state, a field [Title/URL/Start date] with error state highlighted
3. The next symbol after [length] in a field [Title/URL/Quote] cannot be added
