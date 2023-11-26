import { AiOutlineCheck, AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { useState } from "react";

// import { useWindowHeight } from "@react-hook/window-size";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const [modalVisibility, setModalVisibility] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  return (
    // <header className="header">
    //   <div className="logo">
    //     <Link to="/">Home</Link>
    //   </div>
    //   <ul>
    //     {user ? (
    //       <li>
    //         <button className="btn" onClick={onLogout}>
    //           <AiOutlineLogout /> Logout
    //         </button>
    //       </li>
    //     ) : (
    //       <>
    //         <li>
    //           <Link to="/login">
    //             <AiOutlineCheck /> Login
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/register">
    //             <AiOutlineUser /> Register
    //           </Link>
    //         </li>
    //       </>
    //     )}
    //   </ul>
    // </header>
    <>
    
      <div
        className="hidden lg:flex justify-between items-center  h-[4rem] px-20 text-black z-[100] transition-all duration-300 ease-in-out shadow-lg bg-slate-800 "
      >
        <Link
          to="/"
          className="w-[20%] p-2 flex justify-around items-center rounded-xl mx-2 bg-blue-500 text-fuchsia-50 text-md font-bold"
        >
          Support Desk
        </Link>
        <div className="w-[80%] h-full flex gap-10 items-center justify-end font-spaceGrotesk font-semibold text-lg">
          {/* <div
                        className="cursor-pointer hover-underline-animation"
                        onClick={() => handleMenuClick('patrons-section')}
                    >
                        Patrons
                    </div> */}

          {user ? (
            <div className="cursor-pointer rounded-xl mx-2 bg-blue-500 text-fuchsia-50 text-md font-bold px-3 py-2 " onClick={onLogout}>
              Logout
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="cursor-pointer hover-underline-animation rounded-xl px-4 bg-blue-400 text-fuchsia-50 py-2"
                // onClick={() => router.push("/team")}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="cursor-pointer hover-underline-animation rounded-xl px-4 mr-3 bg-green-400 text-fuchsia-50 py-2"
                // onClick={() => router.push("/team")}
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>

      <div
        className={`z-30 flex lg:hidden static justify-around items-center w-full h-[7.5vh] text-black `}
      >
        <Link
          to="/"
          // onClick={() => {
          //   router.push("/");
          // }}
          className="w-[20%] h-full flex justify-around items-center"
        ></Link>
        <div className="w-[60%] "></div>
        <div
          onClick={() => {
            setModalVisibility(true);
          }}
          className="w-[20%] h-full flex justify-around items-center"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 13.3335H4"
              stroke="#000000"
              strokeWidth="2.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28 8H4"
              stroke="#000000"
              strokeWidth="2.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28 18.6665H4"
              stroke="#000000"
              strokeWidth="2.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28 24H4"
              stroke="#000000"
              strokeWidth="2.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {/* {modalVisibility !== false && (
        <NavModal
          modalVisibility={setModalVisibility}
          visible={true}
          // setModalDataFunc={() => {
          //     setModalData();
          // }}
        />
      )} */}
    </>
  );
}

export default Header;
