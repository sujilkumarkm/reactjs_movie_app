import MovieCard from "../components/MovieCard"
import { useState } from "react"

function Home()
{
    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        {id: 1, title: "Aram Thamburan", release_date: "1998"},
        {id: 2, title: "Pulimurugan", release_date: "2001"},
        {id: 3, title: "Neram", release_date: "2005"},
        {id: 4, title: "Terminator", release_date: "2025"},
    ]
    const handleSearch = (e) => {
        e.preventDefault()
        alert (searchQuery)
        setSearchQuery(" - - - - -- ")
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