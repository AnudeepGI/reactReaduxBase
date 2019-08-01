import React from 'react';
import UserList from "../containers/userList";
import UserDetails from "../containers/user-details";

function App() {
  return (
    <div className="App">
      <h2>User Name</h2>
      <UserList />
      <hr />
      <h2>User Details </h2>
      <UserDetails />
    </div >
  );
}

export default App;
