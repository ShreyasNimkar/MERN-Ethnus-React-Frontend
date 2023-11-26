import { Link } from "react-router-dom";

function TicketItem({ ticket }) {
  return (
    <div className="bg-white py-4 rounded-md shadow-md mb-4 flex items-center justify-between">
      <div className="w-[20%]">
        <div className="text-gray-600">
          {new Date(ticket.createdAt).toLocaleString("en-US")}
        </div>
      </div>
      <div className="w-[30%]">{ticket.product}</div>
      <div
        className={`w-[30%]  text-center py-1 rounded-md ${
          ticket.status === "Open"
            ? "bg-green-500 text-white"
            : ticket.status === "new"
            ? "bg-green-500 text-white "
            : "bg-red-500 text-white"
        }`}
      >
        {ticket.status}
      </div>
      <Link
        to={`/ticket/${ticket._id}`}
        className="bg-blue-500 text-center text-white py-1 mx-3 w-[20%] rounded-md"
      >
        View
      </Link>
    </div>
  );
}

export default TicketItem;
