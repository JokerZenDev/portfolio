import Card from "../Card"
import Section from "../Section"

const ABOUT_TEXT = [
	"Hi, I'm Michele a dedicated and enthusiastic Full Stack Web Developer with over 6 years of experience in creating robust and user-friendly web applications.",
	"I have a genuine love for crafting digital experiences from scratch and thrive on the excitement of learning new technologies every day.",
	"I have honed my skills in both front-end and back-end development, allowing me to seamlessly bridge the gap between design and functionality.",
	"I take great pride in my ability to bring creative ideas to life and deliver high-quality solutions.",
	"Working collaboratively is second nature to me, and I truly enjoy being part of a team where we can leverage our diverse skill sets to tackle challenging projects.",
]

export default function About() {
	return (
		<Section id='about'>
			<Card title='About' imgUrl='/hero.jpg'>
				{ABOUT_TEXT.map((text, key) => (
					<p key={key} className='text-justify'>
						{text}
					</p>
				))}
			</Card>
		</Section>
	)
}
