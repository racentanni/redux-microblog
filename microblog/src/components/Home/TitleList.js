import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { List, ListItemButton, ListItemText, Typography, IconButton } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { votePost } from '../../features/posts/postsSlice';

const TitleList = () => {
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  const handleVote = (id, vote) => {
    dispatch(votePost({ id, vote }));
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>Blog Posts</Typography>
      <List>
        {posts.map(post => (
          <ListItemButton
            component={Link}
            to={`/${post.id}`}
            key={post.id}
          >
            <ListItemText primary={post.title} secondary={post.description} />
            <IconButton onClick={() => handleVote(post.id, 'up')}>
              <ThumbUpIcon />
            </IconButton>
            <IconButton onClick={() => handleVote(post.id, 'down')}>
              <ThumbDownIcon />
            </IconButton>
            <Typography variant="body2">{post.votes}</Typography>
          </ListItemButton>
        ))}
      </List>
    </div>
  );
};

export default TitleList;

