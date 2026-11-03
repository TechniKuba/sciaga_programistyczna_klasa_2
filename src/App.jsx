import { useEffect, useState } from "react";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [chosenCatrgory, setChosenCategory] = useState("Wszystkie");

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
  const filteredNotes = notes.filter((notes) => {
    return note.filter.toLowerCase().includes(searchText.toLowerCase());
  });
  return (
    <div>
      <h1>Ściąga programistyczna</h1>
      <input
        type="text"
        placeholder="Szukaj notatek"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <div>
        <button onClick={() => setChosenCategory("Wszystkie")}>
          Wszystkie
        </button>
        <button onClick={() => setChosenCategory("Chemia")}>Chemia</button>
        <button onClick={() => setChosenCategory("Biologia")}>Biologia</button>
        <button onClick={() => setChosenCategory("Geografia")}>
          Geografia
        </button>
        <button onClick={() => setChosenCategory("Historia")}>Historia</button>
      </div>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
