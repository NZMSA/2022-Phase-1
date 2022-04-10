# C# Assignment

| Please fork the following Repo [2022-Phase-1-CSharp-Assignment](https://github.com/NZMSA/2022-Phase-1-CSharp-Assignment) |
| --- |


Welcome to the C# Workshop. The goal for this assignment is for you to get familar with C# concepts and have some hands on experience with C# and dotnet. You will be completing the missing code in this CLI application and fix up the code to pass the existing unit tests. If you haven't already, please complete [Microsoft Learn Path](https://docs.microsoft.com/en-us/learn/paths/csharp-first-steps/) before attempting this workshop.

Pre-requisites:
* .NET 6 - [Download](https://dotnet.microsoft.com/en-us/download)
* Any text editor e.g. [Visual Studio Code](https://code.visualstudio.com/) 
  * [Visual Studio Community 2022](https://visualstudio.microsoft.com/) or [Rider](https://www.jetbrains.com/rider/)
* [Microsoft Learn Path](https://docs.microsoft.com/en-us/learn/paths/csharp-first-steps/)

## Assignment

You should not need to edit the following files
* Any unit tests located in `LibraryService.Tests`
* The GitHub workflows located in `.github/workflows`

The following is the recommended steps to take for this assignment.

### Exercise 1: 

Implement the missing code inside `LibraryService/Book.cs`

The tests in `LibraryService.Tests/LibraryService_Book.cs` should pass after you have implemented the missing code.

There are a total of 2 tests that fail in the `LibraryService_Book.cs` file.

Helpful details:
* A book can only be borrowed to a person if the book is available.
* A book can only be returned by the person who borrowed it.
* A book can only be borrowed to a single person.

### Exercise 2:

Implement the missing code inside `LibraryService/LibraryService.cs`

The 5 tests in `LibraryService.Tests/LibraryService_Library.cs` should pass after you have implemented the missing code.

There are a total of 8 tests that fail in the `LibraryService_Book.cs` file.

> Helpful details:
> * All the details in Exercise 1 apply to Exercise 2.
> * Items can be added, gotten, removed using the Library (proper exception handling).
> * A person can check out a item by `id` if the item is available.
> * A person can return a item by `id` if the item is borrowed by the person.
> * The isbn is the id for a book

### Exercise 3:

Implement the missing code inside `LibraryService/Video.cs`

The tests in `LibraryService.Tests/LibraryService_Video.cs` should pass after you have implemented the missing code.

There are a total of 2 tests that fail in the `LibraryService_Video.cs` file.
There are also a total of 3 tests that fail in the `LibraryService_Library.cs` file.

> Helpful details:
> * A video can only be borrowed to a person if the book is available.
> * A video can be borrowed a limited number of times based on `copies`
> * A video can only be returned by a person who has borrowed it.
> * A video can be borrowed again after someone has returned a copy.

## How to run

Running using dotnet cli is the recommended way to run the application.

**Run the CLI**
```
dotnet run --project ./LibraryService
```

Result:
```
Choose an option from the following list:
        p - Person
        a - Add Book
        v - Add Video
        d - Remove Item
        b - Borrow Item
        r - Return Item
Your option?
```


**Run the test suite**
```
dotnet test --no-restore --verbosity normal
```

By default this project should have 2 passing test and 12 failing tests
```
Failed!  - Failed:    12, Passed:     2, Skipped:     0, Total:    14, Duration: 39 ms
```