import React, { useEffect, useState } from "react";

function Home() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Get token from localStorage
    const token = localStorage.getItem("token");
    if (!token) return;

    // Fetch protected data from backend
    fetch("http://localhost:5000/api/protected-route", {
      headers: { "Authorization": `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setUserData(data))
      .catch(err => console.error(err));
  }, []);

  if (!userData) return <div>Loading...</div>;

  return (
    <div>
      <h1>Welcome, {userData.name}</h1>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default Home;
