function countriesReducer(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case "SET_COUTRIES":
      return Object.assign({}, state, { countries: payload });
    case "SET_ACTIVE_COUNTRY":
      return Object.assign({}, state, { activeCountry: payload });
    default:
      return state;
  }
}

export default countriesReducer;
