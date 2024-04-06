import TextTransparent from "./TextTransparent"
import { FiX } from "react-icons/fi"
import { FaReact } from "react-icons/fa"

const ROW_NUMBERS: number[] = []

for (let i = 1; i <= 100; i++) {
	ROW_NUMBERS.push(i)
}

export default function Card({
	title,
	functionName,
	variables,
	imgUrl,
	children,
}: {
	title: string
	functionName?: string
	variables?: { name: string; value: string; href?: boolean }[]
	imgUrl?: string
	children?: React.ReactNode
}) {
	return (
		<section className='flex flex-col min-w-[75%] border border-black lg:shadow-2xl rounded-xl overflow-hidden'>
			<div className='flex gap-2 p-3 border-b border-black items-center bg-[#16161e]'>
				<span className='w-3 h-3 rounded-full bg-[#ff5f57]'></span>
				<span className='w-3 h-3 rounded-full bg-[#febc2e]'></span>
				<span className='w-3 h-3 rounded-full bg-[#29c73f]'></span>
			</div>
			<div className='flex flex-col xl:flex-row'>
				<div className='relative flex flex-col w-full bg-[#16161e]'>
					<div className='flex items-center gap-3 w-fit text-left px-4 py-2 bg-[#16161e] border-r border-black'>
						<FaReact />
						<span>src/{title}.tsx</span>
						<FiX />
					</div>
					<div className='w-full border-b border-black' />
					<div className='bg-[#1a1b26]'>
						<div className='relative mt-2'>
							<div className='absolute top-0 left-0 bottom-0 right-0 w-10 h-full overflow-hidden'>
								<div className='text-[#363b54] py-1 px-2 flex flex-col items-end overflow-hidden'>
									{ROW_NUMBERS.map((number) => (
										<div key={number} className='number'>
											{number}
										</div>
									))}
								</div>
							</div>
							<div className='flex flex-col items-start py-1 px-2 pr-4 lg:pr-8 ml-10 gap-0 lg:whitespace-nowrap'>
								<div className='text-white'>
									<TextTransparent>const </TextTransparent>
									{functionName || title}
									<TextTransparent>
										{" = () => {"}
									</TextTransparent>
								</div>
								<div className='text-left pl-4 lg:pl-8'>
									{variables &&
										variables.map(
											({ name, value, href = false }) => (
												<div key={name}>
													<TextTransparent>
														const{" "}
													</TextTransparent>
													{href ? (
														<a
															href={value}
															target='_blank'
															rel='noreferrer'
														>
															{name}
														</a>
													) : (
														name
													)}
													<TextTransparent>
														{" "}
														= {"["}
													</TextTransparent>
													{href ? (
														<>
															<a
																href={value}
																className='underline lg:hidden'
																target='_blank'
																rel='noreferrer'
															>
																Link
															</a>
															<a
																href={value}
																className='underline hidden lg:block'
																target='_blank'
																rel='noreferrer'
															>
																{value}
															</a>
														</>
													) : (
														value
													)}
													<TextTransparent>
														{"]"}
													</TextTransparent>
												</div>
											)
										)}
									{children && (
										<>
											<TextTransparent>
												return (
											</TextTransparent>
											<div className='lg:whitespace-pre-wrap break-words pl-4 lg:pl-8 flex flex-col'>
												{children}
											</div>
											<TextTransparent>)</TextTransparent>
										</>
									)}
								</div>
								<TextTransparent>{`}`}</TextTransparent>
							</div>
						</div>
					</div>
				</div>
				{imgUrl && (
					<div className='w-full h-[100vw] max-h-80 xl:max-h-none xl:h-auto relative border-l border-black'>
						<img
							src={imgUrl}
							alt={title}
							className='w-full h-full absolute object-cover'
						/>
					</div>
				)}
			</div>
		</section>
	)
}
