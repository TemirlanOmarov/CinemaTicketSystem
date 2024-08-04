import React from "react";

interface MovieListProps {
  movies: { id: number; name: string }[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => (
  <div>
    <h2>Available Movies</h2>
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.name}</li>
      ))}
    </ul>
  </div>
);

export default MovieList;
