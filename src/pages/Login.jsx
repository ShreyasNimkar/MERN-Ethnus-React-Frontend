import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser, AiOutlineCheck } from "react-icons/ai";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    // Redirect when logged in
    if (isSuccess || user) {
      navigate("/");
      toast.success("You have been logged in.");
    }
    dispatch(reset());
  }, [dispatch, navigate, isError, isSuccess, user, message]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {/* <div className="home-div">
        <section className="heading">
          <h1>
            <AiOutlineCheck /> Login
          </h1>
          <p>and you're good to go</p>
        </section>

        <section className="form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="form-group">
              <button className="btn btn-block">Submit</button>
            </div>
          </form>
        </section>
      </div> */}

      <div className="w-full flex sm:flex-row flex-col h-[91.5vh] bg-new-ticket bg-cover">
        <div className="w-full sm:w-[55%] flex-col justify-center items-center gap-4 text-white">
          <div class=" p-6 rounded-lg shadow-md flex-col justify-center text-center m-32  ">
            <p class=" font-extrabold text-3xl h-auto p-4 mb-6">
              About Our Ticket Support System
            </p>
            <p class=" mb-2">
              Our ticket support system is designed to provide efficient
              assistance to our valued customers. Whether you have inquiries,
              need technical support, or have any concerns, our dedicated team
              is here to help you every step of the way.
            </p>
            <p class=" mb-2">
              With our streamlined ticketing process, you can easily submit your
              requests, track their progress, and receive timely updates until
              your issue is resolved satisfactorily.
            </p>
            <p class="">
              We prioritize excellent customer service and aim to address your
              needs promptly, ensuring a smooth and hassle-free experience for
              you.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-[45%] flex flex-col justify-center items-center gap-4 h-full  opacity-90">
          {/* <form onSubmit={onSubmit} className="w-[80%]">
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="form-group">
              <button className="btn btn-block">Submit</button>
            </div>
          </form> */}
          <section
            class="bg-gray-50 rounded-xl dark:bg-gray-900 w-[70%] shadow-md"
            onSubmit={onSubmit}
          >
            <div class="flex flex-col items-center justify-center px-6 mx-auto  py-10 ">
              <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 sm:p-8">
                  <h1 class="text-xl pb-2 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign in to your account
                  </h1>
                  <form class=" md:space-y-6" action="#">
                    <div>
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        placeholder="Enter your email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        placeholder="Enter your password"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      class="w-full text-white bg-blue-700 hover:bg-green-700  focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Sign in
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Login;
