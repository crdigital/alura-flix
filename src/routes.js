import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Video from "pages/Video";
import NovoVideo from "pages/NovoVideo";

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/video/:categoria/:id" element={<Video />}></Route>
                <Route path="/novo-video" element={<NovoVideo />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;