import React, { useState } from "react";
import AddMovieForm from "./components/AddMovieForm";
import AddUserForm from "./components/AddUserForm";
import BuyTicketForm from "./components/BuyTicketForm";
import MovieList from "./components/MovieList";
import UserList from "./components/UserList";
import TicketList from "./components/TicketList";

interface Movie {
  id: number;
  name: string;
}

interface User {
  id: number;
  name: string;
}

interface Ticket {
  id: number;
  userId: number;
  movieId: number;
}

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [tickets, setTickets] = useState<Ticket[]>([]);

  const addMovie = (movieName: string) => {
    if (!movieName) return;
    const newMovie = { id: movies.length + 1, name: movieName };
    setMovies([...movies, newMovie]);
  };

  const addUser = (userName: string) => {
    if (!userName) return;
    const newUser = { id: users.length + 1, name: userName };
    setUsers([...users, newUser]);
  };

  const buyTicket = (userId: number, movieId: number) => {
    if (!userId || !movieId) return;
    const newTicket = { id: tickets.length + 1, userId, movieId };
    setTickets([...tickets, newTicket]);
  };

  const cancelTicket = (ticketId: number) => {
    const ticketIndex = tickets.findIndex((ticket) => ticket.id === ticketId);
    if (ticketIndex === -1) return false;

    const updatedTickets = tickets.filter((ticket) => ticket.id !== ticketId);
    setTickets(updatedTickets);
    return true;
  };

  return (
    <div>
      <h1>Cinema Ticket System</h1>
      <AddMovieForm addMovie={addMovie} />
      <AddUserForm addUser={addUser} />
      <BuyTicketForm users={users} movies={movies} buyTicket={buyTicket} />
      <MovieList movies={movies} />
      <UserList users={users} />
      <TicketList
        tickets={tickets}
        movies={movies}
        users={users}
        cancelTicket={cancelTicket}
      />
    </div>
  );
};

export default App;
