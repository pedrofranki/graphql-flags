import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../../services/countries";
import { useDispatch, useSelector } from "react-redux";
import { setCountries, setActiveCountry } from "../../store/actions";
import {
  StyledContainer,
  StyledCard,
  StyledLabel,
  StyledValue,
  StyledInput,
} from "./styles";

const CountriesList = ({ history }) => {
  const { loading, data } = useQuery(GET_COUNTRIES);
  const [searchCountry, setSearchCountry] = useState("");
  const [countriesList, setCountriesList] = useState([]);
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state);

  useEffect(() => {
    dispatch(setCountries(data && data.Country));
  }, [data]);

  useEffect(() => {
    setCountriesList(countries);
  }, [countries]);

  useEffect(() => {
    const newArrCountry =
      countries &&
      countries.filter((c) => c && c.name && c.name.includes(searchCountry));
    setCountriesList(newArrCountry);
  }, [searchCountry]);

  const handleCardClick = (country) => {
    dispatch(setActiveCountry(country));
    history.push("/country");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <StyledContainer>
      <StyledInput
        name="searchCountry"
        value={searchCountry}
        onChange={(e) => setSearchCountry(e.target.value)}
        placeholder="Pesquisar país"
      />
      {countriesList &&
        countriesList.map((country, index) => (
          <StyledCard key={index} onClick={() => handleCardClick(country)}>
            {/* {country.flag} */}
            <div className="flag">{country && country.flag.emoji}</div>
            <div>
              <StyledLabel>País:</StyledLabel>{" "}
              <StyledValue>{country && country.name} </StyledValue>
            </div>
            <div>
              <StyledLabel>Capital:</StyledLabel>
              <StyledValue> {country && country.capital}</StyledValue>
            </div>
          </StyledCard>
        ))}
    </StyledContainer>
  );
};

export default CountriesList;
