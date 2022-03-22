import { useState } from "react"
import Movie from "./Movie"

const SubPage = ({movies}) => {

    const moviesLength = Object.keys(movies).length

    const [currentPage, setCurrentPage] = useState(0)
    const [search, setSearch] = useState("")

    const getList = () => {
        const movieData = []
        
        for (var movie in movies) {
            movieData.push(movies[movie])      
        }

        return movieData
    }

    const getFilteredList = (movieData) => {
        const filtered = movieData.filter(movie => 
            movie[0][0].toLowerCase().includes(search.toLowerCase())
        )

        return filtered
    }

    const filteredMovies = () => {        
        
        const movieData = getList()
        
        if (search == ""){
            return movieData.slice(currentPage, currentPage + 5)
        }

        const filtered = getFilteredList(movieData)

        return filtered.slice(currentPage, currentPage + 5)        
    }

    const nextPage = () => {
        
        const movieData = getList()
        const filtered = getFilteredList(movieData)

        if (filtered.length > currentPage + 5) {
            setCurrentPage(currentPage + 5)
        }
        
    }

    const prevPage = () => {
        if (currentPage > 0)
            setCurrentPage(currentPage - 5)
    }

    const onSearchChange = (event) => {
        setCurrentPage(0)
        setSearch(event.target.value)
    }

    return (
        <div>
            <div>
                <input 
                    type="text" 
                    className="form-control" 
                    value={search}
                    onChange={onSearchChange}
                />
            </div>
            <div>
            {
                filteredMovies(movies).map(movie => {
                    return (
                        <div className="mt-5 mb-5 pt-3">
                            <Movie movie={movie} />
                        </div>
                    )
                })
            }
            </div>
            <div>
                <button onClick={prevPage}>Anteriores</button>                            
            </div>
            <div>
                <button onClick={nextPage}>Siguientes</button>                            
            </div>
        </div>
    )
}

export default SubPage