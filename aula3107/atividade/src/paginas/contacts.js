import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow
} from "@coreui/react";
import { default as React, useEffect, useState } from "react";
// Import the necessary modules

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
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
        const response = await fetch("http://localhost:3000/contatos");
        const data = await response.json();
        setContacts(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []);

  return (

          
          <div className="logo">
          <h1 className="w-full text-align-center localAlignCenter">contacts</h1>
          <CTable className="logo">
          
          <CTableHead >
          <CTableHeaderCell scope="col"></CTableHeaderCell>
          <CTableHeaderCell scope="col">{nome}</CTableHeaderCell>
          <CTableHeaderCell scope="col"></CTableHeaderCell>
          <CTableHeaderCell className="localFlex localJustifyEnd" color="light" scope="col"><a href={`/contactsAdd?id=${id}&nome=${nome}`}>+</a></CTableHeaderCell></CTableHead>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">#</CTableHeaderCell>
                <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">email</CTableHeaderCell>
                <CTableHeaderCell scope="col">telephone</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {contacts.map((contact, index) => (
                <CTableRow key={index + 1}>
                  <CTableDataCell><a href={`/contactsEdit?contactid=${contact.id}&nome=${nome}&id=${id}`}>{contact.id}</a></CTableDataCell>
                  <CTableDataCell><a href={`/contactsEdit?contactid=${contact.id}&nome=${nome}&id=${id}`}>{contact.nome}</a></CTableDataCell>
                  <CTableDataCell><a href={`/contactsEdit?contactid=${contact.id}&nome=${nome}&id=${id}`}>{contact.email}</a></CTableDataCell>
                  <CTableDataCell><a href={`/contactsEdit?contactid=${contact.id}&nome=${nome}&id=${id}`}>{contact.telefone}</a></CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        
        </div>
  );
};

export default Contacts;
