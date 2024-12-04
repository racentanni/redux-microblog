import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch comments for a specific post
export const fetchComments = createAsyncThunk('comments/fetchComments', async (postId) => {
  const response = await axios.get(`http://localhost:5001/api/posts/${postId}/comments`);
  return { postId, comments: response.data };
});

// Async thunk to add a comment to a specific post
export const addComment = createAsyncThunk('comments/addComment', async ({ postId, comment }) => {
  const response = await axios.post(`http://localhost:5001/api/posts/${postId}/comments`, comment);
  return { postId, comment: response.data };
});

// Async thunk to delete a comment from a specific post
export const deleteComment = createAsyncThunk('comments/deleteComment', async ({ postId, commentId }) => {
  await axios.delete(`http://localhost:5001/api/posts/${postId}/comments/${commentId}`);
  return { postId, commentId };
});

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.fulfilled, (state, action) => {
        state[action.payload.postId] = action.payload.comments;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        if (!state[action.payload.postId]) {
          state[action.payload.postId] = [];
        }
        state[action.payload.postId].push(action.payload.comment);
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state[action.payload.postId] = state[action.payload.postId].filter(comment => comment.id !== action.payload.commentId);
      });
  },
});

export default commentsSlice.reducer;