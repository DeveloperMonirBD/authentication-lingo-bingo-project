import About from "../components/About";
import Banner from "../components/Banner";
import CountUpComponent from "../components/CountUpComponent";
import EnhanceSkill from "../components/EnhanceSkill";
import Service from "../components/Service";


const Home = () => {
    return (
        <div className="">
            <Banner />
            <About />
            <CountUpComponent />
            <Service />
            <EnhanceSkill />
        </div>
    );
};

export default Home;