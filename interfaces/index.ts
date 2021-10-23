interface EpisodeCharacters {
    name: string
}

interface Episode {
    name: string
    air_date: string
    episode: string
    characters: EpisodeCharacters[]
}

export interface Character {
    id: number
    name: string
    image: string
    dimension: {
        dimension: string
    }
    status: string
    species: string
    gender: string
    origin: {
        name: string
    }
    location: {
        name: string
    }
    episode: Episode[]
}

export interface ContentProps {
    loading: boolean
    error?: any
    data: {
        characters: {
            results: Character[]
            info: {
                count: number
                pages: number
            }
        }
    }
}