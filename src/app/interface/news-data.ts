export interface allNewsData {
    articles: {
        source: { id: string, name: string },
        author: string,
        title: string,
        description: string,
        url: string,
        urlToImage: string | null,
        publishedAt: string,
        content: string
    }[]
}


export interface News  {
    source: {
        id: string | null;    // The 'id' can be null, but it could also be a string if it's provided
        name: string;         // The 'name' is a string
    };
    author: string | null;    // 'author' can be a string or null
    title: string;            // 'title' is a string
    description: string;      // 'description' is a string
    url: string;              // 'url' is a string
    urlToImage: string | null;  // 'urlToImage' can be a string or null
    publishedAt: string;      // 'publishedAt' is a string (ISO 8601 date format)
    content: string;          // 'content' is a string
}



