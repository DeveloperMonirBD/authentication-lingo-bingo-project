import About from "../components/About";
import Banner from "../components/Banner";
import CountUpComponent from "../components/CountUpComponent";
import Service from "../components/Service";


const Home = () => {
    return (
        <div className="">
            <Banner />
            <CountUpComponent />
            <About />
            <Service />
        </div>
    );
};

export default Home;