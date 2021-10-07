import React from "react";
import useInput from "./useInput";

function UserForm() {

  const [firstName, bindFirstName, resetFirstName] = useInput('');
  const [lastName, bindLastName, resetLastName] = useInput('');

  const handleSubmit = event => {
    event.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
  };
  return <div>
    <form></form>
  </div>;
}

export default UserForm;
