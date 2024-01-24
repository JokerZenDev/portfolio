import Section from "./Section"

export default function Skills() {
	const skills = [
		{ name: "Front-end", value: "React, NextJS, JS, TS, CSS, TailwindCSS" },
		{ name: "Back-end", value: "NodeJS, PHP, Python, MySQL" },
		{ name: "Other", value: "Git, Google Cloud Platform" },
	]
	return (
		<Section title='Skills' id='skills' variables={skills} />
	)
}
