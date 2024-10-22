import Orchids from "./Pages/Orchids/Orchids";
import Detail from './Components/Detail/Detail.jsx';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from "./Components/Header/Header.jsx";
import { ThemeProvider } from "./ThemeContext/ThemeContext.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Natural from "./Pages/Natural/Natural.jsx";
import About from "./Pages/About/About.jsx";
import Dashboard from "./Components/dashboard/Dashboard.jsx";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./config/firebaseConfig.js";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <ThemeProvider>
      <Header user={user} onLogin={handleLogin} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Orchids />} />
        <Route path="/orchid/:id" element={<Detail />} />
        <Route path="/natural" element={<Natural />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
