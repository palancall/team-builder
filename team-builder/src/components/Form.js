import React, { useState } from "react";

const Form = (props) => {
  const [teamMember, setTeamMember] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleChange = (event) => {
    setTeamMember({
      ...teamMember,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    props.addNewTeamMember(teamMember);
    setTeamMember({ name: "", email: "", role: "" });
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          name="name"
          onChange={handleChange}
          id="name"
          type="text"
          placeholder="Name"
          value={teamMember.name}
        />

        <input
          name="email"
          onChange={handleChange}
          id="email"
          type="email"
          placeholder="email"
          value={teamMember.email}
        />

        <input
          name="role"
          onChange={handleChange}
          id="role"
          type="text"
          placeholder="Role"
          value={teamMember.role}
        />

        <button type="submit">Add Team Member</button>
      </form>
    </div>
  );
};

export default Form;
