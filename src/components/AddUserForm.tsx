import React, { useState } from "react";

interface AddUserFormProps {
  addUser: (userName: string) => void;
}

const AddUserForm: React.FC<AddUserFormProps> = ({ addUser }) => {
  const [userName, setUserName] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addUser(userName);
    setUserName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add User</h3>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="User Name"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddUserForm;
