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
    <form>
      <div>
        <label>First Name</label>
        <input {...bindFirstName} />
      </div>
      <div>
        <label>Last Name</label>
        <input {...bindLastName} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  </div>;
}

export default UserForm;
