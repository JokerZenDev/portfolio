import { SOCIALS } from "@/lib/constants";

export function Footer() {
	return (
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Michele Lenzi. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          {SOCIALS.map((social) => (
            <a className="text-xs hover:underline underline-offset-4" href={social.url} key={social.name} target="_blank">
              <social.icon className="h-6 w-6" />
              <span className="sr-only">{social.name}</span>
            </a>
          ))}
        </nav>
      </footer>
	)
}