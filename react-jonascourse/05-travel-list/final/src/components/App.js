import { useState } from "react";
//Fake data  
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
]

export default function App() {
  const [items, setItems] = useState(initialItems);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id))
  }
  return <div className="App">
    <Logo />
    <Form onAddItems={handleAddItems} />
    <PackingList items={items} onDeleteItem={handleDeleteItems} />
    <Stats />
  </div>
}

function Logo() {
  return <h1>Far Away</h1>
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("TEST");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    if (!description) {
      return;
    }
    const newItem = { description, quantity, packed: false, id: Date.now() };
    //Call function onAddItems everytime handleSubmit
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={(e) => handleSubmit(e)}>
      <h3>What need for trip</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(
          (num) =>
            <option value={num} key={num}>
              {num}
            </option>
        )
        }
      </select>
      <input type="text" placeholder="Item ..."
        value={description}
        onChange={(e) => {
          console.log(e.target.value);
          setDescription(e.target.value);
        }}>
      </input>
      <button>Add</button>
    </form >
  );
}

function PackingList({ items, onDeleteItem }) {
  return (
    <div>
      <ul className="list">
        {items.map(item =>
          <Item
            item={item} onDeleteItem={onDeleteItem} key={item.id}
          />)}
      </ul>
    </div>
  );
}
function Item({ item, onDeleteItem }) {
  return (<li>
    <span style={item.packed ? { textdecoration: "line-through" } : {}}>
      {""}
      {item.quantity} {item.description}
    </span>
    <button onClick={() => onDeleteItem(item.id)}>X</button>
  </li >
  )
}
function Stats() {
  return (<footer className="stats"><em>Have X in items </em></footer>);
}