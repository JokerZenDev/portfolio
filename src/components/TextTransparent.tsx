export default function TextTransparent({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<span className={`${className} text-[#515670] font-normal`}>
			{children}
		</span>
	)
}
