import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom"
import HomePage from './components/Home/HomePage';
import MainPage from "./components/Main/MainPage";

function App() {
  const [data, setData] = useState();
  useEffect(()=>{
    fetch("https://morent-car-rent.netlify.app/cars")
    .then((response) => response.json())
    .then(response=>setData(response))
    .catch((error) => {
      console.error("Error:", error);
    });
  }, [])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/main/*" element={<MainPage data={data}/>} />
    </Routes>
  );
}

export default App;
