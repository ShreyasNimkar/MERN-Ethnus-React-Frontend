import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTickets, reset } from "../features/tickets/ticketSlice";
import Spinner from "../components/Spinner";
import { BackButton } from "../components/BackButton";
import TicketItem from "../components/TicketItem";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
function Tickets() {
  const { tickets, isLoading, isSuccess } = useSelector(
    (state) => state.tickets
  );
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="w-full h-[92.5vh] bg-slate-200">
      <div className="container mx-auto mt-8 p-4 ">
        <Link to="/" className="mb-4 w-[10%]">
          <AiOutlineArrowLeft />
        </Link>
        <h1 className="text-3xl font-bold mb-4 py-4">Tickets</h1>
        <div className="p-4 rounded-md shadow-md bg-slate-100">
          <div className="flex font-bold pb-3 text-gray-700">
            <div className="w-[20%]">Date</div>
            <div className="w-[30%]">Product</div>
            <div className="w-[30%]">Status</div>
            <div className="w-[20%]"></div>
          </div>
          {tickets.map((ticket) => (
            <TicketItem key={ticket._id} ticket={ticket} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tickets;
