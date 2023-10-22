import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom"
import HomePage from './components/Home/HomePage';
import MainPage from "./components/Main/MainPage";
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  const [data, setData] = useState();
  useEffect(()=>{
    fetch("https://morent-car-rent.onrender.com/cars")
    .then((response) => response.json())
    .then(response=>setData(response))
    .catch((error) => {
      console.error("Error:", error);
    });
  }, [])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/main/*" element={<MainPage data={data}/>} />
    </Routes>
  );
}

export default App;
