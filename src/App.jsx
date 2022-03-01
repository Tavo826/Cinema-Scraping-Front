import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCinema, scrapMovies } from "./actions/actions"


function App() {
  
  const dispatch = useDispatch()

  const {isLoading, movies, error} = useSelector(store => store.cinema)  

  useEffect(() => {
    dispatch(getCinema())
  }, [])


  useEffect(() => {
    const socket = new WebSocket('ws://' + 'localhost:8080' + '/retrieve/' + 'correlation_id')
    socket.onmessage = function (m) {
      const data = JSON.parse(m.data)
      dispatch(data.type)
      console.log('Message' + data.type);
    }
  }, [])

  const handleScraping = () => {
    dispatch(scrapMovies())
  }

  return (
    <div className="App">
      <header className="cinema"><h1>Estrenos CINEMA</h1></header>
      <div className="container">        
        {
          movies 
          ? Object.keys(movies.movies).map(key => {
            return (
              <div key={key}>

                <div className="left-content">
                  <div className="title">
                    <h3>{key}</h3>
                  </div>
                  <div className="image">
                    <img src={movies.movies[key][0][0]} alt="movie image" />
                  </div>
                  <div className="data">
                    <p>Año: {movies.movies[key][0][1]}</p>
                    <p>Duración: {movies.movies[key][0][2]}</p>
                  </div>
                </div>
                
                <div className="right-content">
                  <div className="links">
                    <p>Links Latino:</p>
                    {movies.movies[key][1].map((link, index) => {
                      return (
                        <a href={link} key={index}>{link} <br /></a>
                      )
                    })}
                    <p>Links Subtitulada:</p>
                    {movies.movies[key][2].map((link, index) => {
                      return (
                        <a href={link} key={index}>{link} <br /></a>
                      )
                    })}
                    <p>Links Castellano:</p>          
                    {movies.movies[key][3].map((link, index) => {
                      return (
                        <a href={link} key={index}>{link} <br /></a>
                      )
                    })}
                    
                  </div>
                </div>
              </div>
            )
          })
          : <div className="button">
              <button onClick={() => handleScraping()}>Obtener Cartelera</button>            
            </div>
        }
      </div>

      {isLoading && <p>Cargando...</p>}
      {error && <p>Error</p>}

    </div>
  )
}

export default App
