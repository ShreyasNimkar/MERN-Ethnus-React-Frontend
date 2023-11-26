// import { useState, useEffect } from "react";
// import { useSelector, dispatch, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { createTicket, reset } from "../features/tickets/ticketSlice";
// import Spinner from "../components/Spinner";
// import { BackButton } from "../components/BackButton";

// function NewTicket() {
//   const { user } = useSelector((state) => state.auth);
//   const { isLoading, isError, isSuccess, message } = useSelector(
//     (state) => state.tickets
//   );

//   const [name] = useState(user.name);
//   const [email] = useState(user.email);
//   const [product, setProduct] = useState("iPhone");
//   const [description, setDescription] = useState(user.description);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isError) {
//       toast.error(message);
//     }
//     if (isSuccess) {
//       dispatch(reset());
//       navigate("/tickets");
//     }
//     dispatch(reset());
//   }, [dispatch, isError, isSuccess, navigate, message]);

//   const onSubmit = (e) => {
//     e.preventDefault();
//     dispatch(createTicket({ product, description }));
//   };

//   if (isLoading) {
//     return <Spinner />;
//   }
//   return (
//     <>
//       <div className="home-div-new-ticket">
//         <BackButton url="/" />
//         <section className="heading">
//           <h1>create new ticket</h1>
//           <p>please fill out the form below</p>
//         </section>
//         <section className="form">
//           <div className="form-group">
//             <label htmlFor="name">Customer Name</label>
//             <input type="text" className="form-control" value={name} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Customer Email</label>
//             <input type="text" className="form-control" value={email} />
//           </div>

//           <form onSubmit={onSubmit}>
//             <div className="form-group">
//               <label htmlFor="product">Product</label>
//               <select
//                 name="product"
//                 id="product"
//                 value={product}
//                 onChange={(e) => setProduct(e.target.value)}
//               >
//                 <option value="iPhone">iPhone</option>
//                 <option value="iPad">iPad</option>
//                 <option value="Macbook Pro">Macbook Pro</option>
//                 <option value="iMac">iMac</option>
//                 <option value="AirTag">AirTag</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor="description">Description of Issue</label>
//               <textarea
//                 name="description"
//                 id="description"
//                 className="form-control"
//                 placeholder="description"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               ></textarea>
//             </div>
//             <div className="form-group">
//               <button className="btn btn-block">Submit</button>
//             </div>
//           </form>
//         </section>
//       </div>
//     </>
//   );
// }

// export default NewTicket;

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createTicket, reset } from "../features/tickets/ticketSlice";
import Spinner from "../components/Spinner";
import { BackButton } from "../components/BackButton";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

function NewTicket() {
  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.tickets
  );

  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [product, setProduct] = useState("iPhone");
  const [description, setDescription] = useState(user.description);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      dispatch(reset());
      navigate("/tickets");
    }
    dispatch(reset());
  }, [dispatch, isError, isSuccess, navigate, message]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createTicket({ product, description }));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="w-full p-14  bg-new-ticket bg-cover bg-fixed h-[91.5vh]">
      <div className="w-[40%] mx-auto bg-inherit p-8 shadow-md rounded-xl opacity-90">
        <span>
          <Link to="/" className="mb-4 w-[10%]">
            <AiOutlineArrowLeft />
          </Link>
        </span>
        <h1 className="text-2xl font-bold mb-4 text-fuchsia-50">Create New Ticket</h1>

        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-fuchsia-50"
            >
              Customer Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 p-2 w-full border rounded-md"
              value={name}
              onChange={(e) => setProduct(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-fuchsia-50"
            >
              Customer Email
            </label>
            <input
              type="text"
              id="email"
              className="mt-1 p-2 w-full border rounded-md"
              value={email}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="product"
              className="block text-sm font-medium text-fuchsia-50"
            >
              Product
            </label>
            <select
              id="product"
              className="mt-1 p-2 w-full border rounded-md"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            >
              <option value="iPhone">iPhone</option>
              <option value="iPad">iPad</option>
              <option value="Macbook Pro">Macbook Pro</option>
              <option value="iMac">iMac</option>
              <option value="AirTag">AirTag</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-fuchsia-50"
            >
              Description of Issue
            </label>
            <textarea
              id="description"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-4">
            <button className="bg-blue-500 text-white p-2 rounded-md w-full">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewTicket;
