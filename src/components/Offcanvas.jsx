import { useSelector } from "react-redux"
import Register from "./Register"
import Login from "./Login"
import Profile from "./Profile"

const Offcanvas = ({login}) => {

    console.log(login);

    const name = useSelector(store => store.login.displayName)

    return (
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel">
                    {name 
                        ? 'Perfil'
                        : login 
                            ? 'Login' 
                            : 'Sign up'}
                </h5>
                <button className="btn-close text-reset" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                {name 
                    ? <Profile />
                    : login
                        ? <Login />
                        : <Register />
                }
            </div>
        </div>
    )

}

export default Offcanvas