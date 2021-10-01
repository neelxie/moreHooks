import React, { useState } from "react";

function Hoek() {
  const [name, setName] = React.useState({ firstName: "", lastName: "" });
  return (
    <form>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
    </form>
  );
}

export default Hoek;