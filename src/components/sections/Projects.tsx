import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const PROJECTS = [
	{
		title: "IlBarchetto",
		description: "Il Barchetto website built with NextJS 14 and Sanity.io CMS. This project is my first freelance project and I am proud of it.",
		img: "/il-barchetto.png",
		stack: ["NextJS", "Sanity.io", "TypeScript"],
		github: "https://github.com/JokerZenDev/il-barchetto",
		preview: "https://www.agriturismobarchetto.com/",
	},
	{
		title: "MontecarloETF",
		description: "MonteCarloETF website built with NextJS and MongoDB. This is a personal project to simulate the results of an investment using ETF.",
		img: "/montercarlo-etf.png",
		stack: ["NextJS", "MongoDB", "TypeScript"],
		github: "https://github.com/JokerZenDev/montecarlo-etf",
		preview: "https://montecarlo-etf.jokerzen.dev",
	},
	{
		title: "MyPortfolio",
		description: "My portfolio website built with Vite and React TS.",
		img: "/portfolio.png",
		stack: ["Vite", "React", "TypeScript"],
		github: "https://github.com/JokerZenDev/portfolio",
		preview: "https://jokerzen.dev",
	},
]

export function Projects() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800" id="projects">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-sky-400">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((project, index) => (
					<div className="flex flex-col items-center justify-between space-y-4 border border-gray-700 p-4 rounded-lg bg-gray-900" key={index}>
            <div className="flex flex-col items-center space-y-2">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="rounded-lg object-cover w-full h-[100px]"
                    width={100}
                    height={100}
                  />
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <p className="text-sm text-gray-400 text-center">{project.description}</p>
                  <div className="flex space-x-4">
                    {project.stack.map((stack, index) => (
                      <Badge key={index} className="bg-gray-700 text-gray-100 hover:bg-gray-600 text-xs">{stack}</Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.github && <Button variant="outline" className="text-sky-400 border-sky-400 hover:bg-sky-400 hover:text-gray-900" key={index}>GitHub</Button>}
                    {project.preview && <Button variant="outline" className="border-sky-400 bg-sky-400 text-gray-900 hover:bg-sky-500 hover:text-gray-900" key={index}>Preview</Button>}
                  </div>
                </div>
              ))}
            </div>
          </div>
    </section>
  )
}
