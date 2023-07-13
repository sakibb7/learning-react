import { useState } from "react";
import "./FarAwayTravel.css";

const FarAwayTravel = () => {
  // Logo section
  const Logo = () => {
    return <h1>🌴 Far Away 💼</h1>;
  };

  //Form section
  const Form = ({ onAddItems }) => {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    const handleSubmit = (e) => {
      e.preventDefault();

      if (!description) return;

      const newItem = { description, quantity, packed: false, id: Date.now() };

      setDescription("");
      setQuantity(1);

      onAddItems(newItem);
    };

    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3 className="add-form">What do you need for your 😍 trip?</h3>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item Name..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    );
  };

  //Packing Section
  const PackingList = ({
    items,
    onDeleteItem,
    onToggleItems,
    onClearItems,
  }) => {
    const [sortBy, setSortBy] = useState("input");

    let sortedItems;

    if (sortBy === "input") sortedItems = items;
    if (sortBy === "description")
      sortedItems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
    if (sortBy === "packed")
      sortedItems = items
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));
    return (
      <div className="list">
        <ul>
          {sortedItems.map((items) => (
            <Item
              key={items.id}
              items={items}
              onDeleteItem={onDeleteItem}
              onToggleItems={onToggleItems}
            />
          ))}
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button onClick={onClearItems}>Clear list</button>
        </div>
      </div>
    );
  };

  //Item Section
  const Item = ({ items, onDeleteItem, onToggleItems }) => {
    return (
      <li>
        <input
          type="checkbox"
          checked={items.packed}
          onChange={() => onToggleItems(items.id)}
        />
        <span style={items.packed ? { textDecoration: "line-through" } : {}}>
          {items.quantity} {items.description}
        </span>
        <button onClick={() => onDeleteItem(items.id)}>❌</button>
      </li>
    );
  };

  //Stats section
  const Stats = ({ items }) => {
    if (!items.length)
      return (
        <footer className="stats">
          <em>Your List is empty 😊</em>
        </footer>
      );
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);
    return (
      <footer className="stats">
        <em>
          {percentage === 100
            ? "You are ready to go 🚀!"
            : `You have ${numItems} items on your list, and you already packed
            ${numPacked} (${percentage}%)`}
        </em>
      </footer>
    );
  };

  // Main section
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems([...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const clearTheList = () => {
    const confirm = window.confirm(`Are you sure you want to clear the list?`);

    if (confirm) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
        onClearItems={clearTheList}
      />
      <Stats items={items} />
    </div>
  );
};

export default FarAwayTravel;
