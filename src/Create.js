import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Ammar');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const article = {title, body, author}
        
        setIsPending('true');


        fetch('http://localhost:8000/articles', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(article)
        })
        .then(() => {
            console.log('new blog added successfully');
            setIsPending(false);
            //history.go(-1)
            navigate('/');
        })

    }

    return ( 
        <div className="create">
            <h2>Add a New Blog.</h2>
            <form onSubmit={handleSubmit}>

                <label > Blog title:</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Blog Body: </label>
                <input type="textarea" required value={body} onChange={(e) => setBody(e.target.value)}/>
                <label>Blog Author: </label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Ammar">Ammar</option>
                    <option value="Anser">Anser</option>
                </select>
                
                { !isPending && <button>Add Article</button>}
                { isPending && <button disabled>Adding Blog..</button>}
            </form>
        </div>
     );
}
 
export default Create;