import Title from "../../components/Title/Title";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {FaGithubSquare, FaGoogle, FaEye, FaEyeSlash} from "react-icons/fa";
import {useContext, useRef, useState} from "react";
import {AuthContext} from "../../provider/AuthProvider";

import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
    const {login, loginWithGoogle, loginWithGithub} = useContext(AuthContext);
    const navigate = useNavigate();
    const Location = useLocation();
    const [showPassword, setShowPassword] = useState(false);

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(emailRef.current.value, passwordRef.current.value)
            .then(() => {
                notify("Login Successfully");
                if (Location.state) {
                    navigate(Location.state.from);
                } else {
                    navigate("/");
                }
            })
            .catch((error) => {
                notify(error.message);
            });
    };

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(() => {
                notify("Login Successfully");
                if (Location.state) {
                    navigate(Location.state.from);
                } else {
                    navigate("/");
                }
            })
            .catch((error) => {
                notify(error.message);
            });
    };

    const handleGithubLogin = () => {
        loginWithGithub()
            .then(() => {
                notify("Login Successfully");
                if (Location.state) {
                    navigate(Location.state.from);
                } else {
                    navigate("/");
                }
            })
            .catch((error) => {
                notify(error.message);
            });
    };
    const notify = (msg) => toast(msg);
    return (
        <section className='container mx-auto my-28'>
            <Title location='Login' />
            <div className='w-full flex items-center justify-center font-Plus'>
                <div className='bg-white p-4 md:p-10 lg:p-28 rounded-3xl shadow-lg'>
                    <h1 className='text-2xl lg:text-3xl font-bold text-center'>
                        WELCOME BACK EXCLUSIVE MEMBER
                    </h1>
                    <h3 className='text-base lg:text-xl font-medium text-center mt-3'>
                        LOG IN TO CONTINUE
                    </h3>
                    <form
                        className='mt-12 space-y-6 flex flex-col'
                        onSubmit={handleSubmit}
                    >
                        <div className=''>
                            <label
                                className='font-medium text-xl'
                                htmlFor='email'
                            >
                                Email
                            </label>
                            <input
                                type='text'
                                ref={emailRef}
                                name='email'
                                id='email'
                                placeholder='Enter your email'
                                className='block rounded-lg bg-btnIcon font-medium text-lg w-full px-4 py-3 focus:outline-none'
                                required
                            />
                        </div>
                        <div className='relative'>
                            <label
                                className='font-medium text-xl'
                                htmlFor='password'
                            >
                                Password
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name='password'
                                ref={passwordRef}
                                id='password'
                                placeholder='Enter your password'
                                className='block rounded-lg bg-btnIcon font-medium text-lg w-full px-4 py-3 pr-9 focus:outline-none'
                                required
                            />
                            <div
                                onClick={handleShowPassword}
                                className='absolute top-1/2 translate-y-1 right-3 text-xl'
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>
                        <button className='px-6 py-3 rounded-lg w-2/3 justify-self-center self-center  bg-primary text-white font-bold text-base'>
                            Login
                        </button>
                        <p>
                            Not a member yet ?{" "}
                            <Link
                                to='/signup'
                                className='text-primary font-semibold'
                            >
                                Sign Up
                            </Link>
                        </p>
                        <p className='text-center text-xl font-semibold'>
                            -OR-
                        </p>
                    </form>
                    <div className='flex gap-3 flex-col lg:flex-row'>
                        <button
                            onClick={handleGoogleLogin}
                            className='lg:px-4 px-3 py-2 lg:py-3 flex-col lg:flex-row text-textPrimary flex items-center justify-center gap-2  rounded-lg w-2/3 justify-self-center self-center border  border-primary font-bold text-base'
                        >
                            <FaGoogle className='text-xl lg:text-2xl' />
                            Continue with Google
                        </button>
                        <button
                            onClick={handleGithubLogin}
                            className='px-4 py-3 flex flex-col lg:flex-row items-center justify-center gap-2 text-textPrimary rounded-lg w-2/3 justify-self-center self-center border  border-primary font-bold text-base'
                        >
                            <FaGithubSquare className='text-xl lg:text-2xl' />
                            Continue with Github
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer position='bottom-right' autoClose={5000} />
        </section>
    );
}

export default Login;
