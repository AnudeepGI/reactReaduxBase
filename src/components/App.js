import React from 'react';
import UserList from "../containers/userList";
import UserDetail from "../containers/user-detail";

function App() {
  return (
    <div className="App">
      <h2>User Name</h2>
      <UserList />
      <hr />
      <h2>User Details </h2>
      <UserDetail />
    </div >
  );
}

export default App;
