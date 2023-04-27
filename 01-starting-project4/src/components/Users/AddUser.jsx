import React, { useState } from "react";

import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
        return;
    };
    // console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredUsername,  enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangedHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangedHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <div>
      <ErrorModal title="An error occured!" message="Something went wrong!" />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enteredUsername}
            onChange={usernameChangedHandler}
          />
          <label htmlFor="username">Age (Years)</label>
          <input
            type="text"
            id="age"
            value={enteredAge}
            onChange={ageChangedHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
