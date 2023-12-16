import { useState, createContext } from "react"
import { Route, Routes } from "react-router-dom"
import { Layout } from "./Components"
import AppRotes from "./AppRoutes"

export const UserContext = createContext()
function App() {
  const [reqLogin, setReqLogin] = useState(false)

  return (
    <>
      <UserContext.Provider value={[reqLogin, setReqLogin]}>
        <Layout>
          <Routes>
            {AppRotes.map((route, index) => {
              return (
                <Route key={index} path={route.path} element={route.element} />
              )
            })}
          </Routes>
        </Layout>
      </UserContext.Provider>
    </>
  )
}

export default App
