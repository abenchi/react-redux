import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo'

export default class PhotoGrid extends Component {
  render = () => {
    return (
      <div className='photo-grid'>
        {this
          .props
          .posts
          .map((post, index) => (<Photo key={index} index={index} post={post} increment = {this.props.increment} comments = {this.props.comments}/>))}
      </div>
    )
  }
}

PhotoGrid.propTypes = {
  posts: PropTypes.array.isRequired
}