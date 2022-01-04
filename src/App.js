import React, { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import CreateUserPage from "./pages/CreateUserPage";
import ActiveAccountPage from "./pages/ActiveAccountPage";
const DataContext = createContext({})
function App() {
  const [data, setData] = useState([])
  const [list, setList] = useState([])
  useEffect(() => {
    const url = "https://frebi.willandskill.eu/api/v1/me"
    const token = localStorage.getItem("webb21")
    fetch(url, {
        headers: {
            "Content-type": "application/json",
            "authorization": `Bearer ${token}`
        }
    })
    .then(res => res.json())
    .then(data => setData(data))
}, [])

  useEffect(() => {
    fetchData()
  },[])
  function fetchData(){
    const url = "https://frebi.willandskill.eu/api/v1/customers/"
    const token = localStorage.getItem("webb21")
    /* console.log(token) */
    fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`
        }
    })
    .then(res => res.json())
    .then(data => setList(data.results))
}
  return (
    <div>
      <DataContext.Provider value={{data, setData, list, setList, fetchData}}>
        <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/:id" element={<ActiveAccountPage />}/>
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/:id" element={<DetailPage/>} />
        <Route path="/auth/create" element={<CreateUserPage/>} />
      </Routes>
      </DataContext.Provider>
      
    </div>
  );
}
export {DataContext}
export default App;
