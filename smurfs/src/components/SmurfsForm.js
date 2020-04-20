import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurfs } from "../actions/index";

const SmurfForm = (props) => {
  const smurfState = {
    name: " ",
    age: " ",
    height: " ",
  };
  const [form, setSmurfForm] = useState(smurfState);
  console.log(form);

  const handleChanges = (e) => {
    setSmurfForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={addSmurfs(form)}>
      <label> Smurf Name</label>
      <input
        value={form.name}
        name="name"
        className="nameInput"
        placeholder="Name"
        type="text"
        onChange={handleChanges}
      />

      <label> Smurf Age</label>
      <input
        name="age"
        value={form.age}
        className="nameInput"
        placeholder="Name"
        type="text"
        onChange={handleChanges}
      />

      <label> Smurf Height</label>
      <input
        name="height"
        value={form.height}
        className="nameInput"
        placeholder="Name"
        type="text"
        onChange={handleChanges}
      />
      <button> Submit</button>
    </form>
  );
};

export default connect(null, { addSmurfs })(SmurfForm);
