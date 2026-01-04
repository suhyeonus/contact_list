import "./ContactList.css";
import ContactItem from "./ContactItem";
import { ContactStateContext } from "../App";
import { useContext } from "react";

export default function ContactList() {
  const contacts = useContext(ContactStateContext);
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {contacts.map(contact => (
        <ContactItem 
          key={contact.id} 
          {...contact}
        />
      ))}
    </div>
  );
}
