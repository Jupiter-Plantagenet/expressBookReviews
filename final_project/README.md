# Book Review Application - Complete Implementation

## Overview
This application implements a complete Book Review API with 14 tasks as specified in the project requirements. It includes general user routes, authenticated user routes, and async implementations.

## Features Implemented

### General User Routes (Tasks 1-6)
- ✅ Get all books (`GET /`)
- ✅ Get book by ISBN (`GET /isbn/:isbn`)
- ✅ Get books by author (`GET /author/:author`)
- ✅ Get books by title (`GET /title/:title`)
- ✅ Get book reviews (`GET /review/:isbn`)
- ✅ User registration (`POST /register`)

### Authenticated User Routes (Tasks 7-9)
- ✅ User login with JWT (`POST /customer/login`)
- ✅ Add/modify book reviews (`PUT /customer/auth/review/:isbn`)
- ✅ Delete book reviews (`DELETE /customer/auth/review/:isbn`)

### Async Implementations (Tasks 10-13)
- ✅ Async get all books (`GET /async/`)
- ✅ Async get book by ISBN (`GET /async/isbn/:isbn`)
- ✅ Async get books by author (`GET /async/author/:author`)
- ✅ Async get books by title (`GET /async/title/:title`)

## Installation & Setup

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Server:**
   ```bash
   npm start
   # or
   node index.js
   ```

3. **Server runs on:** `http://localhost:5000`

## API Endpoints

### Public Routes (No Authentication Required)
- `GET /` - Get all books
- `GET /isbn/:isbn` - Get book by ISBN
- `GET /author/:author` - Get books by author
- `GET /title/:title` - Get books by title
- `GET /review/:isbn` - Get reviews for a book
- `POST /register` - Register new user

### Authenticated Routes (Login Required)
- `POST /customer/login` - Login user
- `PUT /customer/auth/review/:isbn` - Add/modify review
- `DELETE /customer/auth/review/:isbn` - Delete review

### Async Routes
- `GET /async/` - Async get all books
- `GET /async/isbn/:isbn` - Async get book by ISBN
- `GET /async/author/:author` - Async get books by author
- `GET /async/title/:title` - Async get books by title

---

# SUBMISSION INSTRUCTIONS

## OPTION 1: AI-Graded Submission (cURL Commands)

Run the server and execute these commands to generate submission files:

### Tasks 1-5: General User Routes
```bash
# Task 1: Get all books
curl -X GET http://localhost:5000/ > submission_files/getallbooks.txt

# Task 2: Get book by ISBN
curl -X GET http://localhost:5000/isbn/1 > submission_files/getbooksbyISBN.txt

# Task 3: Get books by author
curl -X GET "http://localhost:5000/author/Jane Austen" > submission_files/getbooksbyauthor.txt

# Task 4: Get books by title
curl -X GET "http://localhost:5000/title/Pride and Prejudice" > submission_files/getbooksbytitle.txt

# Task 5: Get book reviews
curl -X GET http://localhost:5000/review/1 > submission_files/getbookreview.txt
```

### Tasks 6-9: Authentication Routes
```bash
# Task 6: Register user
curl -X POST http://localhost:5000/register -H "Content-Type: application/json" -d '{"username":"testuser","password":"testpass"}' > submission_files/register.txt

# Task 7: Login user (saves session)
curl -X POST http://localhost:5000/customer/login -H "Content-Type: application/json" -d '{"username":"testuser","password":"testpass"}' -c cookies.txt > submission_files/login.txt

# Task 8: Add/modify review
curl -X PUT http://localhost:5000/customer/auth/review/1 -H "Content-Type: application/json" -d '{"review":"Great book!"}' -b cookies.txt > submission_files/reviewadded.txt

# Task 9: Delete review
curl -X DELETE http://localhost:5000/customer/auth/review/1 -b cookies.txt > submission_files/deletereview.txt
```

