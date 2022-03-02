import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCinema, scrapMovies } from "../actions/actions"
import CinemaForm from "../components/CinemaForm"

const Cinema = () => {

    const dispatch = useDispatch()

    const {isLoading, cinema, error} = useSelector(store => store.cinema)

    useEffect(() => {
        dispatch(getCinema("xxxx"))
    }, [])


    useEffect(() => {
        const socket = new WebSocket('ws://' + 'localhost:8080' + '/retrieve/' + 'xxxx')
        socket.onmessage = function (m) {
            const data = JSON.parse(m.data)
            dispatch(data.type)
            console.log('Message' + data.type);
            dispatch(getCinema("xxxx"))
        }
    }, [])


    return (
        <>      
            {
                cinema
                ? <div className="container-flid">
                    <div className="row text-center">
                        <div className="col-5"><h2>{cinema.name}</h2></div> 
                        <div className="col-7"><h6>Actualizar películas</h6></div>
                    </div>
                </div>
                : <CinemaForm />
            }
            {/* {
                cinema 
                ? Object.keys(cinema.movies).map(key => {
                    return (
                    <div key={key}>

                        <div className="left-content">
                        <div className="title">
                            <h3>{key}</h3>
                        </div>
                        <div className="image">
                            <img src={cinema.movies[key][0][0]} alt="movie image" />
                        </div>
                        <div className="data">
                            <p>Año: {cinema.movies[key][0][1]}</p>
                            <p>Duración: {cinema.movies[key][0][2]}</p>
                        </div>
                        </div>
                        
                        <div className="right-content">
                        <div className="links">
                            <p>Links Latino:</p>
                            {cinema.movies[key][1].map((link, index) => {
                            return (
                                <a href={link} key={index}>{link} <br /></a>
                            )
                            })}
                            <p>Links Subtitulada:</p>
                            {cinema.movies[key][2].map((link, index) => {
                            return (
                                <a href={link} key={index}>{link} <br /></a>
                            )
                            })}
                            <p>Links Castellano:</p>          
                            {cinema.movies[key][3].map((link, index) => {
                            return (
                                <a href={link} key={index}>{link} <br /></a>
                            )
                            })}
                            
                        </div>
                        </div>
                    </div>
                    )
            })
            : <div className="mt-5">
                <button className="btn btn-secondary" onClick={() => handleCinema()}>Obtener Cartelera</button>            
                </div>
            } */}

            {isLoading && <p>Cargando...</p>}
            {error && <p>Error</p>}

        </>
    )
}

export default Cinema