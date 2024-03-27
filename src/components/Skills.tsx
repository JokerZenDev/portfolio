import Section from "./Section"

export default function Skills() {
	const skills = [
		{ name: "Front-end", value: "NextJS, React, TS, TailwindCSS" },
		{ name: "Back-end", value: "NodeJS, PHP, Python, MySQL" },
		{ name: "Other", value: "Git, GCP, Docker" },
	]
	return (
		<Section title='Skills' id='skills' variables={skills} />
	)
}
