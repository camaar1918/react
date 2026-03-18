import { useState } from 'react';

function App() {
  
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");

  const raadi = (e) => {
    setSearch(e.target.value);
  };

  

  const dir = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${search}`);
      const data = await response.json();
      setUser(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <input onChange={raadi} type="text" />
      <button onClick={dir}>search</button>

      {user && (
        <div>
          <h3>{user.login}</h3>
          <img src={user.avatar_url} width="100" />
        </div>
      )}
    </>
  );
}

export default App;