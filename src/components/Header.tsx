import { SunIcon } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/button"

export function Header() {
  const [showJoke, setShowJoke] = useState(false)

  return (
    <header className='px-4 lg:px-6 h-14 flex items-center border-b border-gray-800'>
      <a className='flex items-center justify-center' href='#'>
        <img src='/logo.svg' alt='Full Stack Dev' className='h-6 w-6' />
        <span className='sr-only'>Full Stack Dev</span>
      </a>
      <nav className='ml-auto flex gap-4 sm:gap-6 items-center'>
        <a
          className='text-sm font-medium hover:underline underline-offset-4'
          href='#about'
        >
          About
        </a>
        <a
          className='text-sm font-medium hover:underline underline-offset-4'
          href='#skills'
        >
          Skills
        </a>
        <a
          className='text-sm font-medium hover:underline underline-offset-4'
          href='#projects'
        >
          Projects
        </a>
        <a
          className='text-sm font-medium hover:underline underline-offset-4'
          href='#contact'
        >
          Contact
        </a>
        <button
          className='text-sm font-medium hover:underline underline-offset-4'
          onClick={() => setShowJoke(true)}
        >
          <SunIcon className='h-6 w-6' />
        </button>
      </nav>
      {showJoke && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-sm">
          <p className="text-lg font-semibold mb-4 text-sky-400">
				Really? Switching to light mode?
            </p>
            <p className='mb-4'>
               Just remember: light attracts bugs!
            </p>
            <Button onClick={() => setShowJoke(false)} variant="outline" className="text-sky-400 border-sky-400 hover:bg-sky-400 hover:text-gray-900">Close</Button>
          </div>
        </div>
      )}
    </header>
  )
}
