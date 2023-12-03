import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { googleSignIn, githubSignIn, logIn, resetPassword } =
    useContext(AuthContext);
  const emailRef = useRef(null);
  const [validEmail, setValidEmail] = useState("");
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user?.displayName);
        console.log(user?.email);
        // <img src={user?.photoURL} alt="" />
        navigate("/");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `user has been logged in successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        const msg = error.code;
        console.log(msg);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user?.displayName);
        console.log(user?.email);
        // <img src={user?.photoURL} alt="" />
        navigate("/");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `user has been logged in successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        const msg = error.code;
        console.log(msg);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then((res) => {
        console.log(res);
        const user = res?.user?.displayName;
        const loggedUser = {
          email,
          lastLoggedAt: res?.user?.metadata?.lastSignInTime,
        };
        console.log(loggedUser);
        fetch("http://localhost:5000/users", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        console.log(user);
        form.reset();
        navigate("/");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user} has been logged in successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        const msg = err.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: msg,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    setValidEmail("");
    if (!email) {
      setValidEmail("Please provide a valid email");
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      console.log();
      return;
    }
    resetPassword(email)
      .then(() => {
        Swal.fire("Check your email");
      })
      .catch((err) => {
        Swal.fire(err.message);
      });
  };
  return (
    <div className="mt-10">
      <div className="relative flex flex-col bg-blue-500 shadow-2xl text-gray-700 rounded-xl bg-clip-border justify-center items-center">
        <h4 className="block font-sans text-4xl antialiased font-semibold leading-snug tracking-normal text-white">
          Sign in to your account
        </h4>
        <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-white">
          Nice to meet you! Lets Start your Journey.
        </p>
        <form
          onSubmit={handleLogin}
          className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96"
        >
          <div className="flex flex-col gap-6 mb-1">
            <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-white">
              Your Email
            </h6>
            <div className="relative h-11 w-full min-w-[400px] min-h-[120px]">
              <input
                name="email"
                type="email"
                ref={emailRef}
                placeholder="email@mail.com"
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-white px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
              {validEmail && <p className="text-red-600">{validEmail}</p>}
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
            </div>
            <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-white">
              Password
            </h6>
            <div className="relative h-11 w-full min-w-[400px] min-h-[120px]">
              <input
                name="password"
                type="password"
                placeholder="********"
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-white px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
            </div>
          </div>
          <button
            className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit"
          >
            sign in
          </button>
          <p className="block mt-4 font-sans text-base antialiased font-normal leading-relaxed text-center text-white">
            Do not have an account? <span></span>
            <Link to="/register" className="font-medium text-gray-900">
              Sign Up
            </Link>
          </p>
          <p className="block mt-4 font-sans text-base antialiased font-normal leading-relaxed text-center text-white">
            Forget your password? <span></span>
            <Link
              onClick={handleForgetPassword}
              className="font-medium text-gray-900"
            >
              Reset password
            </Link>
          </p>
          <button
            onClick={handleGoogleSignIn}
            className="mt-6 block w-full select-none rounded-lg bg-gradient-to-b from-orange-500 to-orange-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <FaGoogle className="absolute -mt-1.5 ml-16 text-3xl text-white"></FaGoogle>
            google sign in
          </button>
          <button
            onClick={handleGithubSignIn}
            className="mt-6 block w-full select-none rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <FaGithub className="absolute -mt-1.5 ml-16 text-3xl text-white"></FaGithub>
            github sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
