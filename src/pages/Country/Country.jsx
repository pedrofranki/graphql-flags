import React, { useEffect } from "react";
import {
  StyledContainer,
  StyledCard,
  StyledLabel,
  StyledValue,
  StyledButton,
} from "./styles";
import { useSelector } from "react-redux";

const Country = ({ history }) => {
  const { activeCountry } = useSelector((state) => state);

  useEffect(() => {
    if (!activeCountry) {
      history.push("/");
    }
  }, [activeCountry]);

  const handleVoltarClick = () => {
    history.push("/");
  };

  return (
    <StyledContainer>
      {" "}
      <StyledCard>
        {/* {country.flag} */}
        <div className="flag">{activeCountry && activeCountry.flag.emoji}</div>
        <div>
          <StyledLabel>País:</StyledLabel>{" "}
          <StyledValue>{activeCountry && activeCountry.name} </StyledValue>
        </div>
        <div>
          <StyledLabel>Capital:</StyledLabel>
          <StyledValue> {activeCountry && activeCountry.capital}</StyledValue>
        </div>
        <div>
          <StyledLabel>Área:</StyledLabel>
          <StyledValue> {activeCountry && activeCountry.area}</StyledValue>
        </div>
        <div>
          <StyledLabel>População:</StyledLabel>
          <StyledValue>
            {" "}
            {activeCountry && activeCountry.population}
          </StyledValue>
        </div>
      </StyledCard>
      <StyledButton onClick={handleVoltarClick}>Voltar</StyledButton>
    </StyledContainer>
  );
};

export default Country;
