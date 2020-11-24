import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query {
    Country {
      name
      area
      population
      populationDensity
      capital
      flag {
        emoji
        emojiUnicode
        svgFile
      }
      topLevelDomains {
        name
      }
    }
  }
`;
