import React, { useState } from "react";

interface BuyTicketFormProps {
  users: { id: number; name: string }[];
  movies: { id: number; name: string }[];
  buyTicket: (userId: number, movieId: number) => void;
}

const BuyTicketForm: React.FC<BuyTicketFormProps> = ({
  users,
  movies,
  buyTicket,
}) => {
  const [selectedUserId, setSelectedUserId] = useState<number | "">("");
  const [selectedMovieId, setSelectedMovieId] = useState<number | "">("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedUserId && selectedMovieId) {
      buyTicket(Number(selectedUserId), Number(selectedMovieId));
      setSelectedUserId("");
      setSelectedMovieId("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Buy Ticket</h3>
      <div>
        <label>User:</label>
        <select
          value={selectedUserId}
          onChange={(e) => setSelectedUserId(Number(e.target.value))}
        >
          <option value="">Select User</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Movie:</label>
        <select
          value={selectedMovieId}
          onChange={(e) => setSelectedMovieId(Number(e.target.value))}
        >
          <option value="">Select Movie</option>
          {movies.map((movie) => (
            <option key={movie.id} value={movie.id}>
              {movie.name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Buy</button>
    </form>
  );
};

export default BuyTicketForm;
