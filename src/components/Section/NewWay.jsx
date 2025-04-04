import houseImg from "../../assets/Illustration.png";
import icon1 from "../../assets/Icon.jpg";
import icon2 from "../../assets/Icon (1).png";
import icon3 from "../../assets/Icon (2).png";
import icon4 from "../../assets/Icon.png";
function NewWay() {
    return (
        <section className='flex gap-16 container w-full mx-auto my-16  px-5 lg:px-12 font-Plus text-btnSecondary flex-col lg:flex-row'>
            <div className='bg-btnIcon border rounded-lg justify-self-center-center border-purple-400 p-10 overflow-hidden w-full lg:w-[100rem]'>
                <h1 className='text-3xl font-bold'>
                    The new way to find your new home
                </h1>
                <p className=' mt-5 font-normal text-base'>
                    Find your dream place to live in with more than 10k+
                    properties listed.
                </p>
                <button className=' mt-5 py-3 px-4 bg-btnSecondary text-white rounded-lg'>
                    Browse Properties
                </button>
                <img className='mt-8' src={houseImg} alt='house image' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-7 p-4 '>
                <div className='space-y-4'>
                    <img src={icon1} alt='Icon' />
                    <h2 className='text-2xl max-sm:text-xl font-bold '>
                        Property Insurance
                    </h2>
                    <p className='text-base font-normal'>
                        We offer our customer property protection of liability
                        coverage and insurance for their better life.
                    </p>
                </div>
                <div className='space-y-4'>
                    <img src={icon2} alt='Icon' />
                    <h2 className='text-2xl max-sm:text-xl font-bold '>
                        Best Price
                    </h2>
                    <p className='text-base font-normal'>
                        Not sure what you should be charging for your property?
                        No need to worry, let us do the numbers for you.
                    </p>
                </div>
                <div className='space-y-4'>
                    <img src={icon3} alt='Icon' />
                    <h2 className='text-2xl max-sm:text-xl font-bold '>
                        Lowest Commission
                    </h2>
                    <p className='text-base font-normal'>
                        You no longer have to negotiate commissions and haggle
                        with other agents it only cost 2%!
                    </p>
                </div>
                <div className='space-y-4'>
                    <img src={icon4} alt='Icon' />
                    <h2 className='text-2xl max-sm:text-xl font-bold '>
                        Overall Control
                    </h2>
                    <p className='text-base font-normal'>
                        Get a virtual tour, and schedule visits before you rent
                        or buy any properties. You get overall control.e offer
                        our customer property protection of liability coverage
                        and insurance for their better life.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default NewWay;
