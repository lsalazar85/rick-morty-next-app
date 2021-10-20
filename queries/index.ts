import { gql } from "@apollo/client";

export const getCharacters = gql`{
    characters {
        results{
            id
            name
            dimension: location {
                dimension
            }
            status
            species
            gender
            origin {
                name
            }
            location {
                name
            }
            episode {
                id
                name
                air_date
                characters {
                    name
                }
            }
        }
    }
}`