### Tasks 10-13: Async Routes
```bash
# Task 10: Async get all books
curl -X GET http://localhost:5000/async/ > submission_files/task10.txt

# Task 11: Async get book by ISBN
curl -X GET http://localhost:5000/async/isbn/1 > submission_files/task11.txt

# Task 12: Async get books by author
curl -X GET "http://localhost:5000/async/author/Jane Austen" > submission_files/task12.txt

# Task 13: Async get books by title
curl -X GET "http://localhost:5000/async/title/Pride and Prejudice" > submission_files/task13.txt
```

### Task 14: GitHub Repository
```bash
# Verify forked repository
curl -s https://api.github.com/repos/YOUR_USERNAME/expressBookReviews | jq '.parent.full_name' > submission_files/githubrepo.txt
```

**Submit these files:**
- getallbooks.txt, getbooksbyISBN.txt, getbooksbyauthor.txt, getbooksbytitle.txt, getbookreview.txt
- register.txt, login.txt, reviewadded.txt, deletereview.txt
- task10.txt, task11.txt, task12.txt, task13.txt
- githubrepo.txt

---

## OPTION 2: Peer-Graded Submission (Postman Screenshots)

Use Postman to test each endpoint and save screenshots:

### Tasks 1-5: General Routes
- **1-getallbooks.png**: `GET http://localhost:5000/`
- **2-getbooksbyISBN.png**: `GET http://localhost:5000/isbn/1`
- **3-getbooksbyauthor.png**: `GET http://localhost:5000/author/Jane Austen`
- **4-getbooksbytitle.png**: `GET http://localhost:5000/title/Pride and Prejudice`
- **5-getbookreview.png**: `GET http://localhost:5000/review/1`

### Tasks 6-9: Authentication Routes
- **6-register.png**: `POST http://localhost:5000/register` (JSON body)
- **7-login.png**: `POST http://localhost:5000/customer/login` (JSON body)
- **8-reviewadded.png**: `PUT http://localhost:5000/customer/auth/review/1` (JSON body)
- **9-deletereview.png**: `DELETE http://localhost:5000/customer/auth/review/1`

### Tasks 10-13: Async Routes
- **task10.png**: `GET http://localhost:5000/async/`
- **task11.png**: `GET http://localhost:5000/async/isbn/1`
- **task12.png**: `GET http://localhost:5000/async/author/Jane Austen`
- **task13.png**: `GET http://localhost:5000/async/title/Pride and Prejudice`

### Task 14: GitHub Repository
Submit your forked repository URL for peer evaluation.

---

## GitHub Submission (Task 14)

1. **Commit your code:**
   ```bash
   git add .
   git commit -m "Complete Book Review Application implementation

   - All 14 tasks implemented
   - Authentication with JWT sessions
   - General user routes (books, reviews)
   - Authenticated user routes (register, login, reviews)
   - Async endpoints with Axios
   - Ready for submission"
   ```

2. **Push to GitHub:**
   ```bash
   git push origin main
   ```

3. **For Option 1:** Include the GitHub verification command output
4. **For Option 2:** Submit your repository URL

---

## Project Structure
```
expressBookReviews/
├── final_project/
│   ├── index.js                 # Main server file with authentication
│   ├── package.json            # Dependencies
│   ├── router/
│   │   ├── general.js          # General user routes (Tasks 1-6, 10-13)
│   │   ├── auth_users.js       # Authenticated routes (Tasks 7-9)
│   │   └── booksdb.js          # Book data
│   ├── submission_files/       # Generated submission files
│   ├── MANUAL_CURL_COMMANDS.txt # Complete cURL commands
│   └── README.md               # This file
```

## Technologies Used
- **Express.js** - Web framework
- **JWT** - JSON Web Tokens for authentication
- **express-session** - Session management
- **Axios** - HTTP client for async routes

## Testing
All endpoints have been implemented and tested according to work.md specifications. The application handles authentication, session management, and all CRUD operations for books and reviews.