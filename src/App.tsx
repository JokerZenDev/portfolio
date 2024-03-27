import About from "./components/About"
import Sidebar from "./components/Sidebar"
import Skills from "./components/Skills"

function App() {
	return (
		<main className='flex w-full items-start'>
			<Sidebar />
			<div className='max-h-screen w-full overflow-auto'>
				<div className='flex flex-col gap-4 w-full h-full items-center'>
					<About />
					<Skills />
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
