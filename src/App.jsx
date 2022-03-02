import Footer from "./components/Footer.jsx"
import Cinema from "./pages/Cinema"


function App() {
  
  return (
    <div className="App">
      <div className="page-header">
        <h1 className="text-center mt-3">Cinema</h1>
      </div>
      <div className="container mt-5">
        <Cinema />
      </div>

      <Footer />
      
    </div>
  )
}

export default App
