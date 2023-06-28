import ArticleList from "./ArticleList";
import useFetch from "./useFetch";
const Home = () => {
  const {articles, isPending, error} = useFetch('http://localhost:8000/articles');


    return ( 
        <div className="home-preview">
          {Error && <div>{error}</div>}
          {isPending && <div>Loading</div>}
          {articles && <ArticleList articles={articles} title="All Articles"/>}
        </div>
     );
}
 
export default Home;
