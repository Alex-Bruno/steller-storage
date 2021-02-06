import {
  SET_DATA_CONNECTION
} from '../actions/TypeActions'

const INITIAL_STATE = {
  connection: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_DATA_CONNECTION:
      return { ...state, connection: action.payload }
    default:
      return state
  }
}
