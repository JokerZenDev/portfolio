import {
	FiChevronRight,
	FiFile,
	FiFileText,
	FiFolder,
	FiGitBranch,
	FiInfo,
	FiPackage,
} from "react-icons/fi"
import TextTransparent from "./TextTransparent"
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa"

const LINKS = [
	// { name: "Home", href: "#home" },
	{ name: "About", href: "#about" },
	{ name: "Skills", href: "#skills" },
	{ name: "Projects", href: "#projects" },
]

export default function Sidebar() {
	return (
		<div className='flex flex-col justify-between items-start w-1/5 h-[calc(100vh-5rem)] p-6 border-r border-black'>
			<div className='flex flex-col gap-2 text-lg'>
				<ul className='flex flex-col gap-2'>
					<li>
						<TextTransparent className='flex items-center gap-2'>
							<FiChevronRight />
							<FiFolder />
							node_modules
						</TextTransparent>
					</li>
					<li>
						<TextTransparent className='flex items-center gap-2'>
							<FiChevronRight />
							<FiFolder />
							public
						</TextTransparent>
					</li>
					<li>
						<TextTransparent className='flex items-center gap-2'>
							<FiChevronRight />
							<FiFolder />
							src
						</TextTransparent>
					</li>
					<li>
						<ul className='flex flex-col gap-2 pl-10'>
							{LINKS.map((link) => (
								<li
									key={link.name}
									className='flex items-center gap-2'
								>
									<FiFileText />
									<a href={link.href}>
										{link.name}
										<TextTransparent>.tsx</TextTransparent>
									</a>
								</li>
							))}
						</ul>
					</li>
					<li>
						<TextTransparent className='flex items-center gap-2'>
							<FiGitBranch />
							.gitignore
						</TextTransparent>
					</li>
					<li className='flex items-center gap-2'>
						<FiInfo />
						<a href='/resume'>
							RESUME
							<TextTransparent>.md</TextTransparent>
						</a>
					</li>
					<li>
						<TextTransparent className='flex items-center gap-2'>
							<FiPackage />
							package.json
						</TextTransparent>
					</li>
				</ul>
			</div>
			<div className='flex gap-6 w-full justify-center'>
				<a href='https://github.com/JokerZenDev' target='_blank'>
					<FaGithub className='h-8 w-8' />
				</a>
				<a
					href='https://www.linkedin.com/in/michele-lenzi-6386a1151/'
					target='_blank'
				>
					<FaLinkedin className='h-8 w-8' />
				</a>
				<a
					href='https://www.youtube.com/@MikyInDevMode'
					target='_blank'
				>
					<FaYoutube className='h-8 w-8' />
				</a>
			</div>
		</div>
	)
}
