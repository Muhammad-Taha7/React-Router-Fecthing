import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Applayout } from "./layout/Applayout"
import { Home } from "./Components/Home"
import { Collections } from "./Components/Collections"
import { About } from "./Components/About"
import { Contact } from "./Components/Contact"
import { fetchData } from "./Fetching Data/Fetchdata"
import { Error } from "./Error-side-server/Error"

export const App = () =>
{
 const router = createBrowserRouter([
  {
    path: '/',
    element:<Applayout />,
    errorElement: <Error />,
    children: [
      {
        path:'/',
        element: <Home />
      },
      {
        path: '/collection',
        loader: fetchData,
        element: <Collections />
      },
       {
        path: '/about',
        element: <About />
      },
       {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
  
 ])
 return <RouterProvider router={router} />
}