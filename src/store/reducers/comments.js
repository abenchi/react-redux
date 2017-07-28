import commentsData from '../data/comments';

function postComment(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return {
        [action.postId]: [
          ...state, {
            text: action.comment,
            user: action.author
          }
        ]
      }
    case 'REMOVE_COMMENT':
    return {
      [action.postId]: [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)        
      ]
    }
    default:
      return state;
  }

}

export default function commentsReducer(state = commentsData, action) {
  console.log('comments too is going to run!!')
  switch (action.type) {
    case 'ADD_COMMENT':
        return Object.assign({}, state, postComment(state[action.postId], action));
    case 'REMOVE_COMMENT':
        return Object.assign({}, state, postComment(state[action.postId], action));
    default:
        return state;
  }
}