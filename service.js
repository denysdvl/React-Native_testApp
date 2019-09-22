export default class ContentService {
    constructor(){
        async function getResource(url) {
            const res = await fetch(`${url}`);
            if (!res.ok) {
                throw new Error(`Could not fetch ${url}` +
                    ` received ${url}`);
            }
            return await res.json();
        }
        this.getAllContent = async (url) => {
            const res = await getResource(url);
            return res.articles.map(this.__transformContent);
        };
        this.__transformContent = (content) => {
            return{
            author: content.author,
            content: content.content,
            description: content.description,
            urlImage: content.urlToImage,
            publishedDate:  content.publishedAt,
            title:  content.title
            }
        }
    }
   
}