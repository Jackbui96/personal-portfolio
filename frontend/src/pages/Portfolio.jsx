import LandingPage from "./01_Landing_Page/LandingPage.jsx";
import About from "./02_About/About.jsx";
import Projects from "./03_Projects/Projects.jsx";
import Skills from "./04_Skills/Skills.jsx";
import Contact from "./05_Contact/Contact.jsx";
import Footer from "./06_Footer/Footer.jsx";
import ScrollDots from "./ScrollDots.jsx";
import ChatbotWidget from "../components/Common/ChatbotWidget.jsx";

export default function Portfolio() {
    return (
        <div className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory scrollbar-none">
            <LandingPage />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
            <ScrollDots />
            <ChatbotWidget />
        </div>
    )
}
