const INITIAL = {
  name: ''
}

export default function listState(state = INITIAL, action) {
  switch(action.type) {
    case 'ADD_NAME':
      return {...state , name: action.name}
    default:
      return state;
  }
}