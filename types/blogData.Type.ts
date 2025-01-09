
export interface BlogDataType {
    id: number,
    title: string,
    description: string,
    date: string,
    author: string,
    role: string,
    image: string,
    authorImage: string,
    slug: string,
}


export interface BlogsInterface {
    author: string,
    _id: string,
    title: string,
    description: string,
    slug: {
        slug: {
            current: string
        }
    },
    image: {
        image: {
            asset: {
                url: string
            }
        }
    }
}

export interface Params {
    params: {
        slug: string
    }
}