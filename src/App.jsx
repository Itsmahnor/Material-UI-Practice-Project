
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavBar from "./Components/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";


function App() {
const router=createBrowserRouter([
  {
    path:"/",
    element:(<><NavBar />   </>)
  },
  {
    path:"/home",
    element:(<><NavBar /> <Home />   </>)
  },
  {
    path:"/about",
    element:<><NavBar /> <About />  </>
  },
  {
    path:"/contact",
    element:<><NavBar /> <Contact />   </>
  },
]);
  return (
    <>
   <RouterProvider router={router} />
    </>
  )
}

export default App
