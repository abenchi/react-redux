import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Single from '../components/Single'
import PhotoGrid from '../components/PhotoGrid'
import {removeComment} from '../../../../../../../../Users/bensh/Desktop/Books/my-react/src/store/actions/actionCreators'

const renderPhotoGrid= props => (
  <PhotoGrid posts={props.posts} {...props}/>
)

export default class Main extends Component {
  render = () => {
    return (
      <div>
        <h1>
          <Link to='/'>
            Reduxstagram
          </Link>
        </h1>
        <Route exact path={this.props.match.url} render={renderPhotoGrid.bind(this, this.props)}/>
        <Route 
          path={`${this.props.match.url}view/:post_code`} 
          render = {
            ({match}) => (<Single
              posts={this.props.posts}
              match={match}
              increment={this.props.increment}
              comments={this.props.comments}
              addComment={this.props.addComment}
              removeComment={this.props.removeComment}/>)
          }
        />
      </div>
    )
  }
}