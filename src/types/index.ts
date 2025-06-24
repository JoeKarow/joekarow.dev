export interface SiteConfig extends HeaderProps {
	title: string
	description: string
	lang: string
	author: string
	socialLinks: SocialLinksProps[]
	socialImage: string
	canonicalURL?: string
}
export interface SocialLinksProps {
	text: string
	href: string
	icon?: { name: string }
}
export interface SiteContent {
	hero: HeroProps
	experience: ExperienceProps[]
	projects: ProjectProps[]
	about: AboutProps
}

export interface HeroProps {
	name: string
	specialty: string
	summary: string
	email: string
	socialLinks?: SocialLinksProps[]
}

export interface ExperienceProps {
	company: string
	position: string
	startDate: string
	endDate: string
	summary: string | string[]
}

export interface ProjectProps {
	name: string
	summary: string
	image: string
	links?: {
		href: string
		text: string
	}[]
}

export interface AboutProps {
	description: string[]
	image: string
}

export interface HeaderProps {
	siteLogo: string
	navLinks: { text: string; href: string }[]
}
