import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../../services/countries";
import { useDispatch, useSelector } from "react-redux";
import { setCountries, setActiveCountry } from "../../store/actions";
import {
  StyledContainer,
  StyledCard,
  StyledLabel,
  StyledValue,
} from "./styles";

const CountriesList = ({ history }) => {
  const { loading, data } = useQuery(GET_COUNTRIES);

  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state);

  useEffect(() => {
    dispatch(setCountries(data && data.Country));
  }, [data]);

  const handleActiveCountry = (country) => {
    dispatch(setActiveCountry(country));
    history.push("/country");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <StyledContainer>
      {countries &&
        countries.map((country, index) => (
          <StyledCard key={index} onClick={() => handleActiveCountry(country)}>
            {/* {country.flag} */}
            <div className="flag">{country.flag.emoji}</div>
            <div>
              <StyledLabel>País:</StyledLabel>{" "}
              <StyledValue>{country.name} </StyledValue>
            </div>
            <div>
              <StyledLabel>Capital:</StyledLabel>
              <StyledValue> {country.capital}</StyledValue>
            </div>
          </StyledCard>
        ))}
    </StyledContainer>
  );
};

export default CountriesList;
