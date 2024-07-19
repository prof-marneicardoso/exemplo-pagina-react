import { Link } from "react-router-dom";
import { Home } from "./Home";

export function NotFound() {
    return (
        <>
            <h1>404 - Página não encontrada</h1>

            <p>voltar para <Link to='/' >Home</Link></p>
        </>
    );
}