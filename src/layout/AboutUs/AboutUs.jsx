import Title from "../../components/Title/Title";
import image from "../../assets/team.jpg";
import "animate.css";

function AboutUs() {
    return (
        <section>
            <Title location='About Us' />
            <div className='container animate__animated animate__fadeIn animate__slow mx-auto px-8 font-Plus mt-16'>
                <h1 className='text-4xl font-bold text-center'>
                    We&apos;re here to
                    <br />
                    <span className='text-primary'>
                        find the best Estate for you
                    </span>
                </h1>
                <div className='bg-btnSecondary text-center text-white pb-28 font-medium text-base tracking-wide p-14 lg:p-20 rounded-lg leading-8 w-full lg:w-5/6 mx-auto mt-8'>
                    <p>
                        Welcome &quot; ESTATERY &quot; - your ultimate
                        destination for all things real estate. Whether
                        you&apos;re searching for your dream home, looking to
                        sell your property, or seeking the perfect rental, our
                        platform offers a seamless and personalized experience
                        tailored to your needs. Explore thousands of listings
                        meticulously curated to match your preferences and
                        budget, from cozy urban apartments to sprawling
                        countryside estates. With our user-friendly interface,
                        you can effortlessly navigate through listings, access
                        detailed property information, and connect with trusted
                        professionals for expert guidance. Stay informed with
                        the latest market trends and neighborhood insights
                        through our informative blog and newsletters. Trust
                        ESTATERY to be your dedicated partner in your real
                        estate journey, guiding you every step of the way
                        towards finding or selling your perfect property.
                    </p>
                </div>
                <img
                    src={image}
                    alt='Team Photo'
                    className='w-4/6 h-96 object-cover mx-auto relative -top-20 rounded-lg'
                />
            </div>
            <div className='py-24 font-Plus'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-textPrimary'>
                    <div className='text-center'>
                        <h2 className='text-3xl font-bold text-textPrimary sm:text-4xl'>
                            Our <span className='text-primary'>Mission</span>
                        </h2>
                        <p className='mt-4 text-lg text-gray-600 max-w-2xl mx-auto'>
                            At Estatery, our mission is simple yet profound:
                            we&apos;re dedicated to transforming the journey of
                            buying, selling, and investing in real estate into
                            an inspiring, empowering, and rewarding experience
                            for everyone involved.
                        </p>
                        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                            <div className='bg-btnIcon rounded-lg shadow-lg p-6'>
                                <h3 className='text-xl font-semibold text-textPrimary mb-2'>
                                    Client-Centric Service
                                </h3>
                                <p className='text-gray-600'>
                                    We prioritize the needs and goals of our
                                    clients above all else. Our team is
                                    committed to providing personalized,
                                    attentive, and transparent service
                                    throughout every step of the real estate
                                    process.
                                </p>
                            </div>
                            <div className='bg-btnIcon rounded-lg shadow-lg p-6'>
                                <h3 className='text-xl font-semibold text-textPrimary mb-2'>
                                    Integrity & Trust
                                </h3>
                                <p className='text-gray-600'>
                                    We uphold the highest standards of
                                    integrity, honesty, and professionalism in
                                    all our interactions. Building trust with
                                    our clients, partners, and communities is
                                    the foundation of our success.
                                </p>
                            </div>
                            <div className='bg-btnIcon rounded-lg shadow-lg p-6'>
                                <h3 className='text-xl font-semibold text-textPrimary mb-2'>
                                    Innovation & Excellence
                                </h3>
                                <p className='text-gray-600'>
                                    We embrace innovation and continuously
                                    strive for excellence in everything we do.
                                    By staying ahead of industry trends and
                                    leveraging cutting-edge technology, we
                                    deliver outstanding results and exceed
                                    expectations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-textPrimary py-36 mt-12 font-Plus'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        <h2 className='text-3xl font-bold text-white sm:text-4xl'>
                            Our <span className='text-primary'>Commitment</span>
                        </h2>
                        <p className='mt-4 text-lg text-white max-w-2xl mx-auto'>
                            At DreamHomes, our commitment to our clients,
                            partners, and communities is unwavering. We are
                            dedicated to delivering exceptional service,
                            fostering meaningful relationships, and making a
                            positive impact in everything we do.
                        </p>
                        <div className='mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3'>
                            <div className='bg-primary rounded-lg shadow-lg p-6'>
                                <h3 className='text-xl font-semibold text-white mb-2'>
                                    Client Satisfaction
                                </h3>
                                <p className='text-white'>
                                    We prioritize client satisfaction above all
                                    else. We strive to exceed expectations by
                                    listening to our clients&apos; needs,
                                    providing expert guidance, and delivering
                                    results that surpass their aspirations.
                                </p>
                            </div>
                            <div className='bg-primary rounded-lg shadow-lg p-6'>
                                <h3 className='text-xl font-semibold text-white mb-2'>
                                    Ethical Practices
                                </h3>
                                <p className='text-white'>
                                    We conduct our business with the highest
                                    standards of ethics, honesty, and integrity.
                                    Our team is committed to transparency,
                                    fairness, and compliance with all laws and
                                    regulations.
                                </p>
                            </div>
                            <div className='bg-primary rounded-lg shadow-lg p-6'>
                                <h3 className='text-xl font-semibold text-white mb-2'>
                                    Community Engagement
                                </h3>
                                <p className='text-white'>
                                    We believe in giving back to the communities
                                    we serve. Through philanthropic initiatives,
                                    volunteer efforts, and community
                                    partnerships, we strive to make a positive
                                    impact and create a brighter future for all.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
