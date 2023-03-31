import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Dashboard() {
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:8080/api/auth/verify-token", {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
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
      <p>Welcome, {user ? user.name : ""}!</p>
      {console.log(user)}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
