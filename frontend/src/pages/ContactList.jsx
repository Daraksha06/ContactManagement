
import { useEffect, useState } from "react";
import API from "../Api";
import ContactPopup from "./ContactPopup";


export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [popup, setPopup] = useState(null);

  const loadContacts = async () => {
    try {
      const res = await API.get("/contacts");
      setContacts(res.data);
    } catch (err) {
      console.error("Failed to load contacts", err);
    }
  };

  useEffect(() => { loadContacts(); }, []);

  const logOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="contact-container">
      <h2>My Contacts</h2>
      <button className="add-btn" onClick={() => setPopup({})}>+ Add Contact</button>
      <button className="logout_btn" onClick={logOut}>Logout</button>

      <div className="contact-list">
        {contacts.map(c => (
          <div key={c._id} className="card">
            <h3>{c.name}</h3>
            <p>{c.phone}</p>
            <button onClick={() => setPopup(c)}>Edit</button>
            <button onClick={async () => {
              try {
                await API.delete(`/contacts/${c._id}`);
                loadContacts();
              } catch (err) {
                console.error("Delete failed", err);
              }
            }}>Delete</button>
          </div>
        ))}
      </div>

      {popup && <ContactPopup data={popup} close={() => { setPopup(null); loadContacts(); }} />}
    </div>
  );
}