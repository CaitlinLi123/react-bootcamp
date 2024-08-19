import { useState } from "react";
function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default App;
function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(5);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    setDescription("");
    setQuantity(1);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <div>
        <select
          value={quantity}
          onChange={(e) => setQuantity(e.target.value * 1)}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <button>ADD</button>
      </div>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼You have X items on your list, and you already packed X(X%)</em>
    </footer>
  );
}

function Item(item) {
  return (
    <li key={item.id}>
      <input type="checkbox"></input>
      <span
        style={item["item"].packed ? { textDecoration: "line-through" } : {}}
      >
        {item["item"]["quantity"]} {item["item"]["description"]}
      </span>
      <button>❌</button>
    </li>
  );
}
