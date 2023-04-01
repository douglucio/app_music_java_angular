import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getUserByToken } from '../service/userApi';

function Dashboard() {
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUserByToken(token)
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          console.error(error);
          history.push("/login");
        });
    } else {
      history.push("/login");
    }
  }, [history]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    history.push("/login");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user ? user.email : ""}!</p>
      {console.log(user)}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
