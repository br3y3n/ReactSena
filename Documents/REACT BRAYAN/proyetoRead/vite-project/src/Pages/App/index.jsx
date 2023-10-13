import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import Contact from '../Contact'
import NoFound from '../NoFound'
import './App.css'
import Navbar from '../../Components/NavBar/index'
const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element:  <Home/> },
        { path: '/contacto', element: <Contact/> },
        { path: '/*', element: <NoFound/>}
     
    ])
    return routes
}

const App = () =>{
    return (
        <BrowserRouter>
            <Navbar /> <br />
            <AppRoutes />
            
        </BrowserRouter>
     )
 }
export default App