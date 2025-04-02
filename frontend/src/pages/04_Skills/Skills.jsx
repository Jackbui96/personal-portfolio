export default function Skills() {
    return (
        <section id="skills" className="h-screen snap-start flex flex-col items-center justify-center px-6">
            <h2 className="text-4xl font-bold mb-6">Skills</h2>
            <div className="flex flex-wrap justify-center gap-6">
                {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Node.js'].map(skill => (
                    <span key={skill} className="px-4 py-2 bg-gray-200 rounded-full text-lg">
            {skill}
          </span>
                ))}
            </div>
        </section>
    );
}
