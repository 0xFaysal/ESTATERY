import {useEffect, useState} from "react";
import {useLoaderData, useParams} from "react-router-dom";
import Title from "../../components/Title/Title";
import {FaBed, FaBath, FaParking} from "react-icons/fa";
import {TbSchool} from "react-icons/tb";
import {MdAttractions} from "react-icons/md";

function EstateDetail() {
    const {id} = useParams();
    const data = useLoaderData();
    const [showData, setShowData] = useState([]);

    useEffect(() => {
        if (data) {
            const setData = data.find((item) => item.id === parseInt(id));
            setShowData(setData);
        }
    }, [id, data, showData]);

    const {
        img,
        estate_title,
        segment_name,
        big_description,
        price,
        status,
        area,
        location,
        facilities,
        year_built,
        bedrooms,
        bathrooms,
        parking_spaces,
        nearest_grocery_store,
        nearby_attractions,
        schools_nearby,
        nearest_subway_station,
        nearest_airport,
        nearest_hospital,
        nearest_supermarket,
    } = showData;
    return (
        <>
            <Title location={estate_title} />
            <section className='container mx-auto px-8 flex gap-8 font-Plus mt-16 flex-wrap lg:flex-nowrap mb-28'>
                <img
                    className='h-96 w-full object-cover'
                    src={img}
                    alt={estate_title}
                />
                <div className='space-y-4'>
                    <div className='flex gap-3 items-center'>
                        <p className='text-xl '>{segment_name}</p>
                        <p>|</p>
                        <p className='text-lg capitalize font-bold bg-btnSecondary text-white rounded-lg px-2 py-1 '>
                            {status}
                        </p>
                    </div>
                    <h1 className='text-4xl font-bold '>{estate_title}</h1>
                    <p className='text-lg '>{big_description}</p>
                    <div className='flex gap-2'>
                        <h2 className='text-lg md:text-xl font-bold'>Price:</h2>
                        <p className='text-2xl text-primary font-bold '>
                            {price}
                        </p>
                    </div>

                    <div className='text-lg md:text-xl flex gap-2'>
                        <h2 className='font-bold'>Area:</h2>
                        <p className='font-medium'>{area}</p>
                    </div>
                    <div className='text-lg md:text-xl flex gap-2'>
                        <h2 className=' font-bold'>Year Built:</h2>
                        <p className=''>{year_built}</p>
                    </div>
                    <div className='text-lg md:text-xl flex gap-4'>
                        <h2 className=' font-bold'>Location:</h2>
                        <p className='text-lg '>{location}</p>
                    </div>

                    <div className='flex gap-2 flex-wrap'>
                        <div className='bg-btnIcon px-2 py-1 gap-1 rounded-lg flex items-center flex-nowrap font-medium text-base capitalize'>
                            <FaBed className='' />
                            <p>Bedrooms:</p> {bedrooms}
                        </div>
                        <div className='bg-btnIcon px-2 py-1 flex items-center flex-nowrap gap-1 rounded-lg font-medium text-base capitalize'>
                            <FaBath className='inline-block mr-2' />
                            <p>Bathrooms: </p>
                            {bathrooms}
                        </div>
                        <div className='bg-btnIcon px-2 flex items-center gap-1 flex-nowrap py-1 rounded-lg font-medium text-base capitalize'>
                            <FaParking className='inline-block mr-2' />
                            <p>Parking spaces: </p>
                            {parking_spaces}
                        </div>
                    </div>
                    <div className='flex gap-2 flex-wrap'>
                        <h2 className='text-lg md:text-xl font-bold'>
                            Facilities:
                        </h2>
                        {facilities &&
                            facilities.map((facility, index) => (
                                <span
                                    key={index}
                                    className='bg-btnIcon px-2 py-1 rounded-lg font-medium text-base capitalize'
                                >
                                    {facility}
                                </span>
                            ))}
                    </div>
                    <div className='text-xl flex gap-2 items-center'>
                        <h2 className='text-lg md:text-xl font-bold'>
                            Nearest Grocery Store:
                        </h2>
                        <p className='text-base md:text-lg'>
                            {nearest_grocery_store}
                        </p>
                    </div>

                    <div className='text-xl flex gap-2 items-center'>
                        <h2 className='text-lg md:text-xl font-bold'>
                            Nearby Attractions:
                        </h2>
                        <div className='text-base md:text-lg'>
                            {(nearby_attractions || []).map((p, index) => (
                                <div
                                    className='flex gap-1 items-center'
                                    key={index}
                                >
                                    <MdAttractions className='inline-block' />
                                    <p>{`${p}`}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='text-xl flex gap-2 items-center'>
                        <h2 className='text-lg md:text-xl font-bold'>
                            Schools Nearby:
                        </h2>
                        <div className='text-base md:text-lg'>
                            {(schools_nearby || []).map((p, index) => (
                                <div
                                    className='flex gap-1 items-center'
                                    key={index}
                                >
                                    <TbSchool className='inline-block' />
                                    <p>{`${p}`}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='text-xl flex gap-2 items-center'>
                        <h2 className='text-lg md:text-xl font-bold'>
                            Nearest Subway Station:
                        </h2>
                        <p className='text-base md:text-lg'>
                            {nearest_subway_station}
                        </p>
                    </div>
                    <div className='text-xl flex gap-2 items-center'>
                        <h2 className='text-lg md:text-xl font-bold'>
                            Nearest Airport:
                        </h2>
                        <p className='text-base md:text-lg'>
                            {nearest_airport}
                        </p>
                    </div>
                    <div className='text-xl flex gap-2 items-center'>
                        <h2 className='text-lg md:text-xl font-bold'>
                            Nearest Hospital:
                        </h2>
                        <p className='text-base md:text-lg'>
                            {nearest_hospital}
                        </p>
                    </div>
                    <div className='text-xl flex gap-2 items-center'>
                        <h2 className='text-lg md:text-xl font-bold'>
                            Nearest Supermarket:
                        </h2>
                        <p className='text-base md:text-lg'>
                            {nearest_supermarket}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default EstateDetail;
