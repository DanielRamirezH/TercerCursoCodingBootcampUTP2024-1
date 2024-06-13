
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./pages/home/home"
import Category from "./pages/category/category"


function App() {

  return (
    <Router>
      <Routes>
        <Route
         path="/componetes"
         Component={Home}
         >

        </Route>
        <Route
         path="/:category_id"
         Component={Category}
         >

        </Route>
        
      </Routes>
    </Router>
  )
}

export default App
