import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
  padding: 16px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  background-color: #fff;
  div {
    margin-right: 16px;
  }
  .country-name {
    margin: 5px;
    font-weight: 600;
    /* color: blue; */
  }
`;

export const StyledLabel = styled.div`
  font-size: 12px;
  color: #a9a9a9;
`;

export const StyledValue = styled.div`
  font-size: 14px;
  color: #464646;
  font-weight: 700;
`;

export const StyledButton = styled.button`
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  box-shadow: 2.5px 2.5px 10px rgba(0,0,0,.1);
  cursor: pointer;
`