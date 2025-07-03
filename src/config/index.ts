import type { SiteConfig, SiteContent } from '../types'
export const SITE_CONFIG: SiteConfig = {
	title: 'Joe Karow — Full Stack Software Engineer',
	author: 'Joe Karow',
	description:
		'Full-Stack Software Engineer specializing in mission-driven technology solutions. I build scalable web applications that create meaningful social impact, with expertise in JavaScript/TypeScript, Python, and modern CI/CD practices.',
	lang: 'en',
	siteLogo: '/memoji.webp',
	navLinks: [
		{ text: 'About', href: '#about' },
		{ text: 'Experience', href: '#experience' },
		{ text: 'Featured Work', href: '#projects' },
		{ text: 'Technical Skills', href: '#skills' },
	],
	socialLinks: [
		{
			text: 'Bluesky',
			href: 'https://bsky.app/profile/joekarow.dev',
			icon: { name: 'logos:bluesky' },
		},
		{
			text: 'LinkedIn',
			href: 'https://www.linkedin.com/in/jkarow/',
			icon: { name: 'logos:linkedin-icon' },
		},
		{
			text: 'Github',
			href: 'https://github.com/JoeKarow',
			icon: { name: 'logos:github-icon' },
		},
	],
	socialImage: '/preview.png',
	canonicalURL: 'https://joekarow.dev',
}

