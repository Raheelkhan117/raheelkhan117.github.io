import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

function Home() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await api.get('/discover/movie');
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await api.get('/search/movie', {
        params: {
          query: searchQuery,
        },
      });
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  const handleAddToWatchlist = movie => {
    setWatchlist(prevWatchlist => [...prevWatchlist, movie]);
  };

  const moviesToDisplay = searchResults.length > 0 ? searchResults : movies;

  return (
    <div className="container">
      <h1>MOVIE FINDER</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button
          className="search-btn"
          onClick={handleSearch}
          disabled={searchQuery.length === 0}
        >
          Search
        </button>
      </div>
      <div className="movie-list">
        {moviesToDisplay.map(movie => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              <h2>{movie.title}</h2>
            </div>
          </Link>
        ))}
      </div>
     
    </div>
  );
}

export default Home;
