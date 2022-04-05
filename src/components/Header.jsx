import { Fragment } from 'react'
import logo from '../logo.png'

const Header = ({auth}) => {

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-dark">
            <div className="container-fluid">

                <span className="navbar-brand text-danger">
                    <img 
                        src={logo} 
                        alt="logo" 
                        width={50}
                        height={50}
                        className="d-inline-block align-text-top"
                    />
                </span>

                <h1 className="d-flex justify-content-center text-center">
                    Cinema
                </h1>

                <button 
                    className="navbar-toggler" 
                    type='button' 
                    data-bd-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls='navbarNav' 
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {auth &&
                            <Fragment>
                                <li className="nav-item" style={{cursor: 'pointer'}}>
                                    <span 
                                        className="nav-link text-light"
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasRight"
                                        aria-controls='offcanvasRight'
                                        tabIndex="-1"
                                        aria-disabled="true"
                                    >
                                        | Perfil
                                    </span>
                                </li>

                                <OffCanvas />
                            </Fragment>
                        }
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Header