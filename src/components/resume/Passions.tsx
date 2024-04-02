const PASSIONS = [
	{
		title: "Personal finance",
		description:
			"Deeply interested in personal finance, focusing on effective strategies for budgeting, investing, and wealth building to achieve personal financial goals.",
	},
	{
		title: "Self-Improvement",
		description:
			"Committed to continuous self-improvement, actively engaging in learning new skills, personal development activities, and staying abreast of industry trends to enhance both personal and professional growth.",
	},
]

export default function Passions() {
	return (
		<div className='w-full flex flex-col gap-2'>
			<span className='text-xl font-bold'>Passions</span>
			<hr />
			<div className='flex flex-col gap-2'>
				{PASSIONS.map(({ title, description }, key) => (
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
