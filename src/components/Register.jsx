import { useDispatch } from "react-redux"
import { registerEmailPasswordName } from '../actions/registerAction'
import { useForm } from "../hooks/useForm"

const Register = () => {

    const dispatch = useDispatch()

    const [values, handleInputChange, reset] = useForm({
        email: '',
        password: '',
        name: ''
    })

    const { email, password, name } = values

    const handleRegister = (e) => {
        e.preventDefault()
        dispatch(registerEmailPasswordName(email, password, name))
        reset()
    }

    return (
        <div className="container mt-2">
            <form onSubmit={handleRegister} className="w-50 mx-auto">
                <h4 className="d-flex justify-content-center text-center mb-4">
                    Registrarse con correo
                </h4>
                <div className="mb-3">
                    <label htmlFor="exampleInputName1" className="form-label">User</label>
                    <input 
                        type="text" 
                        className="form-control shadow-sm" 
                        id="exampleInputName1"
                        aria-describedby="nameHelp"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Correo</label>
                    <input 
                        type="email" 
                        className="form-control shadow-sm" 
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input 
                        type="password" 
                        className="form-control shadow-sm" 
                        id="exampleInputPassword1"
                        aria-describedby="emailHelp"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="d-flex align-items-center flex-column mt-5">
                    <button type="submit" className="btn btn-secondary">Registrarse</button>
                </div>
            </form>
        </div>
    )

}

export default Register