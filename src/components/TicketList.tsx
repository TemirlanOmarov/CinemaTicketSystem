import React from "react";

interface TicketListProps {
  tickets: { id: number; userId: number; movieId: number }[];
  movies: { id: number; name: string }[];
  users: { id: number; name: string }[];
  cancelTicket: (ticketId: number) => boolean;
}

const TicketList: React.FC<TicketListProps> = ({
  tickets,
  movies,
  users,
  cancelTicket,
}) => (
  <div>
    <h2>Purchased Tickets</h2>
    <ul>
      {tickets.map((ticket) => {
        const movie = movies.find((movie) => movie.id === ticket.movieId);
        const user = users.find((user) => user.id === ticket.userId);
        return (
          <li key={ticket.id}>
            Ticket ID: {ticket.id}, Movie: {movie ? movie.name : "Not Found"},
            User: {user ? user.name : "Not Found"}
            <button onClick={() => cancelTicket(ticket.id)}>Cancel</button>
          </li>
        );
      })}
    </ul>
  </div>
);

export default TicketList;
