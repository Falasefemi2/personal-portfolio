import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./routes/Root"
import Hero from "./components/Hero"
import Projects from "./pages/Projects"
import AboutMe from "./pages/AboutMe"
import Contacts from "./pages/Contacts"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Hero />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/aboutme",
        element: <AboutMe />
      },
      {
        path: "/contact",
        element: <Contacts />
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App