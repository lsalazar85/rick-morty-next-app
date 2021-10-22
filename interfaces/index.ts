interface Episode {
    name?: string
    air_date?: string
    character?: string[]
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
    episode?: Episode[]
}

export interface ContentProps {
    loading?: boolean
    error?: any
    data?: {
        characters?: any
    }
}