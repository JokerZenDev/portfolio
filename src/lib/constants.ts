import { Github, Linkedin, Mail, Youtube } from "lucide-react"

export const SOCIALS = [
	{
		name: 'GitHub',
		icon: Github,
		url: 'https://github.com/JokerZenDev'
	},
	{
		name: 'LinkedIn',
		icon: Linkedin,
		url: 'https://www.linkedin.com/in/michele-lenzi-6386a1151/'
	},
	{
		name: 'YouTube',
		icon: Youtube,
		url: 'https://www.youtube.com/@MikyInDevMode'
	},
	{
		name: 'Mail',
		icon: Mail,
		url: 'mailto:michelle.lenzi98@gmail.com'
	}
] as const