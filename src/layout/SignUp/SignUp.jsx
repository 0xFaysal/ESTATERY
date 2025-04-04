import Title from "../../components/Title/Title";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {
    FaGithubSquare,
    FaGoogle,
    FaEye,
    FaEyeSlash,
    FaCheckCircle,
} from "react-icons/fa";
import {useContext, useRef, useState} from "react";
import {AuthContext} from "../../provider/AuthProvider";

import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
    const {
        loginWithGoogle,
        loginWithGithub,
        createUser,
        profileUpdate,
        setUser,
    } = useContext(AuthContext);

    const navigate = useNavigate();
    const Location = useLocation();

    const [showPassword, setShowPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    const [passUpperCase, setPassUpperCase] = useState(false);
    const [passLowerCase, setPassLowerCase] = useState(false);
    const [passLength, setPassLength] = useState(false);
    const [password, setPassword] = useState("");

    const nameRef = useRef();
    const photoUrlRef = useRef();
    const emailRef = useRef();

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(() => {
                if (Location.state) {
                    navigate(Location.state.from);
                } else {
                    navigate("/");
                }
                notifySuccess("Login Successfully");
            })
            .catch((error) => {
                notifyError(error.message);
            });
    };
    const handleGithubLogin = () => {
        loginWithGithub()
            .then(() => {
                if (Location.state) {
                    navigate(Location.state.from);
                } else {
                    navigate("/");
                }
                notifySuccess("Login Successfully");
            })
            .catch((error) => {
                notifyError(error.message);
            });
    };

    const handlePassword = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        if (newPassword.match(/[A-Z]/)) {
            setPassUpperCase(true);
        } else {
            setPassUpperCase(false);
        }
        if (newPassword.match(/[a-z]/)) {
            setPassLowerCase(true);
        } else {
            setPassLowerCase(false);
        }
        if (newPassword.length >= 6) {
            setPassLength(true);
        } else {
            setPassLength(false);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const photoUrl = photoUrlRef.current.value;
        const email = emailRef.current.value;
        createUser(email, password)
            .then(() => {
                profileUpdate(name, photoUrl)
                    .then(() => {
                        setUser({
                            displayName: name,
                            photoURL: photoUrl,
                            email: email,
                        });
                        if (Location.state) {
                            navigate(Location.state.from);
                        } else {
                            navigate("/");
                        }
                        notifySuccess("Account Created Successfully");
                    })
                    .catch((error) => {
                        notifyError(error.message);
                    });
            })
            .catch((error) => {
                notifyError(error.message);
            });
    };

    const notifyError = (massage) => toast(massage);
    const notifySuccess = (massage) => toast(massage);

    return (
        <section className='container mx-auto my-28'>
            <Title location='Sign Up' />
            <div className='w-full flex items-center justify-center font-Plus'>
                <div className='bg-white p-4 md:p-10 lg:p-28 rounded-3xl shadow-lg'>
                    <h1 className='text-2xl lg:text-3xl font-bold text-center'>
                        BECOME AN EXCLUSIVE MEMBERS
                    </h1>
                    <h3 className='text-base lg:text-xl font-medium text-center mt-3'>
                        SIGN UP and Join the Partnership
                    </h3>
                    <form
                        className='mt-12 space-y-6 flex flex-col'
                        onSubmit={handleFormSubmit}
                    >
                        <div className=''>
                            <label
                                className='font-medium text-xl'
                                htmlFor='name'
                            >
                                Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                ref={nameRef}
                                id='name'
                                placeholder='Enter your name'
                                className='block rounded-lg bg-btnIcon font-medium text-lg w-full px-4 py-3 focus:outline-none'
                                required
                            />
                        </div>
                        <div className=''>
                            <label
                                className='font-medium text-xl'
                                htmlFor='photoUrl'
                            >
                                Photo Url
                            </label>
                            <input
                                type='text'
                                ref={photoUrlRef}
                                name='PhotoUrl'
                                id='photoUrl'
                                placeholder='Enter your profile photo url'
                                className='block rounded-lg bg-btnIcon font-medium text-lg w-full px-4 py-3 focus:outline-none'
                                required
                            />
                        </div>
                        <div className=''>
                            <label
                                className='font-medium text-xl'
                                htmlFor='email'
                            >
                                Email
                            </label>
                            <input
                                type='email'
                                name='email'
                                ref={emailRef}
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
                                onFocus={() => setPasswordFocus(true)}
                                onKeyUp={handlePassword}
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
                        {passwordFocus && (
                            <div>
                                <div className='flex gap-2 items-center'>
                                    <FaCheckCircle
                                        className={
                                            passUpperCase
                                                ? "text-green-600"
                                                : "text-red-600"
                                        }
                                    />
                                    <p>
                                        Must have an Uppercase letter in the
                                        password
                                    </p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FaCheckCircle
                                        className={
                                            passLowerCase
                                                ? "text-green-600"
                                                : "text-red-600"
                                        }
                                    />
                                    <p>
                                        Must have a Lowercase letter in the
                                        password
                                    </p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FaCheckCircle
                                        className={
                                            passLength
                                                ? "text-green-600"
                                                : "text-red-600"
                                        }
                                    />
                                    <p>Length must be at least 6 character</p>
                                </div>
                            </div>
                        )}
                        <button
                            className='px-6 py-3 rounded-lg w-2/3 justify-self-center self-center disabled:bg-btnIcon  bg-primary text-white font-bold text-base'
                            disabled={
                                !(passLength && passLowerCase && passUpperCase)
                            }
                        >
                            SignUp
                        </button>
                        <p>
                            Already a member ?{"  "}
                            <Link
                                to='/login'
                                className='text-primary font-semibold'
                            >
                                Login
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

export default SignUp;
