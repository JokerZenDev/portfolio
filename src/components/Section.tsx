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
			className={`h-[calc(100vh-5rem)] flex w-full items-center ${isCentered ? "justify-center" : "justify-start"} gap-16 overflow-auto p-16`}
			id={id}
		>
			{children}
		</div>
	)
}
