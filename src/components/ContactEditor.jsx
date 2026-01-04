import "./ContactEditor.css";
import { memo, useContext, useState, useRef } from "react";
import { ContactDispatchContext } from "../App";

function ContactEditor() {
  const { onCreate } = useContext(ContactDispatchContext);

  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const nameRef = useRef();
  const contactRef = useRef();

  const onChangeName = (e) => {
    setName(e.target.value);
  } 

  const onChangeContact = (e) => {
    setContact(e.target.value);
  }

  const onClickCreate = () => {
    if (name.trim() === "") {
      nameRef.current.focus();
      return;
    }
    if (contact.trim() === "") {
      contactRef.current.focus();
      return;
    }
    onCreate(name, contact);
    setName('');
    setContact('');
    nameRef.current.focus();
  }

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onClickCreate();
    }
  }

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper" onKeyDown={onKeyDown}>
        <input className="name" placeholder="이름 ..." value={name} ref={nameRef} onChange={onChangeName} />
        <input className="contact" placeholder="연락처(이메일) ..." value={contact} ref={contactRef} onChange={onChangeContact} />
      </div>
      <button onClick={onClickCreate}>Add</button>
    </div>
  );
}

export default memo(ContactEditor);