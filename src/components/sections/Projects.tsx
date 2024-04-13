import Card from "../Card"
import Section from "../Section"

const PROJECTS = [
	{
		name: "IlBarchetto",
		description: "Il Barchetto website built with NextJS 14 and Sanity.io CMS. This project is my first freelance project and I am proud of it.",
		img: "/il-barchetto.png",
		additionalInfo: [
			{ name: "stack", value: "NextJS, Sanity.io, TS, TailwindCSS" },
			{ name: "github", value: "https://github.com/JokerZenDev/il-barchetto", href: true },
			{ name: "preview", value: "https://www.agriturismobarchetto.com/" },
		],
	},
	{
		name: "MontecarloETF",
		description: "MonteCarloETF website built with NextJS and MongoDB. This is a personal project to simulate the results of an investment using ETF.",
		img: "/montercarlo-etf.png",
		additionalInfo: [
			{ name: "stack", value: "NextJS, MongoDB, TS, TailwindCSS" },
			{ name: "github", value: "https://github.com/JokerZenDev/montecarlo-etf", href: true },
			{ name: "preview", value: "https://montecarlo-etf.jokerzen.dev", href: true },
		],
	},
	{
		name: "MyPortfolio",
		description: "My portfolio website built with Vite and React TS.",
		img: "/portfolio.png",
		additionalInfo: [
			{ name: "stack", value: "Vite, React, TS, TailwindCSS" },
			{ name: "github", value: "https://github.com/JokerZenDev/portfolio", href: true },
			{ name: "preview", value: "https://jokerzen.dev", href: true },
		],
	},
]

export default function Projects() {
	return (
		<Section isCentered={false} id='projects'>
			{PROJECTS.map((project, key) => (
				<Card
					key={key}
					title="Projects"
					functionName={project.name}
					variables={project.additionalInfo}
					imgUrl={project.img}
				>
					{project.description}
				</Card>
			))}
		</Section>
	)
}
