import { useForm } from "../hooks/useForm";
import { useDispatch } from "react-redux";
import { createCinema } from "../actions/actions";

const CinemaForm = () => {

    const dispatch = useDispatch();

    const [values, handleInputChange, reset] = useForm({
        type: "sofka.cinema.create",
        cinemaId: "",
        name: ""
    })

    const {cinemaId, name, } = values;

    const handleCreateCinema = (e) => {
        e.preventDefault();
        dispatch(createCinema(values))
        reset()
    }

    return (
        <div className="h-100 d-flex justify-content-center align-items-center">
            <form className="mx-auto" onSubmit={handleCreateCinema}>

                <div className="form-floating mt-3">
                    <input
                        className="form-control shadow-sm" 
                        name="cinemaId" 
                        id="input1"
                        value={cinemaId}
                        onChange={handleInputChange}
                    ></input>
                    <label htmlFor="input1">Id</label>
                </div>

                <div className="form-floating mt-3">
                    <input
                        className="form-control shadow-sm" 
                        name="name" 
                        id="input2"
                        value={name}
                        onChange={handleInputChange}
                    ></input>
                    <label htmlFor="input2">Name</label>
                </div>

                <div className="d-flex justify-content-center my-3">
                    <button type="submit" className="btn btn-success shadow-sm">Crear</button>
                </div>

            </form>
        </div>
    )
}

export default CinemaForm