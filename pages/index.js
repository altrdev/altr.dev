import ParallaxBackground from "../components/ParallaxBackground";
import FloatingIntro from "../components/FloatingIntro";
import ContentResume from "../components/content/ContentResume";
import {properties} from "../utils/properties";

export default function Home() {
    return (
        <div className="animateLoading">
            <ParallaxBackground/>
            <FloatingIntro data={properties}/>
            <ContentResume data={properties}/>
        </div>
    );
}

