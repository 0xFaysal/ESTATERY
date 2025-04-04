import Title from "../../components/Title/Title";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./style.css";

function Contact() {
    // const position = [51.505, -0.09];
    return (
        <section className='container animate__animated animate__fadeIn animate__slow px-10 mx-auto py-28 font-Plus'>
            <Title location='Contact' />

            <div>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        <h2 className='text-3xl font-extrabold text-textPrimary sm:text-4xl'>
                            Get in touch with us
                        </h2>
                        <p className='mt-4 text-lg text-gray-600 max-w-2xl mx-auto'>
                            Have a question or inquiry? Reach out to us using
                            the form below.
                        </p>
                        <form className=' w-11/12 md:w-1/2 mx-auto space-y-4 mt-8'>
                            <input
                                type='text'
                                placeholder='Enter Your name '
                                className='border-b block w-full px-0.5 py-2 text-lg text-textPrimary border-primary focus:ring-0 focus:outline-none focus:border-primary'
                            />
                            <input
                                type='text'
                                placeholder='Enter Your email '
                                className='border-b block w-full px-0.5 py-2 text-lg text-textPrimary border-primary focus:ring-0 focus:outline-none focus:border-primary'
                            />
                            <input
                                type='text'
                                placeholder='Enter Your massage '
                                className='border-b block w-full px-0.5 py-2 text-lg text-textPrimary border-primary focus:ring-0 focus:outline-none focus:border-primary'
                            />
                            <button className='px-6 py-3 rounded-lg w-full  bg-primary text-white font-bold text-base'>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
                <div className='w-full md:w-5/6 mx-auto h-96 mt-16'>
                    <h1 className='text-3xl font-extrabold text-textPrimary text-center mb-6'>
                        Office Location
                    </h1>
                    <MapContainer
                        center={[51.505, -0.09]}
                        zoom={20}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            attribution=''
                            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                        />
                        <Marker position={[51.505, -0.09]}>
                            <Popup>
                                Our Office Location
                                <h1 className='text-lg font-medium text-textPrimary'>
                                    Estatery
                                </h1>
                                <p className='text-sm text-gray-600'>
                                    1234, ABC Street, XYZ City
                                </p>
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </section>
    );
}

export default Contact;
