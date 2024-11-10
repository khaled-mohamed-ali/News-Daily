export interface NewsData {
    articles :{
            source: object,
            author: string,
            title: string,
            description: string,
            url: string,
            urlToImage: string | null,
            publishedAt: string,
            content: string
        }[]
}
