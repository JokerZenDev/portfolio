import { Button } from "../ui/button"
import DotPattern from "../ui/dot-pattern"
import { cn } from "@/lib/utils"
import { TypeAnimation } from "react-type-animation"
import { SOCIALS } from "@/lib/constants"

const HERO_TEXT = "Full Stack Developer & Freelancer with over 6 years of experience. I have a genuine love for crafting digital experiences from scratch and thrive on the excitement of learning new things every day. I have honed my skills in both front-end and back-end development."

export function Hero() {
  return (
    <section
      className='w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-sky-600 to-sky-400 relative overflow-hidden'
      id='about'
    >
      <DotPattern
        className={cn(
          "fill-[#f3f3f360]"
        )}
      />
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col-reverse md:flex-row items-center justify-between space-y-8 space-y-reverse md:space-y-0 md:space-x-8'>
          <div className='flex flex-col items-start space-y-4 text-white'>
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  <TypeAnimation
                    sequence={[
                      'Michele Lenzi',
                      1000,
                      'Freelancer',
                      1000,
                      'Full Stack Developer',
                      1000,
                      'Problem Solver',
                      1000,
                      'Tech Enthusiast',
                      1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </h1>
            <p className='max-w-[600px] text-xl md:text-2xl text-gray-200'>
              {HERO_TEXT}
            </p>
            <p className='text-sm md:text-base text-gray-200 italic'>
              "There are 10 types of people in this world, those who understand
              binary and those who don't."
            </p>
            <div className='flex space-x-4'>
              <a href='#contact'>
                <Button className='bg-white text-sky-600 hover:bg-gray-100'>
                  Contact Me
                </Button>
              </a>
              <a href='#projects'>
                <Button
                  variant='outline'
                  className='text-white border-white hover:bg-white hover:text-sky-600'
                >
                  View Projects
                </Button>
              </a>
            </div>
            <div className='flex space-x-4 pt-4'>
              {SOCIALS.map((social) => (
              <a href={social.url} className='text-white hover:text-gray-200' key={social.name} target="_blank">
                <social.icon className='h-6 w-6' />
              </a>
              ))}
            </div>
          </div>
          <div className='relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]'>
            <img
              src='/hero.jpg'
              alt='John Doe'
              className='rounded-full border-4 border-white shadow-lg'
              width={320}
              height={320}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
