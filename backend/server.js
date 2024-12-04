const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

let posts = [
  { id: '1', title: 'Test Blog', description: 'This is a test blog', body: 'This is the body of the test blog', votes: 0 }
];

let comments = [
  { id: '1', postId: '1', text: 'This is a comment' }
];

// Fetch all posts
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

// Add a new post
app.post('/api/posts', (req, res) => {
  const newPost = { ...req.body, id: Date.now().toString(), votes: 0 };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// Delete a post
app.delete('/api/posts/:id', (req, res) => {
  const { id } = req.params;
  posts = posts.filter(post => post.id !== id);
  comments = comments.filter(comment => comment.postId !== id);
  res.status(204).end();
});

// Fetch comments for a post
app.get('/api/posts/:postId/comments', (req, res) => {
  const { postId } = req.params;
  const postComments = comments.filter(comment => comment.postId === postId);
  res.json(postComments);
});

// Add a comment to a post
app.post('/api/posts/:postId/comments', (req, res) => {
  const { postId } = req.params;
  const newComment = { ...req.body, id: Date.now().toString(), postId };
  comments.push(newComment);
  res.status(201).json(newComment);
});

// Delete a comment
app.delete('/api/posts/:postId/comments/:commentId', (req, res) => {
  const { commentId } = req.params;
  comments = comments.filter(comment => comment.id !== commentId);
  res.status(204).end();
});

// Vote on a post
app.post('/api/posts/:id/vote', (req, res) => {
  const { id } = req.params;
  const { vote } = req.body; // vote should be either 'up' or 'down'
  const post = posts.find(post => post.id === id);
  if (post) {
    if (vote === 'up') {
      post.votes += 1;
    } else if (vote === 'down') {
      post.votes -= 1;
    }
    res.json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
