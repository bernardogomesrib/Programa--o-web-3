import {
  CButton,
  CForm,
  CFormInput
} from "@coreui/react";
import { default as React, useEffect, useState } from "react";

export default function ContactsEdit() {
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [contactId, setContactId] = useState("");
  
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const excluir = () => {
    fetch(`http://localhost:3000/contatos/${contactId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Contato excluído com sucesso!");
        window.location.href = `http://localhost:3001/contacts?id=${id}&nome=${nome}`;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const idParam = urlParams.get("id");
        const nomeParam = urlParams.get("nome");
        const contactIdParam = urlParams.get("contactid");
        if (!idParam || !nomeParam) {
          window.location.href = `http://localhost:3001/`;
        }
        setContactId(contactIdParam);
        setId(idParam);
        setNome(nomeParam);
        console.log(contactIdParam)
        await fetch(
          `http://localhost:3000/contatos?id=${contactIdParam}`
        )
          .then((response) => response.json())
          .then((data) => {
            setContactEmail(data[0].email);
            setContactName(data[0].nome);
            setContactPhone(data[0].telefone);
          })
          .catch((error) => {
            console.error("Error fetching contact:", error);
          });
        
        
      } catch (error) {
        console.error("Error fetching contact:", error);
      }
    };
    fetchContacts();
  }, []);
  const salvarEdicao = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/contatos/${contactId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: contactId,
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
            onSubmit={salvarEdicao}
            className="localAlignCenter localFlexColumn w-350 localAlignSpaceEvenly gap-2 localJustifyCenter"
          >
            <h1>Editar contato</h1>
            <CFormInput
              className="w-full"
              name="nome"
              type="text"
              placeholder="Nome"
              value={contactName ? contactName : ""}
              onChange={(e) => {
                setContactName(e.target.value);}}
            />
            <CFormInput
              className="w-full"
              name="telefone"
              type="text"
              placeholder="Telefone"
              value={contactPhone ? contactPhone : ""}
              onChange={(e) => {
                setContactPhone(e.target.value);}
              }
            />
            <CFormInput
              className="w-full"
              type="email"
              name="email"
              placeholder="Email"
              value={contactEmail ? contactEmail : ""}
              onChange={(e) => {
                setContactEmail(e.target.value);}
              }
            />
            <CButton
              className="w-full"
              type="submit"
              style={{ backgroundColor: "blue", color: "white" }}
            >
              Salvar
            </CButton>
            <CButton
              className="w-full"
              onClick={() => {
                excluir();
              }}
              style={{ backgroundColor: "red", color: "white" }}
            >
              Excluir
            </CButton>
          </CForm>
  );
}
