import React, { useState } from 'react';

function Watchlist() {
  const [watchlist, setWatchlist] = useState(JSON.parse(localStorage.getItem('watchlist')) || []);
  const [removedMovie, setRemovedMovie] = useState(null);

  const removeFromWatchlist = id => {
    const updatedWatchlist = watchlist.filter(movie => movie.id !== id);
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
    setWatchlist(updatedWatchlist);
    setRemovedMovie(id);
  };
  
  return (
    <div className="container">
      <h1>Watchlist</h1>
      {watchlist.length > 0 ? (
        <div className="movie-list">
          {watchlist.map(movie => (
            <div className="movie-card" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              <h2>{movie.title}</h2>
              <button
                className="remove-watchlist-btn"
                onClick={() => removeFromWatchlist(movie.id)}
                disabled={removedMovie === movie.id}
              >
                {removedMovie === movie.id ? 'Removed' : 'Remove from Watchlist'}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No movies in watchlist</p>
      )}
    </div>
  );
}

export default Watchlist;
