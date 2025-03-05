import { useState, useEffect } from "react";
import SearchResults from "../components/SearchResults";
import useMovies from "../hooks/useMovies";

const API_KEY = "3fd2be6f0c70a2a598f084ddfb75487c";

const Genre = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [vote, setVote] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10;
  const { movies, loading, error } = useMovies(selectedGenre);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
        if (!res.ok) throw new Error("Failed to fetch genres");
        const data = await res.json();
        setGenres(data.genres || []);
      } catch (err) {
        console.error("Error fetching genres:", err);
      }
    };

    fetchGenres();
  }, []);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
    setCurrentPage(1);
  };

  const filteredMovies = movies.filter((movie) =>
    (selectedGenre ? movie.genre_ids.includes(Number(selectedGenre)) : true) &&
    (releaseYear ? movie.release_date.startsWith(releaseYear) : true) &&
    (vote ? movie.vote_average.toFixed(1).startsWith(vote) : true)
  );

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);
  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Movies by Genre</h1>
      
      {/* Filtering Section */}
      <div className="row g-3 align-items-center mb-4">
        <div className="col-md-4">
          <label className="form-label">Genre</label>
          <select value={selectedGenre} onChange={handleGenreChange} className="form-select">
            <option value="">-- Select a Genre --</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>{genre.name}</option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <label className="form-label">Release Year</label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-calendar" />
            </span>
            <input
              type="number"
              className="form-control"
              value={releaseYear}
              onChange={(e) => setReleaseYear(e.target.value)}
              min="1900"
              max={new Date().getFullYear()}
              placeholder="Enter year"
            />
          </div>
        </div>
        <div className="col-md-4">
          <label className="form-label">Vote Average</label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-star-fill" />
            </span>
            <input
              type="number"
              className="form-control"
              value={vote}
              onChange={(e) => setVote(e.target.value)}
              min="1"
              max="10"
              step="0.1"
              placeholder="Enter vote (1-10)"
            />
          </div>
        </div>
      </div>
      
      {loading && <p className="text-center text-muted">Loading...</p>}
      {error && <div className="alert alert-danger">{error}</div>}
      
      <div className="row">
        <SearchResults movies={currentMovies} />
      </div>
      
      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="mt-4">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                  {index + 1}
                </button>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};  

export default Genre;
