import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import axios from "axios";
import Spinner from "../components/Spinner";
import TicketItem from "../components/TicketItem";
import Cookies from "js-cookie";
import AdminTicketItem from "../components/AdminTicketItem";
const AllTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        // Make an Axios request to the admin-only route
        const response = await axios.get(
          "http://34.121.115.75/service1/api/tickets/all",
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("userToken")}`,
            },
          }
        );

        // Set the fetched tickets to the state
        setTickets(response.data);
        setIsLoading(false);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching tickets:", error);
        setIsLoading(false);
      }
    };

    fetchTickets();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container mx-auto mt-8">
      <Link to="/" className="mb-4 w-[10%]">
        <AiOutlineArrowLeft />
      </Link>
      <h1 className="text-3xl font-bold mb-4">Tickets</h1>
      <div className="bg-white p-4 rounded-md shadow-md">
        <div className="flex font-semibold pb-3 text-gray-700">
          <div className="w-[20%]">Date</div>
          <div className="w-[30%]">Product</div>
          <div className="w-[30%]">Status</div>
          <div className="w-[20%]"></div>
        </div>
        {tickets.map((ticket) => (
          <AdminTicketItem key={ticket._id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default AllTickets;
