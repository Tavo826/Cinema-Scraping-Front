import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Footer from "./components/Footer.jsx"
import Cinema from "./pages/Cinema"
import Header from "./components/Header.jsx"


function App() {

  const [auth, setAuth] = useState(false)
  const id = useSelector(store => store.login.uid)

  console.log("ID: ", id)

  useEffect(() => {
    if (id) {
      setAuth(true)
    } else {
      setAuth(false)
    }
  }, [id])
  
  return (
    <div className="App">
      <div className="page-header">
        <Header auth={auth} />
      </div>
      <div className="container mt-5 mb-5">
        <Cinema auht={auth} />
      </div>

      <Footer />
      
    </div>
  )
}

export default App
