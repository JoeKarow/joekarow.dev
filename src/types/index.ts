export interface SiteConfig extends HeaderProps {
	title: string
	description: string
	lang: string
	socialLinks: SocialLinksProps[]
	socialImage: string
	canonicalURL?: string
}
export interface SocialLinksProps {
	text: string
	href: string
}
export interface SiteContent {
	hero: HeroProps
	skills: SkillsProps
	experience: ExperienceProps[]
	projects: ProjectProps[]
}

export interface HeroProps {
	status: string
	greeting: string
	headline: string
	summary: string
	image: string
}

export interface ExperienceProps {
	company: string
	position: string
	startDate: string
	endDate: string
	summary: string[]
}

export interface ProjectProps {
	name: string
	summary: string
	image: string
	imageAlt?: string
	centerImage?: boolean
	/** Eyebrow shown above the featured (first) project's name. */
	label?: string
	technologies: string[]
	links?: {
		href: string
		text: string
	}[]
}

export interface SkillsProps {
	title: string
	categories: {
		name: string
		skills: string[]
	}[]
}

export interface HeaderProps {
	author: string
	email: string
	siteLogo: string
	navLinks: { text: string; href: string }[]
}
