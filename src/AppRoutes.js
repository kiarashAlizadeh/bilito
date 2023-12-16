import { NotFound, Home, SignIn, TourSearch } from "./Components"

const AppRoute = [
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tourSearch",
    element: <TourSearch />,
  },
]

export default AppRoute
