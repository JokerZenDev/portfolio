import React from "react"

export default function Section({
	id,
	isCentered = true,
	children,
}: {
	id: string
	isCentered?: boolean
	children?: React.ReactNode
}) {
	return (
		<div
			className={`lg:h-[calc(100vh-5rem)] flex flex-col lg:flex-row w-full items-center ${isCentered ? "justify-center" : "justify-start"} gap-16 overflow-auto py-8 md:p-16`}
			id={id}
		>
			{children}
		</div>
	)
}
