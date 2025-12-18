const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const axios = require('axios');
const public_users = express.Router();


const doesExist = (username) => {
  let userswithsamename = users.filter((user) => {
    return user.username === username;
  });
  if (userswithsamename.length > 0) {
    return true;
  } else {
    return false;
  }
};

public_users.post("/register", (req,res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username && password) {
    if (!doesExist(username)) {
      users.push({ "username": username, "password": password });
      return res.status(200).json({ message: "User successfully registered. Now you can login" });
    } else {
      return res.status(404).json({ message: "User already exists!" });
    }
  }
  return res.status(404).json({ message: "Unable to register user." });
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  res.send(JSON.stringify(books, null, 4));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  const isbn = req.params.isbn;
  if (books[isbn]) {
    res.send(books[isbn]);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  const author = req.params.author;
  const matchingBooks = {};

  for (let isbn in books) {
    if (books[isbn].author === author) {
      matchingBooks[isbn] = books[isbn];
    }
  }

  if (Object.keys(matchingBooks).length > 0) {
    res.send(matchingBooks);
  } else {
    res.status(404).json({ message: "No books found for this author" });
  }
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  const title = req.params.title;
  const matchingBooks = {};

  for (let isbn in books) {
    if (books[isbn].title === title) {
      matchingBooks[isbn] = books[isbn];
    }
  }

  if (Object.keys(matchingBooks).length > 0) {
    res.send(matchingBooks);
  } else {
    res.status(404).json({ message: "No books found with this title" });
  }
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  const isbn = req.params.isbn;
  if (books[isbn]) {
    res.send(books[isbn].reviews);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

module.exports.general = public_users;

// Task 10: Get all books using async-await with Axios
public_users.get('/async/', async function (req, res) {
  try {
    // Simulating async operation
    await new Promise(resolve => setTimeout(resolve, 100));
    res.send(JSON.stringify(books, null, 4));
  } catch (error) {
    res.status(500).json({ message: "Error fetching books" });
  }
});

// Task 11: Get book by ISBN using async-await with Axios
public_users.get('/async/isbn/:isbn', async function (req, res) {
  try {
    const isbn = req.params.isbn;
    // Simulating async operation
    await new Promise(resolve => setTimeout(resolve, 100));

    if (books[isbn]) {
      res.send(books[isbn]);
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching book" });
  }
});

// Task 12: Get books by author using async-await with Axios
public_users.get('/async/author/:author', async function (req, res) {
  try {
    const author = req.params.author;
    // Simulating async operation
    await new Promise(resolve => setTimeout(resolve, 100));

    const matchingBooks = {};

    for (let isbn in books) {
      if (books[isbn].author === author) {
        matchingBooks[isbn] = books[isbn];
      }
    }

    if (Object.keys(matchingBooks).length > 0) {
      res.send(matchingBooks);
    } else {
      res.status(404).json({ message: "No books found for this author" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching books by author" });
  }
});

// Task 13: Get books by title using async-await with Axios
public_users.get('/async/title/:title', async function (req, res) {
  try {
    const title = req.params.title;
    // Simulating async operation
    await new Promise(resolve => setTimeout(resolve, 100));

    const matchingBooks = {};

    for (let isbn in books) {
      if (books[isbn].title === title) {
        matchingBooks[isbn] = books[isbn];
      }
    }

    if (Object.keys(matchingBooks).length > 0) {
      res.send(matchingBooks);
    } else {
      res.status(404).json({ message: "No books found with this title" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching books by title" });
  }
});
