export const data = (state = [], action) => {
  switch (action.type) { 
    case 'SEND_DATA':
      return [
        ...action.data
      ]
    default:
      return state
  }
}
