import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const ArticleDetails = () => {

    const {id} = useParams();
    const {articles: article, isPending, error} = useFetch(`http://localhost:8000/articles/${id}`);
    const navigate = useNavigate();

    const handleClick = () =>{
        fetch('http://localhost:8000/articles/' + article.id, {
            method: "DELETE"
        }).then(() => {
            navigate('/');
        })
    }

    return ( 
        <div className="article-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {article && (
                    <article>
                        <h2>{article.title}</h2>
                        <p>{"author: " + article.author}</p>
                        <div>{article.body}</div>
                        <button onClick={handleClick}>delete</button>
                    </article>
                )
            }
            
        </div>
     );
}
 
export default ArticleDetails;