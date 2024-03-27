//router
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Principal from "./views/Principal.tsx";
import BTSSection from "./views/BTSSection.tsx";

import "./App.css"
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"}>
            <Route index element={<Navigate to={"/accueil"} replace />} />
            <Route path={"/accueil"} element={<Principal />} />
          </Route>
          <Route path={"/BTS"} element={<BTSSection />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
