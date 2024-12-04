import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home/Home';
import NewPost from './components/NewPost/NewPost';
import Post from './components/Post/Post';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewPost />} />
        <Route path="/:postId" element={<Post />} />
      </Routes>
    </Router>
  );
};

export default App;
