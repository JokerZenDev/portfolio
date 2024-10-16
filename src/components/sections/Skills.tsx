const SKILLS = [
  "TypeScript", "Python", "NextJS", "React", "React Native", "PHP",
  "GCP", "Docker"
]

export function Skills() {
  return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900" id="skills">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-sky-400">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {SKILLS.map((skill) => (
                <div key={skill} className="flex items-center justify-center p-4 bg-gray-700 rounded-lg shadow">
                  <span className="font-mono">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}
