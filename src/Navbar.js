import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h2 className="logo">Ammar Waheed</h2>
            <ul className="links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/create">Add new</Link></li>
            </ul>
        </div>
     );
}
 
export default Navbar;