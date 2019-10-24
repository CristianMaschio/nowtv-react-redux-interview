import _ from 'lodash'
import {
  MESSAGES_LOADED,
  MESSAGES_LOADING
} from '../action-creators/action-types'

export default (
  state = { loading: true, messages: [], error: false, errorMessage: '' },
  action
) => {
  switch (action.type) {
    case MESSAGES_LOADING: {
      let newState = _.cloneDeep(state)
      newState.loading = true
      return newState
    }
    case MESSAGES_LOADED: {
      let newState = _.cloneDeep(state)
      newState.loading = false
      newState.messages = action.payload
      return newState
    }
    default:
      return state
  }
}
