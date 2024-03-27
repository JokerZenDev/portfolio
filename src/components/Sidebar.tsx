import {
	FiChevronRight,
	FiFile,
	FiFileText,
	FiFolder,
	FiGitBranch,
	FiInfo,
	FiPackage,
} from "react-icons/fi"
import logo from "../assets/logo.svg"
import TextTransparent from "./TextTransparent"
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa"

export default function Sidebar() {
	return (
		<div className='flex flex-col justify-between items-start w-1/5 h-screen px-6 py-16 border-r border-black'>
			<div className='text-4xl flex justify-center w-full'>
				<img src={logo} alt='logo' className='w-100' />
			</div>
			{/* <div>logo</div> */}
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
							<li className='flex items-center gap-2'>
								<FiFileText />
								<a href='#about'>
									About
									<TextTransparent>.tsx</TextTransparent>
								</a>
							</li>
							<li className='flex items-center gap-2'>
								<FiFile />
								<a href='#skills'>
									Skills
									<TextTransparent>.tsx</TextTransparent>
								</a>
							</li>
							<li className='flex items-center gap-2'>
								<FiFile />
								<a href='#skills'>
									Projects
									<TextTransparent>.tsx</TextTransparent>
								</a>
							</li>
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
						<a href='mailto:s0Ig6@example.com'>
							CONTACTME
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
