interface Episode {
    name?: string
    air_date?: string
    character?: string[]
}

export interface Character {
    name?: string
    image?: string
    dimension?: string[]
    status?: string
    species?: string
    gender?: string
    origin?: string[]
    location?: string[]
    episode?: Episode
}