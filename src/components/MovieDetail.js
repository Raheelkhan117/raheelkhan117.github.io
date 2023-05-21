import React, { useState, useEffect, } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';
import YouTube from 'react-youtube';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [watchlistMessage, setWatchlistMessage] = useState('');


  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await api.get(`/movie/${id}`);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };

    fetchMovie();
  }, [id]);

  const handlePlayTrailer = async () => {
    try {
      const response = await api.get(`/movie/${id}/videos`);
      const videos = response.data.results;
      if (videos.length > 0) {
        const trailerKey = videos[0].key;
        setMovie(prevMovie => ({ ...prevMovie, trailerKey }));
      }
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  };

  const handleAddToWatchlist = () => {
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    if (!watchlist.find(item => item.id === movie.id)) {
      watchlist.push(movie);
      localStorage.setItem('watchlist', JSON.stringify(watchlist));
      setWatchlistMessage('Movie added to watchlist!');
    } else {
      setWatchlistMessage('Movie already in watchlist!');
    }
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">

      <div className="movie-detail">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />
        <h1>{movie.title}</h1>
        <div className="details">
          <p>Duration: {movie.runtime} mins</p>
          <p>Genre: {movie.genres.map(genre => genre.name).join(', ')}</p>
          <p>Ratings: {movie.vote_average}</p>
        </div>
        <p>{movie.overview}</p>
        <button className="trailer-btn" onClick={handlePlayTrailer}>
          Play Trailer
        </button>
        <button className="add-watchlist-btn" onClick={handleAddToWatchlist}>
          Add to Watchlist
        </button>
        {watchlistMessage && <p className="watchlist-message">{watchlistMessage}</p>}
        <div className="video-container">
          {movie.trailerKey && (
            <YouTube
              videoId={movie.trailerKey}
              opts={{ width: '100%', height: '100%' }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
