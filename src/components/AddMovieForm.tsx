import React, { useState } from "react";

interface AddMovieFormProps {
  addMovie: (movieName: string) => void;
}

const AddMovieForm: React.FC<AddMovieFormProps> = ({ addMovie }) => {
  const [movieName, setMovieName] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addMovie(movieName);
    setMovieName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Movie</h3>
      <input
        type="text"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
        placeholder="Movie Name"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddMovieForm;
