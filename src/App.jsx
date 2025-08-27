import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import AuthLayout from "./layouts/AuthLayout"



function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route element={<AuthLayout />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Route>

      </Routes>
    </>
  )
}

export default App
