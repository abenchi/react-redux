import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import Comments from './Comments';

export default class Single extends Component {
  render = () => {
    const {posts, increment, comments, match, addComment, removeComment} = this.props;
    const index = posts.findIndex(post => post.code === match.params.post_code)

    return (
      <div className ='single-photo'>
        <Photo key= {index} index={index} post={posts[index]} increment = {increment} comments = {comments}/>
        <Comments comments = {comments[match.params.post_code]|| []} addComment={addComment} removeComment={removeComment} postCode = {match.params.post_code}/>
      </div>
    )
  }
}

Single.PropTypes = {
  posts: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired,
  increment: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  removeComment: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
}