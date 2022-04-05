import { useEffect, useState, Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCinema, scrapMovies } from "../actions/actions"
import CinemaForm from "../components/CinemaForm"
import SubPage from "../components/SubPage"
import Offcanvas from "../components/Offcanvas"

const Cinema = ({auth}) => {

    const dispatch = useDispatch()

    const {isLoading, cinema, error} = useSelector(store => store.cinema)

    const [login, setLogin] = useState(false)
    const [register, setRegister] = useState(false)
    const userLogged = useSelector(store => store.login)

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

    const handleLogin = () => {
        setLogin(true)
        setRegister(false)
    }

    const handleRegister = () => {
        setLogin(false)
        setRegister(true)
    }

    return (
        <>
            <h6 className="d-flex justify-content-center mt-4">
                Bienvenido a la sala {userLogged.displayName ? `${userLogged.displayName}` : 'Extraño'}
            </h6>
            {
                !auth
                ? <Fragment>
                    <div className="d-flex justify-content-center mt-3">
                        <button 
                            type="button"
                            className="btn btn-danger shadow-sm"
                            data-bs-target='#offcanvasRight'
                            aria-controls="offcanvasRight"
                            onClick={handleRegister}
                        >Registrarse</button>
                        <button 
                            type="button"
                            className="btn btn-secondary shadow-sm ms-1"
                            data-bs-target='#offcanvasRight'
                            aria-controls="offcanvasRight"
                            onClick={handleLogin}
                        >Ingresar</button>
                    </div>
                </Fragment>
                : cinema.name
                    ? <p>Sisas</p>
                    : <p>Nolas</p>

                // cinema.name
                // ? <div className="container-fluid">
                //     <div className="row text-center pt-5">
                //         <div className="col-8"><h2>{cinema.name}</h2></div> 
                //         <button className="col-4 btn btn-primary" onClick={handleAddMovies}><h6>Actualizar películas</h6></button>
                //     </div>
                //     {
                //         cinema.movies
                //         ? <SubPage movies={cinema.movies} />                   
                //         : <div className="mt-5">
                //             <p>No hay peliculas, actualice el cinema</p>
                //         </div>
                //     }
                // </div>
                // : <div className="mt-5 pt-5">
                //     <p className="mt-2 d-flex justify-content-center">Crea un cinema para obetener las películas</p>
                //     <div className="mt-2"><CinemaForm /></div>
                // </div>  
            }

            <Offcanvas login={login} register={register} />
            
            {isLoading && <p>Cargando...</p>}
            {error && <p>Error</p>}

        </>
    )
}

export default Cinema