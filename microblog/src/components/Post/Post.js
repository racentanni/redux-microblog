import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPost, deletePost } from '../../features/posts/postsSlice';
import { fetchComments, addComment, deleteComment } from '../../features/comments/commentsSlice';
import PostDisplay from './PostDisplay';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const Post = () => {
  const { postId } = useParams();
  const post = useSelector(state => state.posts.find(p => p.id === postId));
  const comments = useSelector(state => state.comments[postId] || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPost(postId));
    dispatch(fetchComments(postId));
  }, [dispatch, postId]);

  const handleDeletePost = () => {
    dispatch(deletePost(postId)).then(() => {
      navigate('/');
    });
  };

  const handleAddComment = (comment) => {
    dispatch(addComment({ postId, comment }));
  };

  const handleDeleteComment = (commentId) => {
    dispatch(deleteComment({ postId, commentId }));
  };

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <PostDisplay post={post} onDelete={handleDeletePost} onUpdate={(updatedPost) => dispatch(updatePost({ id: postId, post: updatedPost }))} />
      <CommentList comments={comments} onDeleteComment={handleDeleteComment} />
      <CommentForm onAddComment={handleAddComment} />
    </div>
  );
};

export default Post;