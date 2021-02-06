import {
  SET_APP_COLOR
} from '../actions/TypeActions'

const INITIAL_STATE = {
  colorScheme: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_APP_COLOR:
      return { ...state, colorScheme: action.payload }
    default:
      return state
  }
}
