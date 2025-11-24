
import { useState } from "react";
import API from "../Api";

export default function ContactPopup({ data = {}, close }) {
  const [contact, setContact] = useState(data);

  const save = async () => {
    try {
    
      const payload = { name: contact.name, phone: contact.phone, email: contact.email };
      if (contact._id) {
        await API.put(`/contacts/${contact._id}`, payload);
      } else {
        await API.post("/contacts", payload);
      }
      close();
    } catch (err) {
      console.error("Save failed", err);
      alert(err.response?.data?.message || "Save failed");
    }
  };

  return (
    <div className="popup">
      <div className="popup-box">
        <h3>{contact._id ? "Edit Contact" : "New Contact"}</h3>
        <input
          placeholder="Name"
          value={contact.name || ""}
          onChange={(e) => setContact({ ...contact, name: e.target.value })}
        />
        <input
          placeholder="Phone"
          value={contact.phone || ""}
          onChange={(e) => setContact({ ...contact, phone: e.target.value })}
        />
        <input
          placeholder="Email (Optional)"
          value={contact.email || ""}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
        />
        <div style={{ marginTop: 8 }}>
          <button onClick={save}>Save</button>
          <button onClick={close} style={{ marginLeft: 8 }}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
