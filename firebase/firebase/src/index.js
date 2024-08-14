//import { config } from "dotenv";
import { initializeApp } from "firebase/app";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Cadastro from "./paginas/cadastro";
import Home from "./paginas/home";
import LoginPage from "./paginas/login";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));

// Load environment variables from .env file
//config();
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCNdoePU3qe56vxXK5c3h1zEf4f-vgUGrE",
  authDomain: "fir-aula-886d8.firebaseapp.com",
  projectId: "fir-aula-886d8",
  storageBucket: "fir-aula-886d8.appspot.com",
  messagingSenderId: "137154513981",
  appId: "1:137154513981:web:46139db6f6d2f20109ae54",
  measurementId: "G-BGHEGTFM50",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

root.render(
  <React.StrictMode>
    <main>
      <div className="bordaPreta localJustifyCenter localAlignCenter localAlignSpaceEvenly">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  </React.StrictMode>
);

reportWebVitals();
