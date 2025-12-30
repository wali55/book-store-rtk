import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import AddBookPage from "./pages/AddBookPage"
import EditBookPage from "./pages/EditBookPage"

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-book" element={<AddBookPage />} />
        <Route path="/edit-book/:id" element={<EditBookPage />} />
      </Routes>
    </div>
  )
}

export default App
