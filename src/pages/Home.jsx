import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import "../css/Home.css"
import { searchMovies, getPopularMovies } from "../services/api";

function Home()
{
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPopularMovies = async () => {
          try {
            const popularMovies = await getPopularMovies()
            setMovies(popularMovies)
          } catch (err) {
            console.log(err)
            setError("Failed to load movies")
          }
          finally {
            setLoading(false)
          } 
        }
        loadPopularMovies()
    }, [])

    const handleSearch = (e) => {
        e.preventDefault()
        alert (searchQuery)
        setSearchQuery(" - type a name here - ")
    }
    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" 
            placeholder="Search for movies..." 
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery} 
            className="search-input"/>
            <button type="submit" className="search-button"> Search</button>
        </form>
        <div className="movies-grid">
            {movies.map((movie)=> (
                movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id}></MovieCard>
        ))}
        </div>
    </div>
}

export default Home