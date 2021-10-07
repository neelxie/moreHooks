import React from "react";

function UserForm() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  const handleSubmit = event => {
    event.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
  };
  return <div>
    <form></form>
  </div>;
}

export default UserForm;
