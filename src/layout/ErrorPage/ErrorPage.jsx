import Lottie from "react-lottie";
import animationData from "../../assets/errorpage.json";
import {Link} from "react-router-dom";
import "animate.css";

function ErrorPage() {
    return (
        <div className='w-full h-screen md:h-full flex-col py-8 flex items-center justify-center'>
            <div className='md:w-3/5 w-full '>
                <Lottie
                    options={{
                        loop: true,
                        autoplay: true,
                        animationData: animationData,
                    }}
                    height={undefined}
                    width={undefined}
                />
            </div>
            <div className='flex font-bold text-4xl gap-1 justify-center items-center'>
                <h1 className='font-medium text-base'>Return</h1>
                <Link to='/'>
                    <button className='text-primary animate__animated animate__pulse animate__infinite'>
                        Home
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default ErrorPage;