export const SITE_CONTENT: SiteContent = {
	hero: {
		name: 'Joe Karow',
		specialty: 'Full Stack Software Engineer',
		summary: SITE_CONFIG.description,
		// "Developer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
		email: 'hello@joekarow.dev',
		socialLinks: SITE_CONFIG.socialLinks,
	},
	skills: {
		title: 'Technical Skills',
		categories: [
			{
				name: 'Languages & Frameworks',
				skills: [
					'JavaScript/TypeScript',
					'Python',
					'Go',
					'Swift',
					'Kotlin',
					'React',
					'Next.js',
					'Node.js',
					'HTML',
					'CSS'
				]
			},
			{
				name: 'Databases & Tools',
				skills: [
					'PostgreSQL',
					'MongoDB',
					'SQL',
					'AWS',
					'CI/CD',
					'Web Accessibility',
					'Git',
					'RESTful APIs'
				]
			},
			{
				name: 'Development Focus',
				skills: [
					'Full-stack web applications',
					'Mobile app development',
					'Data integration & automation',
					'Process optimization'
				]
			}
		]
	},
	experience: [
		{
			company: 'InReach',
			position: 'Lead Engineer',
			startDate: 'September 2022',
			endDate: 'October 2024',
			summary: [
				"Led the complete rewrite of the organization's legacy application, transitioning it from an outdated codebase to a modern, scalable architecture.",
				'Designed and implemented CI/CD pipelines for code quality enforcement, automated deployments, database migrations, and translation workflow synchronization.',
				'Enhanced language access by utilizing Crowdin for crowdsourced translations from volunteers to ensure accurate, inclusive, and culturally competent language support.',
				'Updated iOS & Android apps to comply with latest Apple/Google standards.',
				'Managed cloud resources to minimize waste expense without sacrificing performance.',
				'Managed team of interns, volunteers, and contractors using agile workflows.',
			],
		},
		{
			company: '100Devs',
			position: 'Full Stack Engineer',
			startDate: 'January 2022',
			endDate: 'September 2022',
			summary: [
				'Collaborated with a team of community taught developers to build modern and responsive web applications.',
				'Offered peer mentorship by sharing technical knowledge and best practices with team members through regular pair programming sessions and collaborative code reviews.',
			],
		},
		{
			company: 'Hilton',
			position: 'Director of Finance',
			startDate: 'August 2015',
			endDate: 'August 2021',
			summary: [
				'Finance lead for various hotels, including the Embassy Suites Old Town Alexandria, Hilton Garden Inn Alexandria, Washington Hilton, and Hilton Crystal City. Managed diverse teams, implementing Agile processes to deliver workflow efficiency while ensuring a profitable, productive hotel operation.',
				'Developed a daily sales tax reconciliation application that integrated data from multiple sources (POS, property management, and financial systems), normalizing and adapting disparate data formats to reduce monthly sales tax return filing time from 4+ hours down to under 30 minutes, while also reducing sales tax collection variances to less than 0.5% on $10m monthly sales volume. This application was celebrated as a best practice and shared at a conference attended by all hotel finance leaders in North & South America.',
				'Developed multiple smaller tools/applications to reduce month-end financial closing time from 60+ working hours to less than 24 working hours.',
			],
		},
	],
	projects: [
		{
			name: 'InReach App',
			summary:
				'InReach is the world’s first open source verified LGBTQ+ resource platform.',
			technologies: ['JavaScript/TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'CI/CD'],

			links: [
				{ href: 'https://app.inreach.org', text: 'Live App' },
				{ href: 'https://github.com/weareinreach/InReach', text: 'Source' },
			],
			image: '/inreach-app.png',
		},
		{
			name: 'VirtualCoffee.io',
			summary: 'Contributed calendar integration and TypeScript migration features to Virtual Coffee open source community platform.',
			technologies: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'MDX'],
			links: [
				{ href: 'https://github.com/Virtual-Coffee/virtualcoffee.io/issues?q=sort:updated-desc%20%20is:pr%20author:JoeKarow', text: 'View Contributions' },
				{ href: 'https://virtualcoffee.io/', text: 'Virtual Coffee' }
			],
			image: '/virtualcoffee-project.png',
			centerImage: true
		},
		{
			name: '1Password CLI Plugins',
			summary: 'Contributed 1Password CLI plugins for PostgreSQL, Crowdin, and Sentry CLI integration.',
			technologies: ['Go', 'CLI Development', 'PostgreSQL', 'REST APIs'],
			links: [
				{ href: 'https://github.com/1Password/shell-plugins/issues?q=sort:updated-desc%20%20is:pr%20author:JoeKarow', text: 'View Contributions' },
				{ href: 'https://github.com/1Password/shell-plugins', text: '1Password Shell Plugins' }
			],
			image: '/onepassword-project.png',
			centerImage: true
		},
		{
			name: 'Civic Tech DC',
			summary: 'Open source contributor to Civic Tech DC projects focused on civic engagement and government transparency tools.',
			technologies: ['Python', 'CLI Development', 'Civic APIs', 'GUI Planning'],
			links: [
				{ href: 'https://github.com/civictechdc/mango-tango-cli/issues?q=sort:updated-desc%20is:pr%20author:JoeKarow', text: 'View Contributions' },
				{ href: 'https://civictechdc.org/', text: 'Civic Tech DC' }
			],
			image: '/civictechdc-project.png',
			centerImage: true
		},
	],
	about: {
		description: [
			`
      Hi, I’m Joe Karow!
      Ever since my childhood Tandy 1000RL from Radio Shack, computers have been my playground. My early adventures included attempting to install Windows 2.0 (thwarted by a corrupted disk #4) and successfully dual-booting Slackware Linux with Windows 95 without catastrophe—a genuine achievement in 1996!`,
			`My first web creation? A "Java Enhanced" Simpsons fan site hosted on AOL, gloriously overloaded with unnecessary java applets and too many GIFs. (I even earned my first copyright notice from Sun Microsystems for borrowing Duke, the Java mascot.)`,
			`After building a successful career in the hotel industry, I returned to development and discovered my calling in mission-driven technology. Whether it's modernizing platforms for the LGBTQ+ community at InReach or contributing to civic tech projects, I love using code to solve real problems for real people. That same excitement I felt building that awful Simpsons site? It's even stronger now when the work creates meaningful impact.`,
		],
		image: '/memoji.webp',
	},
}

// #5755ff
