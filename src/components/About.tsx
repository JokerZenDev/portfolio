import Section from "./Section"

const ABOUT_TEXT =
	"Hi, I'm Michele lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consectetur voluptatem. Voluptatum molestiae impedit earum nihil nulla consequatur dolores molestias quis unde expedita? Commodi quo ipsa ex, quae quasi dolore."

export default function About() {
	return (
		<Section title='About' id='about'>
			{ABOUT_TEXT}
		</Section>
	)
}
