import React from "react"
import TextTransparent from "./TextTransparent"

const ROW_NUMBERS: number[] = []

for (let i = 1; i <= 100; i++) {
	ROW_NUMBERS.push(i)
}

export default function Section({
	title,
	id,
	children,
}: {
	title: string
	id: string
	children: React.ReactNode
}) {
	return (
		<div className='h-screen flex place-items-center' id={id}>
			<section className='flex flex-col gap-2 py-2 border border-[#779] rounded-2xl bg-[#1a1b26]'>
				<div className='flex items-center gap-3 w-full text-left px-4'>
					<div className='flex gap-2'>
						<span className='w-3 h-3 rounded-full bg-[#ff5f57]'></span>
						<span className='w-3 h-3 rounded-full bg-[#febc2e]'></span>
						<span className='w-3 h-3 rounded-full bg-[#29c73f]'></span>
					</div>
					<div className='section__header__icon'></div>
					<span className='section__header__filename'>
						src/{title}.tsx
					</span>
				</div>
				<div className='w-full border-b border-[#779]' />
				<div className='relative'>
					<div className='absolute top-0 left-0 bottom-0 right-0 w-10 h-full overflow-hidden'>
						<div className='text-[#363b54] py-1 px-2 flex flex-col items-end overflow-hidden'>
							{ROW_NUMBERS.map((number) => (
								<div key={number} className='number'>
									{number}
								</div>
							))}
						</div>
					</div>
					<div className='flex flex-col items-start max-w-[50rem] py-1 px-2 ml-10 gap-0'>
						<div className='text-white'>
							<TextTransparent>const </TextTransparent>
							{title}
							<TextTransparent>{" = () => {"}</TextTransparent>
						</div>
						<div className='text-left pl-8'>
							<TextTransparent>return (</TextTransparent>
							<div className='whitespace-pre-wrap break-words pl-8'>
								{children}
							</div>
							<TextTransparent>)</TextTransparent>
						</div>
						<TextTransparent>{`}`}</TextTransparent>
					</div>
				</div>
			</section>
		</div>
	)
}
