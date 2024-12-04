import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch all posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get('http://localhost:5001/api/posts');
  return response.data;
});

// Async thunk to fetch a single post by ID
export const fetchPost = createAsyncThunk('posts/fetchPost', async (postId) => {
  const response = await axios.get(`http://localhost:5001/api/posts/${postId}`);
  return response.data;
});

// Async thunk to add a new post
export const addPost = createAsyncThunk('posts/addPost', async (post) => {
  const response = await axios.post('http://localhost:5001/api/posts', post);
  return response.data;
});

// Async thunk to update an existing post
export const updatePost = createAsyncThunk('posts/updatePost', async ({ id, post }) => {
  const response = await axios.put(`http://localhost:5001/api/posts/${id}`, post);
  return response.data;
});

// Async thunk to delete a post
export const deletePost = createAsyncThunk('posts/deletePost', async (postId) => {
  await axios.delete(`http://localhost:5001/api/posts/${postId}`);
  return postId;
});

// Async thunk to vote on a post
export const votePost = createAsyncThunk('posts/votePost', async ({ id, vote }) => {
  const response = await axios.post(`http://localhost:5001/api/posts/${id}/vote`, { vote });
  return response.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        return action.payload.sort((a, b) => b.votes - a.votes);
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        const index = state.findIndex(post => post.id === action.payload.id);
        if (index !== -1) {
          state[index] = action.payload;
        } else {
          state.push(action.payload);
        }
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.push(action.payload);
        state.sort((a, b) => b.votes - a.votes);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const index = state.findIndex(post => post.id === action.payload.id);
        if (index !== -1) {
          state[index] = action.payload;
        }
        state.sort((a, b) => b.votes - a.votes);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        return state.filter(post => post.id !== action.payload);
      })
      .addCase(votePost.fulfilled, (state, action) => {
        const index = state.findIndex(post => post.id === action.payload.id);
        if (index !== -1) {
          state[index] = action.payload;
        }
        state.sort((a, b) => b.votes - a.votes);
      });
  },
});

export default postsSlice.reducer;