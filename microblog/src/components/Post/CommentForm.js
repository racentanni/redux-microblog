import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';

const CommentForm = ({ onAddComment }) => {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddComment({ text: commentText });
    setCommentText('');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Add a comment"
          fullWidth
          margin="normal"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">Add Comment</Button>
      </form>
    </Container>
  );
};

export default CommentForm;