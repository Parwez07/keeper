import React, { useState } from "react";

function CreateArea(props) {
  const [input, setInput] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((preNote) => {
      return {
        ...preNote,
        [name]: value
      };
    });
  }

  function addNote(event) {
    props.onAdd(input);
    setInput({ title: "", content: "" });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          value={input.title}
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          name="content"
          value={input.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
