import React from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../features/posts/postsSlice';
import PostForm from './PostForm';

const NewPost = () => {
  const dispatch = useDispatch();

  const handleAddPost = (post) => {
    dispatch(addPost(post));
  };

  return (
    <div>
      <PostForm onSubmit={handleAddPost} />
    </div>
  );
};

export default NewPost;