import "./ContactList.css";
import ContactItem from "./ContactItem";

export default function ContactList({ contacts }) {
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {/* <ContactItem />
      <ContactItem />
      <ContactItem /> */}
      {contacts.map(contact => (
        <ContactItem key={contact.id} name={contact.name} contact={contact.contact} />
      ))}
    </div>
  );
}
