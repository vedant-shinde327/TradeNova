import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";

function App() {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3002/verify", {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.status) {
          setAuthenticated(true);
          setUsername(res.data.user);
        } else {
          window.location.href = "http://localhost:5174/login";
        }
      })
      .catch(() => {
        window.location.href = "http://localhost:5174/login";
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!authenticated) {
    return null;
  }

  return (
    <Routes>
      <Route path="/*" element={<Home username={username} />} />
    </Routes>
  );
}

export default App;
