import React from "react";
import axios from "axios";

import { Dropdown } from "primereact/dropdown";
import { useState, useEffect } from "react";

const DropdownExample = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data));
  }, []);
  return (
    <div className="my-4 text-center">
      <Dropdown
        value={user}
        options={users}
        onChange={(e) => setUser(e.value)}
        placeholder="Select a User"
        optionLabel="hony"
      />
    </div>
  );
};

export default DropdownExample;
