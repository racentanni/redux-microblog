import React, { useState } from 'react';
import { Typography, Button, Container, IconButton } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import PostForm from '../NewPost/PostForm';
import { useDispatch } from 'react-redux';
import { votePost } from '../../features/posts/postsSlice';

const PostDisplay = ({ post, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleVote = (id, vote) => {
    dispatch(votePost({ id, vote }));
  };

  return (
    <Container>
      {isEditing ? (
        <PostForm initialData={post} onSubmit={onUpdate} />
      ) : (
        <>
          <Typography variant="h4" gutterBottom>{post.title}</Typography>
          <Typography variant="subtitle1" gutterBottom>{post.description}</Typography>
          <Typography variant="body1" gutterBottom>{post.body}</Typography>
          <IconButton onClick={() => handleVote(post.id, 'up')}>
            <ThumbUpIcon />
          </IconButton>
          <IconButton onClick={() => handleVote(post.id, 'down')}>
            <ThumbDownIcon />
          </IconButton>
          <Typography variant="body2">{post.votes}</Typography>
          <Button variant="contained" color="primary" onClick={() => setIsEditing(true)}>Edit</Button>
          <Button variant="contained" color="secondary" onClick={onDelete}>Delete</Button>
        </>
      )}
    </Container>
  );
};

export default PostDisplay;