# Google Books Finder :closed_book:

## Built with: ## 
# [React](https://reactjs.org/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react) [![CircleCI Status](https://circleci.com/gh/facebook/react.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/facebook/react) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

React is a JavaScript library for building user interfaces.

* **Declarative:** React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.
* **Component-Based:** Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
* **Learn Once, Write Anywhere:** We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using [React Native](https://facebook.github.io/react-native/).

[Learn how to use React in your own project](https://reactjs.org/docs/getting-started.html).
## **What is it:** :interrobang:

```
A search engine that uses the Google Books API by taking the input from the search bar and using it as the query to the get request.
It will then display ten results on the screen with View button and a Save button.
When you click the save button it will disable the button and show that it was saved while sending an alert saying that it was saved to the DB. 
Now the saved page will read from the DB all of the saved books.
```

## **How To:** :bulb:


1. To utilize the search engine type the title of a book or the name of an author
2. Then choose to click the **VIEW** button or the **SAVE** button
```
View - goes to the link for Google Books with more info on the book
Save - will save the book to the Database and it will now appear on the saved page of the website

```
3. You can now visit the saved page by clicking on the saved navbar button
4. If you have saved books they will display here if not you will get a message saying that you have not saved any books
5. Here you can once again click **VIEW** or you can click **DELETE** and it will remove the book from the page and the database
