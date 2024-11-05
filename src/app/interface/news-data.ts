export interface NewsData {
    status: string,
    totalResults: number,
    articles :[
        {
            source: object,
            author: string,
            title: string,
            description: string,
            url: string,
            urlToImage: string,
            publishedAt: string,
            content: string
        }
    ]
}
