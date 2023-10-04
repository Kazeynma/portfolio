//router
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Principal from "./views/Principal.tsx";
import AboutMe from "./views/AboutMe.tsx";
function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route path={"/"}>
                    <Route index element={<Navigate to={"/accueil"} replace/>} />
                    <Route path={"/accueil"} element={<Principal/>} />
                </Route>
                <Route path={"/a-propos"} element={<AboutMe/>}/>
            </Routes>
        </Router>

    </>
  )
}

export default App
