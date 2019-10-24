import _ from 'lodash'
import {
  MEMBERS_LOADED,
  MEMBERS_LOADING
} from '../action-creators/action-types'

export default (
  state = { loading: true, members: {}, error: false, errorMessage: '' },
  action
) => {
  switch (action.type) {
    case MEMBERS_LOADING: {
      let newState = _.cloneDeep(state)
      newState.loading = true
      return newState
    }
    case MEMBERS_LOADED: {
      let newState = _.cloneDeep(state)
      newState.loading = false
      /*
       * I created this object for the members, to improve the reception performance of
       * a user by using a structure similar to the Map (key, value), thus
       * ensuring quick access to the user via the id.
       */
      newState.members = {}
      action.payload.forEach(member => {
        newState.members[member.id] = member
      })
      return newState
    }
    default:
      return state
  }
}
