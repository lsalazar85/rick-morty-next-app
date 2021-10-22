interface EpisodeCharacters {
    characters?: {
        name?: string
    }
}

interface Episode {
    name?: string
    air_date?: string
    episode?: string
    characters?: Array<EpisodeCharacters>
}

export interface Character {
    name?: string
    image?: string
    dimensionName?: {
        dimension?: string
    }
    status?: string
    species?: string
    gender?: string
    origin?: {
        name?: string
    }
    location?: {
        name?: string
    }
    episode?: Array<Episode>
}

export interface ContentProps {
    loading?: boolean
    error?: boolean | undefined | any
    data?: {
        characters?: {
            results?: Array<Character>
        }
    }
}