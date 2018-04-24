
import data from '../resources/data';

export default function profiles(state = data, action) {
  switch (action.type) {
    case 'NEXT_PROFILE':
      return Object.assign({}, state, { currentProfileIndex: action.index })
    default:
      return state
  }
}