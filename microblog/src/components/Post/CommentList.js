import React from 'react';
import { Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CommentList = ({ comments, onDeleteComment }) => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>Comments</Typography>
      {comments.map(comment => (
        <div key={comment.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <Typography variant="body1" style={{ flexGrow: 1 }}>{comment.text}</Typography>
          <IconButton color="secondary" onClick={() => onDeleteComment(comment.id)}>
            <DeleteIcon />
          </IconButton>
        </div>
      ))}
    </div>
  );
};

export default CommentList;