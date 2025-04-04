import {useContext, useEffect, useRef, useState} from "react";
import {AuthContext} from "./../../provider/AuthProvider";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Profile() {
    const {user, profileUpdate} = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName);
    const [photo, setPhoto] = useState(user?.photoURL);
    const nameRef = useRef(null);
    const photoRef = useRef(null);

    useEffect(() => {
        nameRef.current.value = user?.displayName;
        photoRef.current.value = user?.photoURL;
        setName(user?.displayName);
        setPhoto(user?.photoURL);
    }, [user?.displayName, user?.photoURL]);

    const handleUpdateBtn = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const photo = photoRef.current.value;
        profileUpdate(name, photo)
            .then(() => {
                notify("Profile Updated");
            })
            .catch(() => {
                notify("Failed to Update Profile");
            });
    };
    const notify = (msg) => toast(msg);
    return (
        <section className='container mx-auto grid place-items-center font-Plus px-4 text-textPrimary py-28'>
            <div className='w-full flex flex-col items-center justify-center'>
                <div className='avatar placeholder'>
                    <div className='bg-neutral rounded-full w-28 md:w-36 lg:w-48'>
                        <img src={photo} alt='User Photo' />
                    </div>
                </div>
                <h1 className='text-xl md:text-2xl font-bold text-center'>
                    {name}
                </h1>
                <h1
                    className={[
                        "md:text-2xl",
                        "font-semibold",
                        "text-center",
                        "text-lg",
                        `${user?.email ? "" : "text-gray-400 text-base"}`,
                    ].join(" ")}
                >
                    {user?.email || "Email Address not Found"}
                </h1>
            </div>
            <h1 className='text-2xl font-bold text-center mt-20'>
                Edit Profile
            </h1>
            <form
                className='space-y-4 w-full lg:w-2/5 flex flex-col justify-center items-center mt-4'
                onSubmit={handleUpdateBtn}
            >
                <div className='flex items-center flex-col md:flex-row w-full'>
                    <label className='font-medium text-xl' htmlFor='name'>
                        Name:
                    </label>
                    <input
                        type='text'
                        required
                        ref={nameRef}
                        className='border-b-2 ml-2 w-full  lg:w-80 flex-grow py-2 px-4  focus:outline-none'
                    />
                </div>
                <div className='flex items-center flex-col md:flex-row gap-2 w-full'>
                    <label className='font-medium text-xl' htmlFor='name'>
                        PhotoUrl:
                    </label>
                    <input
                        type='text'
                        required
                        ref={photoRef}
                        className='border-b-2 w-full  lg:w-96 py-2 px-4 focus:outline-none'
                    />
                </div>
                <button className='px-6 py-3 w-2/3   rounded-lg bg-primary text-white font-bold text-base text-nowrap'>
                    Update
                </button>
            </form>
            <ToastContainer position='bottom-right' />
        </section>
    );
}

export default Profile;
