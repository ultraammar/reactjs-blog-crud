import { Link } from "react-router-dom";

const ArticleList = ({articles, title}) => {
    return ( 
        <div className="article-list">
            <h2>{title}</h2>
            {articles.map(article => (
                <div className="article-preview" key={article.id}>
                    <Link to={`/articles/${article.id}`}><h2>{article.title}</h2></Link>
                    <p>Author: {article.author}</p>
                    <p>{article.body}</p>
                </div>
            ))}
        </div>  
     );
}
 
export default ArticleList;