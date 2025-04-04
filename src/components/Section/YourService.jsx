import {useContext} from "react";
import {AuthContext} from "./../../provider/AuthProvider";
import img from "./../../assets/undraw_location_tracking_re_n3ok.svg";

function YourService() {
    const {user} = useContext(AuthContext);
    return (
        <section className='font-Plus flex gap-8 flex-col md:flex-row text-textPrimary container mx-auto px-8'>
            <div className='space-y-3 flex-grow w-full md:w-1/2 mt-20'>
                <h1 className='font-bold text-4xl'>
                    Hey,
                    <span className='text-4xl text-primary'>
                        {user.displayName}
                    </span>
                </h1>
                <h2 className='text-2xl font-bold'>
                    Thank you very much for using our Service
                </h2>
                <p className='text-base font-normal leading-8'>
                    Welcome to our real estate services page,{" "}
                    <span className='font-semibold text-lg'>
                        {user.displayName}
                    </span>
                    ! At <span className='font-semibold text-lg'>Estatery</span>
                    , we are dedicated to providing you with a seamless and
                    personalized real estate experience. Whether you&apos;re
                    buying, selling, or investing, our team is here to cater to
                    your unique needs and preferences. From expert guidance
                    throughout the entire process to access to exclusive
                    listings and market insights, we strive to exceed your
                    expectations at every turn. Trust us to navigate the
                    complexities of the real estate market while keeping your
                    goals at the forefront. Welcome aboard,
                    {user.displayName}—let&apos;s embark on this exciting
                    journey together!
                </p>
            </div>
            <div className='flex-grow'>
                <img src={img} alt='' />
            </div>
        </section>
    );
}

export default YourService;
