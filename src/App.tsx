import {
	FiChevronDown,
	FiChevronRight,
	FiFile,
	FiFileText,
	FiFolder,
	FiGitBranch,
	FiInfo,
	FiPackage,
} from "react-icons/fi"
import Section from "./components/Section"
import logo from "./assets/logo.svg"
import TextTransparent from "./components/TextTransparent"

const ABOUT_TEXT =
	"Hi, I'm Michele lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consectetur voluptatem. Voluptatum molestiae impedit earum nihil nulla consequatur dolores molestias quis unde expedita? Commodi quo ipsa ex, quae quasi dolore."

function App() {
	return (
		<main className='flex w-full items-start'>
			<div className='flex flex-col justify-between items-start w-1/5 h-screen px-6 py-16 border-r border-[#779]'>
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
				<div>socials</div>
			</div>
			<div className='max-h-screen w-full overflow-scroll'>
				<div className='flex flex-col gap-4 w-full h-full items-center'>
					<Section title='About' id='about'>
						{ABOUT_TEXT}
					</Section>
					<Section title='Skills' id='skills'>
						{ABOUT_TEXT}
					</Section>
				</div>
			</div>
			<a
				href='mailto:s0Ig6@example.com'
				className='absolute top-6 right-6'
			>
				Contact me
			</a>
		</main>
	)
}

export default App
