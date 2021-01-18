import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        url
        name
        image
      }
    }
  }
`;

export const FIND_ONE_POKEMON = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      name
      types {
        type {
          name
        }
      }
    }
  }
`;

export const GET_POKE_DETAILS = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      height
      weight
      base_experience
      moves {
        move {
          name
        }
      }
      abilities {
        ability {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`;
