import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCinema, scrapMovies } from "../actions/actions"
import CinemaForm from "../components/CinemaForm"
import SubPage from "../components/SubPage"

const Cinema = () => {

    const dispatch = useDispatch()

    const {isLoading, cinema, error} = useSelector(store => store.cinema)

    useEffect(() => {
        dispatch(getCinema("xxxx"))
    }, [cinema.name])


    useEffect(() => {
        const socket = new WebSocket('ws://' + 'localhost:8080' + '/retrieve/' + "xxxx")
        socket.onmessage = function (m) {
            // console.log("Mensaje: ", m.data);
            const data = JSON.parse(m.data)
            console.log('Message: ', data.type);
            dispatch(getCinema("xxxx"))
        }
    }, [])

    const handleAddMovies = () => {
        dispatch(scrapMovies({
            type: "sofka.cinema.addmovies",
            cinemaId: "xxxx"
        }))
    }

    return (
        <>      
            {
                cinema.name
                ? <div className="container-fluid">
                    <div className="row text-center pt-5">
                        <div className="col-8"><h2>{cinema.name}</h2></div> 
                        <button className="col-4 btn btn-primary" onClick={handleAddMovies}><h6>Actualizar películas</h6></button>
                    </div>
                    {
                        cinema.movies
                        ? <SubPage movies={cinema.movies} />                   
                        : <div className="mt-5">
                            <p>No hay peliculas, actualice el cinema</p>
                        </div>
                    }
                </div>
                : <div className="mt-5 pt-5">
                    <p className="mt-2 d-flex justify-content-center">Crea un cinema para obetener las películas</p>
                    <div className="mt-2"><CinemaForm /></div>
                </div>  
            }
            
            {isLoading && <p>Cargando...</p>}
            {error && <p>Error</p>}

        </>
    )
}

export default Cinema