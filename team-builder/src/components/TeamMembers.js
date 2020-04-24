import React from "react";

const TeamMembers = (props) => {
  console.log(props);
  return (
    <div>
      {props.teamMembers.map((person) => {
        return (
          <div>
            <h2>{person.name}</h2>
            <p>{person.email}</p>
            <p>{person.role}</p>
            <button>Edit Member</button>
          </div>
        );
      })}
    </div>
  );
};

export default TeamMembers;
