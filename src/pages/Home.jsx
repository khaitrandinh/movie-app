import { useEffect, useState } from "react";  
import MovieCard from "../components/MovieCard";  

const Home = () => {  
    const [movies, setMovies] = useState([]);  
    useEffect(() => {  
        const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&amp;api_key=3fd2be6f0c70a2a598f084ddfb75487c&amp;page=1";

        const fetchMovies = async () => {  
            try {  
                const response = await fetch(API_URL);  
                const data = await response.json();  
                setMovies(data.results || []);  
            } catch (error) {  
                console.error('Error fetching movies:', error);  
            }  
        };  

        fetchMovies();  
    }, []);  

    return (  
        <div className="container mt-4">  
            <h1 className="mb-4">Popular Movies</h1>  
            <div className="row">  
                {movies.map((movie) => (  
                    <div key={movie.id} className="col-md-3 mb-4">  
                        <MovieCard movie={movie} />  
                    </div>  
                ))}  
            </div>  
        </div>  
    );  
};  

export default Home;