


const initState = {
    rawData: null
}

export const LuLuReducer = (state=initState, action) => {
  switch (action.type) {
      case 'FETCH_ALL_DATA':
          return {...state, rawData: action?.payload}
      default:
          return state
  }
};