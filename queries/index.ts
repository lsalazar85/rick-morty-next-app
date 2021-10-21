import { gql } from "@apollo/client";

export const GET_ALL_CHARACTERS  = gql`
    query Characters($page: Int!, $character: String) {
        characters(page: $page, filter: { name: $character }){
            info {
                count
                pages
            }
            results {
                id
                image
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
    }
`