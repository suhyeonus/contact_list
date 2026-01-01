import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";
import { useReducer, useRef } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [...state, action.contact];
    default:
      return state;
  }
}

function App() {
  const [contacts, dispatch] = useReducer(reducer, []);
  const contactRef = useRef(0);

  const onCreate = (name, contact) => {
    dispatch({
      type: "CREATE",
      contact: {
        id: contactRef.current++,
        name,
        contact,
      }
    });
  }

  return (
    <div className="App">
      <h2>Contact List</h2>
      <section>
        <ContactEditor onCreate={onCreate} />
      </section>
      <section>
        <ContactList contacts={contacts} />
      </section>
    </div>
  );
}

export default App;
