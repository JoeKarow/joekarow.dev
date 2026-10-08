import type { SiteConfig, SiteContent } from '../types'
export const SITE_CONFIG: SiteConfig = {
	title: 'Joe Karow — Full Stack Software Engineer',
	author: 'Joe Karow',
	email: 'hello@joekarow.dev',
	description:
		'Full stack TypeScript engineer building software for people doing good work. Formerly first full-time engineer at InReach; now open to hands-on engineering roles.',
	lang: 'en',
	siteLogo: '/memoji.webp',
	navLinks: [
		{ text: 'Hi', href: '#hero' },
		{ text: 'Experience', href: '#experience' },
		{ text: 'Projects', href: '#projects' },
		{ text: 'Skills', href: '#skills' },
	],
	socialLinks: [
		{ text: 'LinkedIn', href: 'https://www.linkedin.com/in/jkarow/' },
		{ text: 'GitHub', href: 'https://github.com/JoeKarow' },
		{ text: 'Bluesky', href: 'https://bsky.app/profile/joekarow.dev' },
	],
	socialImage: '/preview.png',
	canonicalURL: 'https://joekarow.dev',
}

export const SITE_CONTENT: SiteContent = {
	hero: {
		status:
			'Looking for a hands-on engineering role · Alexandria, VA or remote',
		greeting: 'Hi, I’m Joe.',
		headline: 'I build software for people doing good work.',
		summary:
			'I’m a full stack TypeScript engineer. I was the first full-time engineer at InReach, a nonprofit LGBTQ+ resource platform, where I rebuilt the legacy application end to end: architecture, API, database, CI/CD and a translation pipeline covering 10+ languages.',
		image: '/memoji.webp',
	},
	skills: {
		title: 'Skills',
		categories: [
			{
				name: 'Languages',
				skills: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
			},
			{
				name: 'Frontend',
				skills: [
					'React',
					'Next.js',
					'Mantine',
					'HTML',
					'CSS',
					'Web accessibility',
					'Internationalization (i18next, Crowdin)',
				],
			},
			{
				name: 'Backend and data',
				skills: ['Node.js', 'tRPC', 'PostgreSQL', 'Prisma', 'Drizzle', 'Redis'],
			},
			{
				name: 'Infrastructure and tooling',
				skills: [
					'AWS (Cognito, Lambda)',
					'Cloudflare Workers (Durable Objects)',
					'Vercel',
					'Netlify',
					'GitHub Actions',
					'CI/CD',
					'Sentry',
					'Turborepo',
				],
			},
			{
				name: 'Also worked with',
				skills: ['Go', 'Swift', 'Kotlin', 'MongoDB'],
			},
		],
	},
	experience: [
		{
			company: 'Virtual Coffee',
			position: 'Technical Maintainer (volunteer)',
			startDate: 'Sep 2026',
			endDate: 'present',
			summary: [
				'Moved membership applications and four public forms from Airtable to PostgreSQL, and community events from Craft CMS to Google Calendar.',
				'Built vc-bots, a Cloudflare Worker running the community’s Slack and Zoom automation: a co-working room with live presence, event announcements from Google Calendar, a weekly host availability check-in and new-member welcomes.',
				'Built an admin panel with user management, section-level permissions and Slack sign-in.',
				'Added Sentry error monitoring, a Vitest suite with a CI test job, CodeQL scanning and edge-level bot blocking.',
				'Upgraded the codebase to Next.js 16 and TypeScript 7.',
			],
		},
		{
			company: 'InReach',
			position: 'Lead Software Engineer',
			startDate: 'Sep 2022',
			endDate: 'Oct 2024',
			summary: [
				'Led the ground-up rewrite as a TypeScript monorepo (Next.js, tRPC, Prisma, PostgreSQL), migrating listing data from MongoDB. About 2,600 commits and 297 merged pull requests in two years.',
				'Built the internationalization architecture from scratch with i18next and Crowdin, taking listing translations from hand-typed Spanish fields to 10+ languages with human-reviewed translations and Redis caching.',
				'Designed a taxonomy of 122 typed listing attributes in 13 categories with shared translation templates, so facts like age eligibility are translated once per language instead of once per listing.',
				'Designed GitHub Actions pipelines for linting, tests, CodeQL security scanning, visual regression checks, database migrations, deployments and translation sync.',
			],
		},
		{
			company: 'JoeKarow.dev',
			position: 'Independent work',
			startDate: 'Aug 2021',
			endDate: 'present',
			summary: [
				'Web applications and static sites for small and medium-sized business clients.',
				'Shopify development for an agency across two client storefronts: theme customization and cleanup, custom interactive storefront features, landing pages.',
			],
		},
		{
			company: 'Hilton',
			position: 'Director of Finance',
			startDate: 'Aug 2015',
			endDate: 'Aug 2021',
			summary: [
				'Built a daily sales tax reconciliation application combining POS, property management and financial system data. It cut monthly filing from 4+ hours to under 30 minutes and held variances under 0.5% on $10M in monthly sales.',
				'Built further tools that reduced month-end close from 60+ working hours to under 24.',
			],
		},
	],
	projects: [
		{
			name: 'InReach App',
			label: 'Lead project · 2022 to 2024',
			summary:
				'An open source, verified resource platform for the LGBTQ+ community. I led the ground-up rewrite as a TypeScript monorepo and built its translation pipeline for 10+ languages.',
			technologies: [
				'TypeScript',
				'Next.js',
				'tRPC',
				'Prisma',
				'PostgreSQL',
				'i18next',
				'Crowdin',
			],
			links: [
				{ href: 'https://app.inreach.org', text: 'Live App' },
				{ href: 'https://github.com/weareinreach/InReach', text: 'Source' },
			],
			image: '/inreach-app.png',
		},
		{
			name: 'Virtual Coffee',
			summary:
				'Open source Next.js site and Slack automation for a developer community of more than 1,200 members. As volunteer Technical Maintainer I moved the site’s data to PostgreSQL, built an admin panel, and wrote the Cloudflare Worker that runs the community’s Slack and Zoom bots.',
			technologies: [
				'Next.js',
				'TypeScript',
				'PostgreSQL',
				'Cloudflare Workers',
				'Slack API',
				'Zoom API',
			],
			links: [
				{
					href: 'https://github.com/Virtual-Coffee/virtualcoffee.io/issues?q=sort:updated-desc%20%20is:pr%20author:JoeKarow',
					text: 'View Contributions',
				},
				{ href: 'https://virtualcoffee.io/', text: 'Virtual Coffee' },
			],
			image: '/virtualcoffee-project.png',
			centerImage: true,
		},
		{
			name: '1Password CLI Plugins',
			summary:
				'Picked up Go to land three merged contributions: pg_dump and pg_restore support for PostgreSQL, a new Crowdin CLI plugin, and added Sentry configuration.',
			technologies: ['Go', 'CLI Development', 'PostgreSQL'],
			links: [
				{
					href: 'https://github.com/1Password/shell-plugins/issues?q=sort:updated-desc%20%20is:pr%20author:JoeKarow',
					text: 'View Contributions',
				},
				{
					href: 'https://github.com/1Password/shell-plugins',
					text: '1Password Shell Plugins',
				},
			],
			image: '/onepassword-project.png',
			centerImage: true,
		},
		{
			name: 'CIB Mango Tree',
			summary:
				'For Civic Tech DC, built a shared Unicode tokenizer service for the tool’s analyzers, with fixes and tests for multilingual edge cases such as Korean text. The tool helps researchers and journalists detect coordinated inauthentic behavior in social media data.',
			technologies: ['Python', 'Unicode', 'Testing'],
			links: [
				{
					href: 'https://github.com/civictechdc/mango-tango-cli/issues?q=sort:updated-desc%20is:pr%20author:JoeKarow',
					text: 'View Contributions',
				},
				{ href: 'https://civictechdc.org/', text: 'Civic Tech DC' },
			],
			image: '/civictechdc-project.png',
			centerImage: true,
		},
	],
}
