import { useState } from "react";

const Userlis = () => {
  const [users, setUsers] = useState({
    username: "",
    password: "",
  });

  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      <h1>Login</h1>

      <input
        type="text"
        placeholder="Username"
        value={users.username}
        onChange={(e) =>
          setUsers({ ...users, username: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={users.password}
        onChange={(e) =>
          setUsers({ ...users, password: e.target.value })
        }
      />

      <button onClick={login}>Login</button>

      {loggedIn && (
        <h2>Welcome {users.username}</h2>
      )}
    </div>
  );
};

export default Userlis;