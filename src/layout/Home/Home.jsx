import {useLoaderData} from "react-router-dom";
import Estate from "../../components/Estate/Estate";
import Subscribe from "../../components/Subscribe/Subscribe";
import Title from "../../components/Title/Title";
import Hero from "../../components/Hero/Hero";

function Home() {
    const data = useLoaderData();

    return (
        <main>
            <Title location='Home' />
            <Hero />
            <Estate data={data} />
            <Subscribe />
        </main>
    );
}

export default Home;
