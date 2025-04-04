import Card from "./Card";
import {PropTypes} from "prop-types";

function Estate({data}) {
    return (
        <section className='container mx-auto flex items-center flex-col py-24 bg-white'>
            <h1 className='text-4xl font-bold text-textPrimary text-center mb-2'>
                Based on your location
            </h1>
            <p className='text-lg text-gray-600 text-center'>
                Some of our picked properties near you location.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   place-items-center gap-6 w-10/12 mt-12'>
                {data.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
}

export default Estate;

Estate.propTypes = {
    data: PropTypes.array,
};
