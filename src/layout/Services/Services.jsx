import NewWay from "../../components/Section/NewWay";
import YourService from "../../components/Section/YourService";
import Title from "../../components/Title/Title";

function Services() {
    return (
        <section className='container animate__animated animate__fadeIn animate__slow'>
            <Title location='Services' />
            <YourService />
            <NewWay />
        </section>
    );
}

export default Services;
