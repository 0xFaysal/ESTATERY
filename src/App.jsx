import {Outlet} from "react-router-dom";
import NavBar from "./components/Header/NavBar";
import Footer from "./components/Footer/Footer";
import Title from "./components/Title/Title";

function App() {
    return (
        <>
            <Title />
            <header className=' mx-auto z-20  bg-transparent'>
                <NavBar />
            </header>

            <main>
                <Outlet />
            </main>
            <section>
                <Footer />
            </section>
        </>
    );
}

export default App;
