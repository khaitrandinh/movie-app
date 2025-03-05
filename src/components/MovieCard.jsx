const IMG_PATH = 'https://image.tmdb.org/t/p/w500/'
const MovieCard = ({ movie }) => {
  const d = new Date(movie.release_date)
  let y = d.getFullYear();
    return (
      <div className="card shadow-sm">
        {movie.poster_path ? (
          <img
            src={`${IMG_PATH}${movie.poster_path}`}
            alt={movie.title}
            className="card-img-top"
          />
          
        ) : (
          <div className="text-center p-5 bg-light">No Image</div>
        )}
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>  
          <p className="movie-release">{y}</p>
          <span className="vote">{movie.vote_average.toFixed(1)}</span> 
        </div>
      </div>
    );
  };
  
  export default MovieCard;
  