import React, { useState } from "react";
import Form from "./components/Form";
import TeamMembers from "./components/TeamMembers";
import "./App.css";

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState("");

  const addNewTeamMember = (teamMember) => {
    const newTeamMember = {
      id: Date.now(),
      name: teamMember.name,
      email: teamMember.email,
      role: teamMember.role,
    };
    setTeamMembers([...teamMembers, newTeamMember]);
  };

  return (
    <div className="App">
      <Form memberToEdit={memberToEdit} addNewTeamMember={addNewTeamMember} />
      <TeamMembers
        setMemberToEdit={setMemberToEdit}
        teamMembers={teamMembers}
      />
    </div>
  );
}

export default App;
