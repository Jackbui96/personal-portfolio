import LandingPage from "./01_Landing/LandingPage.jsx";
import About from "./02_About/About.jsx";
import Projects from "./03_Projects/Projects.jsx";
import Contact from "./04_Contact/Contact.jsx";
import ScrollDots from "./ScrollDots.jsx";
import ChatbotWidget from "../components/Common/ChatbotWidget.jsx";

export default function Portfolio() {
    return (
        <div className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory scrollbar-none">
            <LandingPage />
            <About />
            <Projects />
            <Contact />
            <ScrollDots />
            <ChatbotWidget />
        </div>
    )
}
