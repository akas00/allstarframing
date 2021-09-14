import React, { useState } from "react";

function TodoForm() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addItems = () => {
    if (!input) {
    } else {
      setItems([...items, input]);
      setInput("");
    }
  };

  const deleteItem = (id) => {
    const updateditems = items.filter((item, index) => {
      return index != id;
    });
    setItems(updateditems);
  };

  return (
    <>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a todo"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
        />
        <button className="todo-button" onClick={addItems}>
          Add Todo
        </button>
      </form>

      <div className="showItems">
        {items.map((item, index) => {
          return (
            <div className="eachItems " key={index}>
              <h3>{item}</h3>
              <button onClick={() => deleteItem(index)}>Del</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TodoForm;
