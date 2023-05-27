import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import LightspeedKitchenDisplay from "./pages/LightspeedKitchenDisplay"
import Add from "./pages/Add"
import Header from "./components/Header"

function App() {
  return <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/display" element={<LightspeedKitchenDisplay />} />
      <Route path="/add" element={<Add />} />
    </Routes>
  </BrowserRouter>
}

export default App
