type CardData = {
  id: number
  attributes: {
    cart: boolean
    mark: string
    model: string
    year: string
    createdAt?: string
    updatedAt?: string
    publishedAt?: string
    price: number
    image: {
      data: {
        id?: 14
        attributes: {
          name?: string
          alternativeText: string
          caption?: string
          width?: number
          height?: number
          formats?: {
            thumbnail?: {
              name?: string
              hash?: string
              ext?: string
              mime?: string
              path?: null
              width?: number
              height?: number
              size?: number
              url?: string
            }
            large?: {
              name?: string
              hash?: string
              ext?: string
              mime?: string
              path?: null
              width?: number
              height?: number
              size?: number
              url?: string
            }
            medium?: {
              name?: string
              hash?: string
              ext?: string
              mime?: string
              path?: null
              width?: number
              height?: number
              size?: number
              url?: string
            }
            small?: {
              name?: string
              hash?: string
              ext?: string
              mime?: string
              path?: null
              width?: number
              height?: number
              size?: number
              url?: string
            }
          }
          hash?: string
          ext?: string
          mime?: string
          size?: number
          url: string
          previewUrl?: null
          provider?: string
          provider_metadata?: null
          createdAt?: string
          updatedAt?: string
        }
      }
    }
  }
}
