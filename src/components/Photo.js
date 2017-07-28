import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import ReactAddonsCssTransitionGroup from 'react-addons-css-transition-group'

export default class Photo extends Component {
  render = () => {
    const {post, index, increment, comments} = this.props;

    return (
      <figure className='grid-figure'>
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            <img src={post.display_src} alt={post.caption} className="grid-photo"/>
          </Link>

          <ReactAddonsCssTransitionGroup
            transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <span key={post.likes} className="likes-heart">{post.likes}</span>
          </ReactAddonsCssTransitionGroup>
        </div>

        <figcaption>
          <p>
            {post.caption}
          </p>

          <div className="control-buttons"></div>
          <button className="likes" onClick={increment.bind(this, index)}>&hearts; {post.likes}</button>
          <Link to={`/view/${post.code}`} className="button">
            <span className="comment-count">
              <span className="speech-bubble"></span>
              {(comments[post.code]
                ? comments[post.code].length
                : 0)}
            </span>
          </Link>
        </figcaption>
      </figure>
    )
  }
}
Photo.propTypes = {
  index: PropTypes.number.isRequired,
  post: PropTypes.object.isRequired,
  comments: PropTypes.object.isRequired,
  increment: PropTypes.func.isRequired
}