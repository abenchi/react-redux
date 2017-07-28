import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {removeComment} from '../store/actions/actionCreators'

function RenderComment({text, user, removeComment, index, postCode}) {

  const handleRemove = () => {
    removeComment(postCode, index);
  }

  return (
    <div className='comment'>
      <p>
        <strong>
          {user}
        </strong>
        {text}
        <button className='remove-comment' onClick= {handleRemove}>&times;</button>
      </p>
    </div>
  )
}

RenderComment.propTypes = {
  text: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  removeComment: PropTypes.func.isRequired,
  postCode: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}

export default class Comments extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

    const {addComment, postCode} = this.props;
    
    const user = this.refs.user.value;
    const comment = this.refs.comment.value;

    addComment(postCode, user, comment);

    this.refs.commentForm.reset();
  }
  render = () => {
    const {comments, addComment, removeComment, postCode} = this.props;

    return (
      <div className='comments'>
        {comments && comments.map((comment, index) => (<RenderComment key={index} user={comment.user} text={comment.text} index= {index} postCode= {postCode} removeComment= {removeComment}/>))}
        <form action="" ref='commentForm' className='comment-form' onSubmit={this.handleSubmit}>
          <input type="text" ref='user' placeholder='user'/>
          <input type="text" ref='comment' placeholder='comment'/>
          <input type="submit" hidden/>
        </form>
      </div>
    )
  }
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
  addComment: PropTypes.func.isRequired,
  removeComment: PropTypes.func.isRequired,
  postCode: PropTypes.string.isRequired
}