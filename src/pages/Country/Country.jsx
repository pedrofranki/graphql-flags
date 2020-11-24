import React from "react";
import {
  StyledContainer,
  StyledCard,
  StyledLabel,
  StyledValue,
} from "./styles";
import { useSelector } from "react-redux";

const Country = () => {
  const { activeCountry } = useSelector((state) => state);

  return (
    <StyledContainer>
      {" "}
      <StyledCard>
        {/* {country.flag} */}
        <div className="flag">{activeCountry.flag.emoji}</div>
        <div>
          <StyledLabel>País:</StyledLabel>{" "}
          <StyledValue>{activeCountry.name} </StyledValue>
        </div>
        <div>
          <StyledLabel>Capital:</StyledLabel>
          <StyledValue> {activeCountry.capital}</StyledValue>
        </div>
        <div>
          <StyledLabel>Área:</StyledLabel>
          <StyledValue> {activeCountry.area}</StyledValue>
        </div>
        <div>
          <StyledLabel>População:</StyledLabel>
          <StyledValue> {activeCountry.population}</StyledValue>
        </div>
      </StyledCard>
    </StyledContainer>
  );
};

export default Country;
