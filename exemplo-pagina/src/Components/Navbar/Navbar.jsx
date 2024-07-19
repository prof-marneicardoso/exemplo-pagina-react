
import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/product'>Product</Link></li>
                <li><Link to='/categoria'>Categorias</Link></li>
            </ul>
        </nav>
    );
}