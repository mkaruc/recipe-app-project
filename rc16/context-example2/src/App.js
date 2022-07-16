import { useState, useEffect } from 'react';
import UserContextProvider from './context/UserContextProvider';
import ShowUsers from './pages/ShowUsers';

function App() {
  const [users, setUsers] = useState([]);

  

  return (
    <>
    <UserContextProvider>
      <ShowUsers />
    </UserContextProvider>
      
    </>
  );
}
export default App;
