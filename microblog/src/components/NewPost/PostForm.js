import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container } from '@mui/material';

const PostForm = ({ onSubmit, initialData = {} }) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [body, setBody] = useState(initialData.body || '');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, body });
    navigate('/');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Description"
          fullWidth
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          label="Body"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">Save</Button>
        <Button variant="contained" color="secondary" onClick={() => navigate('/')}>Cancel</Button>
      </form>
    </Container>
  );
};

export default PostForm;