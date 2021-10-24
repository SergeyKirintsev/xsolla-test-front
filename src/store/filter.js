const initialFilter = {
  city: '',
  month: '',
  fav: false
}

function reducerFilter(state, action) {
  switch (action.type) {
    case 'city':
      return {
        ...state,
        city: action.payload,
      };
    case 'month':
      return {
        ...state,
        month: action.payload,
      };
    case 'fav':
      return {
        ...state,
        fav: !state.fav,
      };
    default:
      throw new Error();
  }
}

export {
  initialFilter,
  reducerFilter
}
