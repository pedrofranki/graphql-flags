export const setCountries = (countries) => ({
  type: "SET_COUTRIES",
  payload: countries,
});

export const setActiveCountry = (country) => ({
  type: "SET_ACTIVE_COUNTRY",
  payload: country,
});
