import Accordion from 'react-bootstrap/Accordion'

const Movie = ({movie}) => {

    return (

        <div className="container-fluid">
            <div className="row text-center">
                <div className="col-5">
                    <div className="card" style={{width: "18rem"}}>
                        <div><h3>{movie[0][0]}</h3></div>
                        <img className="card-img-top" src={movie[0][1]} alt="movie image" />
                        <div className="card-body">
                            <div className="card-text">
                                <p>Año: {movie[0][2]}</p>  
                                <p>
                                    Duración: {
                                        movie[0][3] == "0 mins."
                                        ? "Desconocida"
                                        : movie[0][3]
                                    }
                                </p> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-7">

                    <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Links Latino</Accordion.Header>
                        <Accordion.Body>
                            {
                                movie[1].length == 0
                                ? <p>No hay links</p>
                                : movie[1].map((link, index) => {
                                    return (
                                        <p key={index}><a href={link} >Link: {index+1} <br /></a></p>
                                    )
                                })
                            }
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Links Subtitulado</Accordion.Header>
                        <Accordion.Body>
                            {
                                movie[2].length == 0
                                ? <p>No hay links</p>
                                : movie[2].map((link, index) => {
                                    return (
                                        <p key={index}><a href={link} >Link: {index+1} <br /></a></p>
                                    )
                                })
                            }
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Links Castellano</Accordion.Header>
                        <Accordion.Body>
                            {
                                movie[3].length == 0
                                ? <p>No hay links</p>
                                : movie[3].map((link, index) => {
                                    return (
                                        <p key={index}><a href={link} >Link: {index+1} <br /></a></p>
                                    )
                                })
                            }
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>

                </div>
            </div>
        </div>
    )

}

export default Movie