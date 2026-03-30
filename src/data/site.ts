export const SITE_DATA = {
	name: 'Georgie Kennedy, PhD.',
	pageHeader: 'Systems for Translational Research',
	pageTitle: 'Georgie Kennedy, PhD',
	siteName: 'Georgie Kennedy, PhD',
	siteDescription: 'Portfolio, writing, and selected technical work.',
	eyebrowGroup: 'SPHERE Maridulu Budyari Gumal',
	eyebrowGroupLink: 'https://www.thesphere.com.au/',
	eyebrowOrg: 'Ingham Institute',
	eyebrowOrgLink: 'https://inghaminstitute.org.au/',
	eyebrowAffiliation: 'UNSW Medicine',
	eyebrowAffiliationLink:
		'https://www.unsw.edu.au/medicine-health/our-schools/clinical-medicine/about-us/campuses/south-west-sydney',
	role: 'Senior Research Fellow',
	portfolioLink: 'Some projects',
	skillsLink: 'Stack details',
	employerName: 'SPHERE Cancer Clinical Academic Group',
	employerLink: 'https://www.thesphere.com.au/clinical-themes/cancer/',
	summary: 'Building thoughtful, high-leverage systems for data, software, and research practice.',
};

export const SKILL_GROUPS = [
	{
		title: 'Research Data Platforms',
		items: [
			'Composable, portable analytics',
			'Open-source infrastructure',
			'Traceable data lineage',
			'Modular architecture design',
		],
	},
	{
		title: 'Clinical Data Standards',
		items: [
			'OMOP / OHDSI',
			'CDISC',
			'Interoperability',
			'Validated semantic contracts',
			'Governed data interfaces',
		],
	},
	{
		title: 'Grounded Clinical AI',
		items: [
			'Ontology-backed reasoning',
			'Knowledge-base integration',
			'Reproducible model deployment',
		],
	},
	{
		title: 'Translational Analytics',
		items: [
			'Real-world evidence',
			'Health service deployments',
			'Visualisation',
			'Clinician-accessible tooling',
		],
	},
];

export const TECH_STACK = [
	{
		label: 'Python',
		icon: 'fa-brands fa-python',
		color: '#3776AB',
	},
	{
		label: 'Docker',
		icon: 'fa-brands fa-docker',
		color: '#2496ED',
	},
	{
		label: 'OMOP',
		iconPath: '/assets/svg/icons/ohdsi.svg',
	},
	{
		label: 'Airflow',
		iconPath: '/assets/svg/icons/af_logo.svg',
	},
	{
		label: 'Vector Stores',
		iconPath: '/assets/svg/icons/vectorstore.svg',
	},
	{
		label: 'FastAPI',
		iconPath: '/assets/svg/icons/fastapi.svg',
	},
	{
		label: 'SQL',
		icon: 'fa-solid fa-database',
		color: '#336791',
	},
	{
		label: 'REST APIs',
		iconPath: '/assets/svg/icons/rest-apis.svg',
	},
	{
		label: 'Knowledge Graphs',
		iconPath: '/assets/svg/icons/db_graph.svg',
	},
	{
		label: 'Linux',
		icon: 'fa-brands fa-linux',
		color: '#D6A300',
	},
	{
		label: 'Ontologies',
		iconPath: '/assets/svg/icons/owl-rdf.svg',
	},
	{
		label: 'AWS',
		icon: 'fa-brands fa-aws',
		color: '#FF9900',
	},
	{
		label: 'Azure',
		icon: 'fa-brands fa-microsoft',
		color: '#0078D4',
	},
	{
		label: 'Pydantic',
		iconPath: '/assets/svg/icons/pydantic.svg',
	},
	{
		label: 'CI/CD',
		icon: 'fa-solid fa-code-branch',
		color: '#6B7280',
		iconSize: '1.45rem',
	},
	{
		label: 'spaCy',
		iconPath: '/assets/svg/icons/spacy.svg',
		iconClass: 'h-6 w-6',
	},
	{
		label: 'Agentic Workflows',
		iconPath: '/assets/svg/icons/agentic-workflows.svg',
	},
	{
		label: 'CaVa',
		iconPath: '/assets/svg/icons/cava_mark.svg',
	},
];

export const HEADER_LINKS = [
	{ label: 'Home', href: '/', kind: 'internal' },
	{ label: 'Projects', href: '/projects', kind: 'internal' },
	{ label: 'Contact', href: '/contact', kind: 'internal' },
];

export const SOCIAL_LINKS = [
	{
		label: 'Contact',
		href: '/contact',
		icon: '/assets/svg/icons/email.svg',
		imageClass: 'size-[1.575rem]',
	},
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/georgiekennedy',
		icon: '/assets/svg/icons/linkedin.svg',
	},
	{
		label: 'PyPI',
		href: 'https://pypi.org/user/gkennos/',
		icon: '/assets/svg/icons/python-mark.svg',
	},
	{
		label: 'GitHub',
		href: 'https://github.com/gkennos',
		icon: '/assets/svg/icons/github.svg',
		imageClass: 'size-[1.575rem]',
	},
];
