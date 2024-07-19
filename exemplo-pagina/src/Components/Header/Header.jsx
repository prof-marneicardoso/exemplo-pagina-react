
import './Header.css';
import logo from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import { Navbar } from '../Navbar/Navbar';
// import { Navbar } from "../Components/Navbar/Navbar";

export function Header() {
    return(
        <>
            <header>
                <div className="banner">
                    <div className="logotipo">
                        <img src={logo} alt="" />
                        <h3>Digital Store</h3>

                        <div className="pesquisa">
                            <input type="text" id='pesquisa' placeholder='Pesquisar produto...' />
                        </div>

                        <div>
                            <Link to='/cadastro'>Cadastre-se</Link>
                        </div>

                        <div>
                            <Button />
                        </div>
                    </div>

                    <div>
                        <Navbar />
                    </div>
                </div>
            </header>
        </>
    );
}