import {
  CCol,
  CContainer,
  CRow,
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

        setId(idParam);
        setNome(nomeParam);

        const response = await fetch("http://localhost:3000/contatos");
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <CContainer>
      <CRow>
        <CCol sm className="localAlignCenter localJustifyEvenly">
          <img src="logo512.png" alt="Logo" className="logo" />
        </CCol>
        <CCol sm className="localAlignCenter localAlignContentCenter localWrap localJustifyCenter">
          
          
          
          <p className="w-full localAlignCenter">contacts</p>
          <CTable>
          <CTableHead >
          <CTableHeaderCell scope="col"></CTableHeaderCell>
          <CTableHeaderCell scope="col">{nome}</CTableHeaderCell>
          <CTableHeaderCell scope="col"></CTableHeaderCell>
          <CTableHeaderCell className="localFlex localJustifyEnd" color="light" scope="col"><a href="/contactsAdd">+</a></CTableHeaderCell></CTableHead>
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
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default Contacts;
