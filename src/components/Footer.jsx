import "./Footer.css"

const Footer = () => {

    return (
        <div className="main-footer bg-dark">
            <div className="container">
                <div className="row">
                    <p className="col-sm text-light text-center">
                        Sisas | {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer