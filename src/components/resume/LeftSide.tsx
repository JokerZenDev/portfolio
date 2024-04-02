export default function LeftSide() {
	return (
		<div className='w-2/5 px-8 py-12 flex flex-col items-center gap-10 bg-[#16161e] border-r border-r-black'>
			<h1 className='text-3xl font-bold whitespace-nowrap'>
				Michele Lenzi
			</h1>
			<img
				src='/cv.jpg'
				alt='Michele Lenzi'
				className='w-40 h-40 rounded-full'
			/>
			<Skills />
			{/* <IndustryExpertise /> */}
			<Languages />
		</div>
	)
}

const Skills = () => {
	return (
		<div className='w-full flex flex-col gap-2'>
			<span className='text-xl font-bold'>Skills</span>
			<hr />
			<div className='flex flex-col gap-2'>
				<div className='flex flex-col gap-1'>
					<span className='font-bold'>Front-end</span>
					<span>NextJS, React, TS, TailwindCSS</span>
				</div>
				<div className='flex flex-col gap-1'>
					<span className='font-bold'>Back-end</span>
					<span>NodeJS, PHP, Python, MySQL</span>
				</div>
				<div className='flex flex-col gap-1'>
					<span className='font-bold'>Other</span>
					<span>Git, GCP, Docker, Fast learner</span>
				</div>
			</div>
		</div>
	)
}

const IndustryExpertise = () => {
	return (
		<div className='w-full flex flex-col gap-2'>
			<span className='text-xl font-bold'>Industry Expertise</span>
			<hr />
			<div className='flex flex-col gap-2'>
				<div className='flex justify-between'>
					<span>Italiano</span>
					<span>Native</span>
				</div>
				<div className='flex justify-between'>
					<span>English</span>
					<span>B2</span>
				</div>
			</div>
		</div>
	)
}

const Languages = () => {
	return (
		<div className='w-full flex flex-col gap-2'>
			<span className='text-xl font-bold'>Languages</span>
			<hr />
			<div className='flex flex-col gap-2'>
				<div className='flex justify-between'>
					<span>Italiano</span>
					<span>Native</span>
				</div>
				<div className='flex justify-between'>
					<span>English</span>
					<span>B2</span>
				</div>
			</div>
		</div>
	)
}