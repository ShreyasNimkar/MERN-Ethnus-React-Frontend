import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Modal from "react-modal";
import { AiFillPlusCircle, AiFillCloseCircle } from "react-icons/ai";
import { getTicket, closeTicket } from "../features/tickets/ticketSlice";
import {
  getNotes,
  createNote,
  reset as notesReset,
} from "../features/notes/noteSlice";
import { BackButton } from "../components/BackButton";
import Spinner from "../components/Spinner";
import NoteItem from "../components/NoteItem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
const customStyles = {
  content: {
    width: "600px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    position: "relative",
  },
};

Modal.setAppElement("#root");

function Ticket() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [noteText, setNoteText] = useState("");

  const { ticket, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.tickets
  );

  const {
    notes,
    isLoading: notesIsLoading,
    isSuccess: notesIsSuccess,
    isError: notesIsError,
    message: notesMessage,
  } = useSelector((state) => state.notes);

  const params = useParams();
  const { ticketId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getTicket(ticketId));
    dispatch(getNotes(ticketId));
  }, [isError, message, ticketId, dispatch]);

  const onTicketClose = () => {
    dispatch(closeTicket(ticketId));
    toast.success("Ticket closed");
    navigate("/tickets");
  };

  const onNoteSubmit = (e) => {
    e.preventDefault();
    dispatch(createNote({ noteText, ticketId }));
    closeModal();
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  if (isLoading || notesIsLoading) {
    return <Spinner />;
  }

  if (isError || notesIsError) {
    return <h3>Something went wrong</h3>;
  }

  return (
    <div className=" mx-8 mt-8 mb-10">
      <header className="bg-white p-4 rounded-md shadow-md mb-8">
        <Link to="/tickets" className="mb-4 w-[10%]">
          <AiOutlineArrowLeft />
        </Link>
        <h2 className="text-2xl font-bold">
          Ticket ID: {ticket._id}
          <span
            className={`ml-2 text-sm font-semibold ${
              ticket.status === "open"
                ? "text-green-500"
                : ticket.status === "in progress"
                ? "text-yellow-500"
                : "text-red-500"
            }`}
          >
            {ticket.status}
          </span>
        </h2>
        <p className="text-gray-600">
          Date submitted: {new Date(ticket.createdAt).toLocaleString("en-US")}
        </p>
        <p className="text-gray-600">Product: {ticket.product}</p>
        <hr className="my-4" />
        <div className="ticket-desc">
          <h3 className="text-xl font-semibold mb-2">Description of issue</h3>
          <p>{ticket.description}</p>
        </div>
        <h2 className="text-2xl mt-4 mb-2">Notes</h2>
      </header>

      {ticket.status !== "closed" && (
        <button
          className="bg-blue-500 text-white py-2 px-5 rounded-md mb-4"
          onClick={openModal}
        >
          <AiFillPlusCircle className="mr-2" />
          Add Note
        </button>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add Note"
      >
        <h2 className="text-2xl font-bold mb-4">Add Note</h2>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-md absolute top-2 right-2"
          onClick={closeModal}
        >
          <AiFillCloseCircle />
        </button>
        <form onSubmit={onNoteSubmit}>
          <div className="mb-4">
            <textarea
              name="noteText"
              id="noteText"
              className="w-full p-2 border rounded-md"
              placeholder="Note text"
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-4">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </Modal>

      {notes.map((note) => (
        <NoteItem key={note._id} note={note} />
      ))}

      {ticket.status !== "closed" && (
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-md"
          onClick={onTicketClose}
        >
          Close Ticket
        </button>
      )}
    </div>
  );
}

export default Ticket;
