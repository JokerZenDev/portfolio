const ACHIEVEMENTS = [
	{
		title: "Lead the transition to modern frontend development practices",
		description:
			"through the introduction and implementation of React and Next.js within the enterprise environment to significantly improve development efficiency, application speed, and user experience.",
	},
	{
		title: "Led complex project",
		description: "from analysis to release as a senior developer, ensuring seamless execution and high-quality deliverables.",
	},
	{
		title: "40% improvement in query performance",
		description:
			"by analyzing and optimizing a complex SQL query involving a join on a table with over 7 million records, significantly reducing wait times for users.",
	},
]

export default function Achievements() {
	return (
		<div className='flex flex-col gap-2'>
			<span className='text-xl font-bold'>Achievements</span>
			<hr />
			<div className='flex flex-col gap-2'>
				{ACHIEVEMENTS.map(({ title, description }, key) => (
					<div className='flex flex-col gap-1' key={key}>
						<span className='font-bold'>{title}</span>
						<span className='text-justify text-sm'>
							{description}
						</span>
					</div>
				))}
			</div>
		</div>
	)
}
