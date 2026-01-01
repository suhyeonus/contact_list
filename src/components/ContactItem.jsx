import "./ContactItem.css";

export default function ContactItem({ name, contact }) {
  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{contact}</div>
      <button>🗑️ Remove</button>
    </div>
  );
}
