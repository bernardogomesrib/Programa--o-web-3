import '@coreui/coreui/dist/css/coreui.min.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Contacts from './paginas/contacts';
import Home from './paginas/home';
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <main>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
{/*         
        <Route path="/pratos" element={<Pratos />} />
        <Route path="/espaco" element={<Espaco />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/sobre" element={<Sobre />} /> */}
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
    </main>
  </React.StrictMode>
);

reportWebVitals();