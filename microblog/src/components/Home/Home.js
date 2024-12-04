import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../../features/posts/postsSlice';
import TitleList from './TitleList';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <TitleList />
    </div>
  );
};

export default Home;