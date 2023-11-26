import Spline from "../components/Spline";
import { AiOutlineQuestionCircle, AiFillTags } from "react-icons/ai";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      {/* <div className="home-div">
        <section className="heading">
          <h1>What do you need help with</h1>
        </section>
        <p>Please choose an option below</p>

        <Link to="/new-ticket" className="btn btn-reverse btn-block">
          <AiOutlineQuestionCircle /> Create new ticket
        </Link>
        <Link to="/tickets" className="btn btn-block">
          <AiFillTags /> View my tickets
        </Link>
      </div> */}
      <div className="w-full h-[91.5vh] flex bg-bg-home bg-cover bg-fixed">
        <div className="w-[100%] flex flex-col justify-center items-center gap-4">
          <p className="capitalize text-4xl font-bold p-2 text-fuchsia-50">Tell us your problems !</p>
          <Link
            to="/new-ticket"
            class="cursor-pointer relative inline-flex items-center px-[7.5rem] py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
          >
            <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="relative">Create new ticket</span>
          </Link>
          <Link
            to="/tickets"
            class="cursor-pointer relative inline-flex items-center px-32 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
          >
            <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="relative">View my tickets</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
