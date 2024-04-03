import About from "./components/sections/About"
import logo from "./assets/logo.svg"
import Projects from "./components/sections/Projects"
import Sidebar from "./components/Sidebar"
import Skills from "./components/sections/Skills"
import Resume from "./components/resume/Resume"
import { Route, Routes } from "react-router-dom"

function App() {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<main className='flex flex-col w-full'>
						<div className='w-full h-20 flex items-center justify-between px-4 py-2 border-b border-black'>
							<div className='h-full flex gap-4 items-center'>
								<img src={logo} alt='logo' className='h-full' />
								<span className='text-3xl'>
									Michele's Portfolio
								</span>
							</div>
							<a
								href='mailto:michelle.lenzi98@gmail.com'
								className='h-full text-xl flex items-center'
							>
								Contact me
							</a>
						</div>
						<div className='flex w-full items-start'>
							<Sidebar />
							<div className='max-h-[calc(100vh-5rem)] w-full overflow-auto'>
								<div className='flex flex-col w-full h-full items-center bg-[#1a1b26]'>
									{/* <Home /> */}
									<About />
									<Skills />
									<Projects />
								</div>
							</div>
						</div>
					</main>
				}
			/>
			<Route path='/resume' element={<Resume />} />
		</Routes>
	)
}

export default App
