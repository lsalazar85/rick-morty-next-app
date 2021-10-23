import {FILTER_CHARACTER_BY_NAME, GET_ALL_CHARACTERS} from "../queries";

export const mockCharacter = {
    id: 1,
    name: 'Rick Sanchez',
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    status: 'Dead',
    dimensionName: {
        dimension: 'C-333'
    },
    species: 'Human',
    gender: 'Male',
    origin: {
        name: 'Earth'
    },
    location: {
        name: 'Earth'
    },
    episode: [
        {
            name: 'Rick',
            air_date: 'December',
            episode: '1',
            characters: [
                {
                    name: 'Rick'
                }
            ]
        }
    ]
}

export const mockContent = {
    loading: false,
    data: {
        characters: {
            results: [mockCharacter],
            info: {
                count: 90,
                pages: 2
            }
        }
    }
}

export const mocks = [
    {
        request: {
            query: GET_ALL_CHARACTERS,
            variables: {
                page: 1,
            },
        },
        result: {
            data: {
                characters: {
                    info: {
                        count: 671,
                        pages: 34
                    },
                    results: [
                        {
                            id: 1,
                            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                            name: "Rick Sanchez",
                            dimension: {
                                dimension: "Replacement Dimension",
                                name: "Earth (Replacement Dimension)",
                                type: "Planet"
                            },
                            status: "Alive",
                            species: "Human",
                            gender: "Male",
                            origin: {
                                name: "Earth (C-137)"
                            },
                            location: {
                                name: "Earth (Replacement Dimension)"
                            },
                            episode: [
                                {
                                    id: "1",
                                    name: "Pilot",
                                    air_date: "December 2, 2013"
                                }
                            ]
                        }
                    ]
                }
            },
        },
    },
    {
        request: {
            query: FILTER_CHARACTER_BY_NAME,
            variables: {
                page: 1,
                character: 'Rick'
            },
        },
        result: {
            data: {
                characters: {
                    info: {
                        count: 671,
                        pages: 34
                    },
                    results: [
                        {
                            id: 1,
                            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                            name: "Rick Sanchez",
                            dimension: {
                                dimension: "Replacement Dimension",
                                name: "Earth (Replacement Dimension)",
                                type: "Planet"
                            },
                            status: "Alive",
                            species: "Human",
                            gender: "Male",
                            origin: {
                                name: "Earth (C-137)"
                            },
                            location: {
                                name: "Earth (Replacement Dimension)"
                            },
                            episode: [
                                {
                                    id: "1",
                                    name: "Pilot",
                                    air_date: "December 2, 2013"
                                }
                            ]
                        }
                    ]
                }
            },
        },
    },
];
