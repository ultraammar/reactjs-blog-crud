import { Link } from "react-router-dom";

const InvalidPage = () => {
    return ( 
        <div className="invalid-page">
            <h2>sorry</h2>
            <p>that page cannot be found.</p>
            <Link to="/">Go Back to the home page</Link>
        </div>
     );
}
 
export default InvalidPage;