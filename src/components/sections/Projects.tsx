import Card from "../Card"
import Section from "../Section"

const ABOUT_TEXT =
	"Hi, I'm Michele lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consectetur voluptatem. Voluptatum molestiae impedit earum nihil nulla consequatur dolores molestias quis unde expedita? Commodi quo ipsa ex, quae quasi dolore."

export default function Projects() {
	return (
		<Section isCentered={false} id='projects'>
			<Card
				title='Projects'
				functionName="miky.dev"
				variables={[
					{ name: "stack", value: "NextJS, React, TS, TailwindCSS" },
					{ name: "github", value: "https://github.com/miky", href: true },
					{ name: "preview", value: "https://miky.dev", href: true },
				]}
				imgUrl='/hero.jpg'
			>
				{ABOUT_TEXT}
			</Card>
			<Card title='Projects' imgUrl='/hero.jpg'>
				{ABOUT_TEXT}
			</Card>
		</Section>
	)
}
