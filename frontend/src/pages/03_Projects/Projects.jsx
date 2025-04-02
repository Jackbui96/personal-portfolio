import ProjectCarousel from "./ProjectCarousel.jsx";
import { listOfProjects } from "./ProjectData"

export default function Projects() {
    return (
        <section id="projects" className="h-screen snap-start flex flex-col items-center justify-center px-6">
            <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>
            <ProjectCarousel items={ listOfProjects } />
        </section>
    )
}
