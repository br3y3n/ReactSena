import { BrowserRouter, useRoutes } from "react-router-dom"
import { Anime} from "./pages/home/Anime"
import { Production } from "./pages/production/Index"
import { Blocks } from "./pages/Blocks/Index"
import { Login } from "./pages/login/Index"
import NavList from "./components/navBar"


function App() {
  const AppRoutes = () => {
    let routes = useRoutes([
      { path: "/", component: <Anime /> },
      { path: "production", component: <Production /> },
      { path: "block", component: <Blocks /> },
      { path: "login", component: < Login/>}
    ])
    return routes
  }
  return (
    <BrowserRouter>
      <AppRoutes/>
       <NavList/>
    
    </BrowserRouter>
  )
}

export default App
