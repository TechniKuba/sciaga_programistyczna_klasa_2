import { useEffect, useState } from "react";

const App = () => {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const response = await fetch("/notes.json"); //wysylam prosbe o plik i czekam
    if (response.ok === false) {
      return;
    }
    const data = await response.json(); //z odpowiedzi robie liste notatek i wpisuje do data
    setNotes(data); //lista laduje do stanu
  };

  useEffect(() => {
    getNotes();
  }, []); //puste [] = tylko raz na start

  return (
    <div>
      <h1>Ściąga programistyczna</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <h2>{note.tittle}</h2>
            <p>{note.tittle}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
