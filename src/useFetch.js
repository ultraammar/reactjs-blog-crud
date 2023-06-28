import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [articles, setArticles] = useState(null);

    // const [articles, setArticles] = useState('null');
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
      const abortContr = new AbortController();
      fetch(url, {signal: abortContr.signal})
      .then(res => {
        if(!res.ok){
          throw Error('could not fetch the data.');
        }
        return res.json();
      })
      .then(data => {
        setArticles(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err =>{
        if(err.name !== 'AbortError'){
          setIsPending(false);
          setError(err.message);
          console.log(err.message);
        }
      });
      
      return () => abortContr.abort();
    }, [url]);

    return { 
      articles, isPending, error  
    };
}
 
export default useFetch;