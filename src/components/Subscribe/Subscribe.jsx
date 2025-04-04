function Subscribe() {
    return (
        <section className='bg-btnSecondary text-white font-Plus pt-16 pb-20 flex flex-col justify-center items-center '>
            <h3 className='text-primary font-bold text-2xl md:text-2xl text-center'>
                No Spam Promise
            </h3>
            <h1 className='font-bold text-3xl md:text-4xl text-center mt-3'>
                Are you a landlord?
            </h1>
            <p className='font-normal text-base text-[#D3D5DA] text-center mt-4'>
                Discover ways to increase your home&apos;s value and get listed.
                No Spam.
            </p>
            <div className='text-center md:bg-white rounded-lg p-4 w-fit justify-self-center pl-6 mt-8 mb-6'>
                <input
                    type='text'
                    placeholder='Enter your email address'
                    className='text-lg font-normal w-full px-6 rounded-lg max-sm:mb-4 max-md:mb-4 py-3 md:w-72  text-textPrimary focus:outline-none border-none md:mr-20'
                />
                <button className='px-6 py-3 max-sm:w-full max-md:w-full rounded-lg  bg-primary text-white font-bold text-base'>
                    Submit
                </button>
            </div>
            <p className='text-center text-sm font-normal text-[#9EA3AE]'>
                Join <span className='text-white'>10,000+</span> other landlords
                in our estatery community.
            </p>
        </section>
    );
}

export default Subscribe;
