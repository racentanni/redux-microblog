import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk'; // Correct import for thunk
import postsReducer from './features/posts/postsSlice';
import commentsReducer from './features/comments/commentsSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;