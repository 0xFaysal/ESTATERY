import {PropTypes} from "prop-types";
import {Link} from "react-router-dom";

function Card({item}) {
    const {
        id,
        img,
        estate_title,
        segment_name,
        description,
        price,
        status,
        area,
        location,
        facilities,
    } = item;
    return (
        <div className='flex flex-col card card-compact h-full  bg-base-100 shadow-xl font-Plus'>
            <figure>
                <img src={img} alt={estate_title} className='w-full' />
            </figure>
            <div className='flex-grow relative'>
                <div className='card-body h-full text-textPrimary'>
                    <p className='font-medium text-lg capitalize text-btnSecondary'>
                        {status}
                    </p>
                    <h2 className='font-extrabold text-2xl text-primary'>
                        {price}
                    </h2>
                    <p className='text-base font-normal'>{segment_name}</p>
                    <h1 className='text-2xl font-bold'>{estate_title}</h1>
                    <p className='text-gray-600'>{description}</p>
                    <p className='font-bold text-lg capitalize text-btnSecondary'>
                        {area}
                    </p>
                    <p className='text-base font-medium'>{location}</p>
                    <div className='flex gap-2'>
                        {facilities.map((facility, index) => (
                            <span
                                key={index}
                                className='bg-btnIcon px-2 py-1 rounded-lg font-medium text-base capitalize'
                            >
                                {facility}
                            </span>
                        ))}
                    </div>

                    <Link
                        to={`/estate/${id}`}
                        className='w-full flex items-center justify-center mt-4'
                    >
                        <button className='px-6 w-3/5 py-3 rounded-lg bg-primary text-white font-bold text-base'>
                            View Property
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Card;

Card.propTypes = {
    item: PropTypes.object,
};
