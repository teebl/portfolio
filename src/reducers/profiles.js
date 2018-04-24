
import data from '../resources/data';

export default function profiles(state = data, action) {
  switch (action.type) {
    case 'NEXT_PROFILE':
      return Object.assign({}, state, { currentProfileIndex: (state.currentProfileIndex + 1) % Object.keys(data.profiles).length })
    default:
      return state
  }
}