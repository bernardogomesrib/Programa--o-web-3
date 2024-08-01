import {
  CButton,
  CForm,
  CFormInput
} from "@coreui/react";
import { default as React, useEffect, useState } from "react";

export default function ContactsAdd() {
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const idParam = urlParams.get("id");
        const nomeParam = urlParams.get("nome");
        if(!idParam || !nomeParam){
          window.location.href = `http://localhost:3001/`;
        }
        setId(idParam);
        setNome(nomeParam);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };
    fetchContacts();
  }, []);

  const salvar = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/contatos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: e.target[0].value,
        telefone: e.target[1].value,
        email: e.target[2].value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Contato salvo com sucesso!");
        window.location.href = `http://localhost:3001/contacts?id=${id}&nome=${nome}`;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
   
          <CForm
            className="localAlignCenter localFlexColumn  localAlignSpaceEvenly gap-2 localJustifyCenter"
            onSubmit={salvar}
          >
            <h1>Cadastro</h1>
            <CFormInput className="w-full" type="text" placeholder="nome" />
            <CFormInput className="w-full" type="text" placeholder="telefone" />
            <CFormInput className="w-full" type="text" placeholder="email" />
            <CButton
              className="w-full"
              type="submit"
              style={{ backgroundColor: "blue", color: "white" }}
            >
              Salvar
            </CButton>
          </CForm>

  );
}
