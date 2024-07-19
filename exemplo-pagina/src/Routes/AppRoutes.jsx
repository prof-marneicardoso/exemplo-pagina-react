
import { Routes, Route } from "react-router-dom";

import { Home } from "../Pages/Home";
import { Categoria } from "../Pages/Categoria";
import { Product } from "../Pages/Product";
import { NotFound } from "../Pages/NotFound";
import { Cadastro } from "../Pages/Cadastro";

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/categoria' element={<Categoria />} />
            <Route path='/product' element={<Product />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}
