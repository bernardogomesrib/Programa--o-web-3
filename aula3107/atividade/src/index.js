import "@coreui/coreui/dist/css/coreui.min.css";
import { CCol, CContainer, CRow } from "@coreui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Contacts from "./paginas/contacts";
import ContactsAdd from "./paginas/contactsAdd";
import ContactsEdit from "./paginas/contactsEdit";
import Home from "./paginas/home";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <main>
      <CContainer className="localAlignCenter localJustifyCenter">
        <CRow className="w-full">
          <CCol
            sm
            className="localAlignCenter localAlignSpaceEvenly localJustifyEvenly"
          >
            <img src="logo512.png" alt="Logo" className="logo" />
          </CCol>
          <CCol
            sm
            className="localAlignCenter localAlignSpaceEvenly localJustifyCenter "
          >
            <div className="bordaPreta localJustifyCenter localAlignCenter localAlignSpaceEvenly">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/contactsAdd" element={<ContactsAdd />} />
                <Route path="/contactsEdit" element={<ContactsEdit />} />
                <Route path="*" element={<h1>Not Found</h1>} />
              </Routes>
            </BrowserRouter>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </main>
  </React.StrictMode>
);

reportWebVitals();
