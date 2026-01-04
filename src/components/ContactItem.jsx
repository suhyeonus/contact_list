import "./ContactItem.css";
import { memo, useContext } from "react";
import { ContactDispatchContext } from "../App";

function ContactItem({ id, name, contact }) {
  const { onRemove } = useContext(ContactDispatchContext);

  const onClickRemove = () => {
    onRemove(id);
  }

  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{contact}</div>
      <button onClick={onClickRemove}>🗑️ Remove</button>
    </div>
  );
}

export default memo(ContactItem);