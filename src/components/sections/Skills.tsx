import Card from "../Card"
import Section from "../Section"

export default function Skills() {
	const skills = [
		{ name: "Front-end", value: "NextJS, React, TS, TailwindCSS" },
		{ name: "Back-end", value: "NodeJS, PHP, Python, MySQL" },
		{ name: "Other", value: "Git, GCP, Docker, Fast learner" },
	]
	return (
		<Section id='skills'>
			<Card title='Skills' variables={skills} />
		</Section>
	)
}
