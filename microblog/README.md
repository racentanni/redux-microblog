

# Microblog

Microblog is a simple blogging application built with React, Redux, and Express. It allows users to create, edit, delete, and vote on blog posts. Users can also add and delete comments on individual posts.

## Features

- Create, edit, and delete blog posts
- Add and delete comments on posts
- Vote up or down on posts
- Posts are sorted by popularity (most votes first) on the homepage

## Technologies Used

- Frontend: React, Redux, Material-UI
- Backend: Express, Node.js
- State Management: Redux Toolkit
- HTTP Client: Axios

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- PostgreSQL or another SQL database

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/microblog.git
   cd microblog
   ```

2. Install dependencies for both the frontend and backend:

   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Set up the database:

   - Create a database named 

microblog

.
   - Run the SQL script to create tables and seed initial data:

     ```bash
     psql -d microblog -f path/to/data.sql
     ```

### Running the Application

1. Start the backend server:

   ```bash
   cd backend
   nodemon
   ```

   The backend server will run on `http://localhost:5001`.

2. Start the frontend development server:

   ```bash
   cd frontend
   npm start
   ```

   The frontend development server will run on `http://localhost:3000`.

### API Endpoints

- **GET /api/posts**: Fetch all posts
- **POST /api/posts**: Add a new post
- **DELETE /api/posts/:id**: Delete a post
- **GET /api/posts/:postId/comments**: Fetch comments for a post
- **POST /api/posts/:postId/comments**: Add a comment to a post
- **DELETE /api/posts/:postId/comments/:commentId**: Delete a comment
- **POST /api/posts/:id/vote**: Vote on a post (up or down)

### Project Structure

```
microblog/
├── backend/
│   ├── server.js
│   └── data.sql
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home/
│   │   │   │   ├── Home.js
│   │   │   │   └── TitleList.js
│   │   │   ├── NewPost/
│   │   │   │   ├── NewPost.js
│   │   │   │   └── PostForm.js
│   │   │   ├── Post/
│   │   │   │   ├── Post.js
│   │   │   │   ├── PostDisplay.js
│   │   │   │   ├── CommentForm.js
│   │   │   │   └── CommentList.js
│   │   ├── features/
│   │   │   ├── posts/
│   │   │   │   └── postsSlice.js
│   │   │   ├── comments/
│   │   │   │   └── commentsSlice.js
│   │   ├── store.js
│   │   ├── App.js
│   │   └── index.js
├── README.md
└── package.json
```

### Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

### License

This project is licensed under the MIT License.

---

This README provides an overview of the project, installation instructions, API endpoints, and the project structure. Feel free to customize it further based on your specific needs.