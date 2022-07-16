import { useState, useEffect } from 'react';
import ShowUsers from './pages/ShowUsers';

function App() {
  const [users, setUsers] = useState([]);

  

  return (
    <>
      <ShowUsers />
    </>
  );
}
export default App;
