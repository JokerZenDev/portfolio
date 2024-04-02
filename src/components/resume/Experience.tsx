const JOBS = [
	{
		title: "Full Stack Web developer",
		duration: "2017 - Present",
		company: "SBS S.p.A.",
		location: "Italy",
		achievements: [
			"Development and maintenance of web applications for data analysis of our main services.",
			"Refactoring e-commerce to make it more user-friendly and automate the creation and updating of products from the PIM.",
			"Development of new web service to automate periodical report generation.",
			"Improvement of web service API performance by 40%.",
			"Deployment and management of the projects in Google Cloud Platform.",
			"Led the shift towards contemporary frontend development methodologies.",
		],
	},
]

export default function Experience() {
	return (
		<div className='flex flex-col gap-2'>
			<span className='text-xl font-bold'>Experience</span>
			<hr />
			<div className='flex flex-col gap-2'>
				{JOBS.map(
					(
						{ title, duration, company, location, achievements },
						key
					) => (
						<div className='flex flex-col gap-1' key={key}>
							<div className='flex justify-between items-center'>
								<span className='text-lg font-bold'>
									{title}
								</span>
								<span className='text-sm'>{duration}</span>
							</div>
							<div className='flex justify-between'>
								<span className='font-bold'>{company}</span>
								<span>{location}</span>
							</div>
							<ul className='text-sm list-disc list-inside'>
								{achievements.map((achievement, key) => (
									<li key={key}>{achievement}</li>
								))}
							</ul>
						</div>
					)
				)}
			</div>
		</div>
	)
}
