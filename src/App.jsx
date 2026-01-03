import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";
import { useCallback, useReducer, useRef } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.contact, ...state];
    case "REMOVE":
      return state.filter(contact => contact.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const [contacts, dispatch] = useReducer(reducer, []);
  const contactRef = useRef(0);

  const onCreate = useCallback((name, contact) => {
    dispatch({
      type: "CREATE",
      contact: {
        id: contactRef.current++,
        name,
        contact,
      }
    });
  }, []);

  const onRemove = useCallback((targetId) => {
    dispatch({
      type: "REMOVE",
      targetId,
    });
  }, []);

  return (
    <div className="App">
      <h2>Contact List</h2>
      <section>
        <ContactEditor onCreate={onCreate} />
      </section>
      <section>
        <ContactList contacts={contacts} onRemove={onRemove} />
      </section>
    </div>
  );
}

export default App;
