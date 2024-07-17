import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import NovoVideo from "./pages/NovoVideo";
import Player from "./pages/Player";
import NaoEncontrada from "./pages/NaoEncontrada";
import PaginaBase from "./pages/PaginaBase";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="novovideo" element={<NovoVideo />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<NaoEncontrada />}></Route>
                </Route>                
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;