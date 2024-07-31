'use client';
import { CButton, CCol, CContainer, CForm, CFormInput, CRow } from "@coreui/react";
import React from 'react';
import './css.css';
const Home = () => {
    const logar = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/pessoas?nome=${e.target[0].value}&senha=${e.target[1].value}`)
        .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                if(data.length > 0){
                    window.location.href = `http://localhost:3001/contacts?id=${data[0].id}&nome=${data[0].nome}`;
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        
    }
    return (
        <CContainer>
            <CRow>
                <CCol sm className="localAlignCenter localAlignSpaceEvenly localJustifyEvenly">
                    <img src="logo512.png" alt="Logo" className="logo"/>
                </CCol>
                <CCol sm className="localAlignCenter localAlignSpaceEvenly">
                    <CForm className="localAlignCenter localFlexColumn w-350 localAlignSpaceEvenly gap-2" onSubmit={logar}>
                        <h1>Login</h1>
                        <CFormInput className="w-full" type="text" placeholder="Login" />
                        <CFormInput className="w-full" type="password" placeholder="Senha" />
                        <CButton className="w-full" type="submit" style={{ backgroundColor: 'blue', color: 'white' }}>Acessar</CButton>
                        <CButton className="w-full" style={{ backgroundColor: 'red', color: 'white' }}>Cadastre-se</CButton>
                    </CForm>
                </CCol>
            </CRow>
        </CContainer>
    );
};

export default Home;
