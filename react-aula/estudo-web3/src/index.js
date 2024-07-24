import '@coreui/coreui/dist/css/coreui.min.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import Cardapio from "./paginas/cardapio";
import Espaco from "./paginas/espaco";
import Faq from "./paginas/faq";
import "./paginas/pagis.css";
import Pratos from "./paginas/pratos";
import Sobre from "./paginas/sobre";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/pratos" element={<Pratos />} />
        <Route path="/espaco" element={<Espaco />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
