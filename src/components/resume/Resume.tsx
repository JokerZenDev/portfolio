import { FiGlobe, FiMail, FiPhone } from "react-icons/fi"
import { usePDF } from "react-to-pdf"
import LeftSide from "./LeftSide"
import Summary from "./Summary"
import Achievements from "./Achievements"
import Experience from "./Experience"
import Passions from "./Passions"

export default function Resume() {
	const { toPDF, targetRef } = usePDF({ filename: "page.pdf" })

	return (
		<main className='w-full relative'>
			<button className='absolute top-4 right-4 border border-black py-4 px-8 bg-[#1a1b26]' onClick={() => toPDF()}>
				Download PDF
			</button>
			<section
				className='w-full max-w-[1000px] mx-auto flex border border-black min-h-screen'
				ref={targetRef}
			>
				<LeftSide />
				<div className='w-full flex flex-col gap-10 px-8 py-12 bg-[#1a1b26]'>
					<div className='flex flex-col gap-2 mt-1 mb-2'>
						<h2 className='text-2xl font-bold'>Full Stack Web developer</h2>
						<div className='flex gap-8 text-sm items-center'>
							<div className='flex items-center gap-2'>
								<FiPhone />
								<a href='tel:+393490612423'>+39 3490612423</a>
							</div>
							<div className='flex items-center gap-2'>
								<FiMail />
								<a href='mailto:michele.lenzi98@gmail.com'>michele.lenzi98@gmail.com</a>
							</div>
							<div className='flex items-center gap-2'>
								<FiGlobe />
								<a href='https://jokerzen.dev'>https://jokerzen.dev</a>
							</div>
						</div>
					</div>
					<Summary />
					<Achievements />
					<Experience />
					<Passions />
				</div>
			</section>
		</main>
	)
}
