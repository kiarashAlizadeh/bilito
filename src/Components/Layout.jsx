import { useContext } from "react"
import { UserContext } from "../App"

import Container from "./Container"
import Footer from "./Footer"
import Navbar from "./Navbar"
import SignIn from "./SignIn"

function Layout(props) {
  const [reqLogin, setReqLogin] = useContext(UserContext)
  return (
    <>
      <div className="relative">
        <Navbar />
        {reqLogin && <SignIn />}

        {props.children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
