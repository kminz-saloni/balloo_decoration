export type SubCategoryCard = {
	id: string;
	title: string;
	image: string;
	rating: string;
	reviews: number;
	tags: string[];
};

export type SubCategoryPage = {
	slug: string;
	parentSection: 'kids-special' | 'wedding-collection' | 'romantic-decor';
	parentLabel: string;
	title: string;
	subtitle: string;
	heroImage: string;
	cards: SubCategoryCard[];
};

type SubCategorySeed = {
	slug: string;
	parentSection: SubCategoryPage['parentSection'];
	parentLabel: string;
	title: string;
	subtitle: string;
	heroImage: string;
	imagePool: string[];
};

const cardTitleTemplates = [
	'Signature Setup',
	'Premium Setup',
	'Backdrop Theme Setup',
	'Celebration Entry Setup',
	'Home Party Setup',
	'Deluxe Styling Setup',
];

const cardTagTemplates = [
	['Indoor', 'Theme Based'],
	['Premium', 'Popular'],
	['Indoor', 'Photo Friendly'],
	['Grand', 'Event Ready'],
	['Classic', 'Home Event'],
	['Luxury', 'Trending'],
];

const cardRatingTemplates = ['4.9', '4.8', '4.9', '4.7', '4.8', '4.9'];
const cardReviewTemplates = [118, 93, 104, 79, 88, 126];

const createCards = (slug: string, title: string, imagePool: string[]): SubCategoryCard[] =>
	cardTitleTemplates.map((template, index) => ({
		id: `${slug}-${index + 1}`,
		title: `${title} ${template}`.trim(),
		image: imagePool[index % imagePool.length],
		rating: cardRatingTemplates[index],
		reviews: cardReviewTemplates[index],
		tags: cardTagTemplates[index],
	}));

const seeds: SubCategorySeed[] = [
	{
		slug: 'kids-cocomelon-theme',
		parentSection: 'kids-special',
		parentLabel: 'Kids Special',
		title: 'Cocomelon Theme',
		subtitle: 'Colorful and playful decor setups inspired by Cocomelon party vibes.',
		heroImage: '/Categories/Kids%20Special.jpeg',
		imagePool: ['/Categories/Kids%20Special.jpeg', '/Categories/Kids%20Special.webp', '/Categories/Birthday.webp'],
	},
	{
		slug: 'kids-baby-shark-theme',
		parentSection: 'kids-special',
		parentLabel: 'Kids Special',
		title: 'Baby Shark Theme',
		subtitle: 'Fun ocean-style birthday themes with bright balloon styling and props.',
		heroImage: '/Categories/Kids%20Special.webp',
		imagePool: ['/Categories/Kids%20Special.webp', '/Categories/Birthday.webp', '/Categories/Baby%20Welcome.webp'],
	},
	{
		slug: 'kids-boss-baby-theme',
		parentSection: 'kids-special',
		parentLabel: 'Kids Special',
		title: 'Boss Baby Theme',
		subtitle: 'Smart and stylish kids party setups with charming Boss Baby decor concepts.',
		heroImage: '/Categories/Baby%20Welcome.webp',
		imagePool: ['/Categories/Baby%20Welcome.webp', '/Categories/Kids%20Special.webp', '/Categories/Birthday.webp'],
	},
	{
		slug: 'kids-jungle-theme',
		parentSection: 'kids-special',
		parentLabel: 'Kids Special',
		title: 'Jungle Theme',
		subtitle: 'Wildlife-inspired kids decor themes with premium balloon backdrops.',
		heroImage: '/Categories/Birthday.webp',
		imagePool: ['/Categories/Birthday.webp', '/Categories/Kids%20Special.jpeg', '/Categories/Baby%20Shower.webp'],
	},
	{
		slug: 'kids-frozen-theme',
		parentSection: 'kids-special',
		parentLabel: 'Kids Special',
		title: 'Frozen Theme',
		subtitle: 'Snowy pastel Frozen-inspired setups designed for magical birthday moments.',
		heroImage: '/Categories/Baby%20Shower.webp',
		imagePool: ['/Categories/Baby%20Shower.webp', '/Categories/Baby%20Welcome.webp', '/Categories/Kids%20Special.webp'],
	},
	{
		slug: 'kids-mermaid-theme',
		parentSection: 'kids-special',
		parentLabel: 'Kids Special',
		title: 'Mermaid Theme',
		subtitle: 'Underwater fantasy theme decoration with soft colors and ocean accents.',
		heroImage: '/Categories/Room%20Decor%20New.webp',
		imagePool: ['/Categories/Room%20Decor%20New.webp', '/Categories/Proposal%20Decor.jpeg', '/Categories/Kids%20Special.webp'],
	},
	{
		slug: 'wedding-bridal-shower',
		parentSection: 'wedding-collection',
		parentLabel: 'The Wedding Collection',
		title: 'Bridal Shower',
		subtitle: 'Elegant bridal shower setups designed for stylish pre-wedding celebrations.',
		heroImage: '/Categories/Baby%20Shower.webp',
		imagePool: ['/Categories/Baby%20Shower.webp', '/Categories/Bride%20to%20be.webp', '/Categories/Ceremony%20Decor.webp'],
	},
	{
		slug: 'wedding-haldi-decor',
		parentSection: 'wedding-collection',
		parentLabel: 'The Wedding Collection',
		title: 'Haldi Decor',
		subtitle: 'Traditional haldi setup styles with vibrant yellow floral and balloon themes.',
		heroImage: '/Categories/Ceremony%20Decor.webp',
		imagePool: ['/Categories/Ceremony%20Decor.webp', '/Categories/Festival%20Decor.webp', '/Categories/Bride%20to%20be.webp'],
	},
	{
		slug: 'wedding-mehndi-decor',
		parentSection: 'wedding-collection',
		parentLabel: 'The Wedding Collection',
		title: 'Mehndi Decor',
		subtitle: 'Festive mehndi decoration with premium seating and colorful backdrop styling.',
		heroImage: '/Categories/Festival%20Decor.webp',
		imagePool: ['/Categories/Festival%20Decor.webp', '/Categories/Ceremony%20Decor.webp', '/Categories/Birthday.webp'],
	},
	{
		slug: 'wedding-wedding-car',
		parentSection: 'wedding-collection',
		parentLabel: 'The Wedding Collection',
		title: 'Wedding Car',
		subtitle: 'Premium wedding car decoration concepts for entry and departure moments.',
		heroImage: '/Categories/Car%20Boot.webp',
		imagePool: ['/Categories/Car%20Boot.webp', '/Categories/Car%20Boot.png', '/Categories/Ceremony%20Decor.webp'],
	},
	{
		slug: 'wedding-bride-welcome',
		parentSection: 'wedding-collection',
		parentLabel: 'The Wedding Collection',
		title: 'Bride Welcome',
		subtitle: 'Beautiful bride welcome setups to make the first home entry memorable.',
		heroImage: '/Categories/Baby%20Welcome.webp',
		imagePool: ['/Categories/Baby%20Welcome.webp', '/Categories/Ceremony%20Decor.webp', '/Categories/Festival%20Decor.webp'],
	},
	{
		slug: 'wedding-first-night',
		parentSection: 'wedding-collection',
		parentLabel: 'The Wedding Collection',
		title: 'First Night',
		subtitle: 'Romantic first night room styling with elegant floral and balloon combinations.',
		heroImage: '/Categories/Room%20Decor%20New.webp',
		imagePool: ['/Categories/Room%20Decor%20New.webp', '/Categories/Canopy%20Decor.webp', '/Categories/Anniversary%20Decor.webp'],
	},
	{
		slug: 'romantic-anniversary',
		parentSection: 'romantic-decor',
		parentLabel: 'Romantic Decor',
		title: 'Anniversary',
		subtitle: 'Romantic anniversary decor themes with rich red and pastel styling.',
		heroImage: '/Categories/Anniversary%20Decor.webp',
		imagePool: ['/Categories/Anniversary%20Decor.webp', '/Categories/Room%20Decor%20New.webp', '/Categories/Proposal%20Decor.jpeg'],
	},
	{
		slug: 'romantic-canopy',
		parentSection: 'romantic-decor',
		parentLabel: 'Romantic Decor',
		title: 'Canopy',
		subtitle: 'Canopy romance setups crafted for dreamy and private celebrations.',
		heroImage: '/Categories/Canopy%20Decor.webp',
		imagePool: ['/Categories/Canopy%20Decor.webp', '/Categories/Room%20Decor%20New.webp', '/Categories/Proposal%20Decor.jpeg'],
	},
	{
		slug: 'romantic-room-decor',
		parentSection: 'romantic-decor',
		parentLabel: 'Romantic Decor',
		title: 'Room Decor',
		subtitle: 'Couple room decoration options with elegant styling and warm ambience.',
		heroImage: '/Categories/Room%20Decor%20New.webp',
		imagePool: ['/Categories/Room%20Decor%20New.webp', '/Categories/Anniversary%20Decor.webp', '/Categories/Canopy%20Decor.webp'],
	},
	{
		slug: 'romantic-proposal',
		parentSection: 'romantic-decor',
		parentLabel: 'Romantic Decor',
		title: 'Proposal',
		subtitle: 'Proposal setups tailored for intimate moments and unforgettable surprises.',
		heroImage: '/Categories/Proposal%20Decor.jpeg',
		imagePool: ['/Categories/Proposal%20Decor.jpeg', '/Categories/Canopy%20Decor.webp', '/Categories/Room%20Decor%20New.webp'],
	},
	{
		slug: 'romantic-car-boot-decor',
		parentSection: 'romantic-decor',
		parentLabel: 'Romantic Decor',
		title: 'Car Boot Decor',
		subtitle: 'Creative car boot decoration styles for surprise dates and proposals.',
		heroImage: '/Categories/Car%20Boot.webp',
		imagePool: ['/Categories/Car%20Boot.webp', '/Categories/Car%20Boot.png', '/Categories/Proposal%20Decor.jpeg'],
	},
	{
		slug: 'romantic-candle-light-dinner',
		parentSection: 'romantic-decor',
		parentLabel: 'Romantic Decor',
		title: 'Candle Light Dinner',
		subtitle: 'Candle light dinner decor ideas to create the perfect romantic atmosphere.',
		heroImage: '/Categories/Bride%20to%20be.webp',
		imagePool: ['/Categories/Bride%20to%20be.webp', '/Categories/Canopy%20Decor.webp', '/Categories/Room%20Decor%20New.webp'],
	},
];

export const subCategoryPages: SubCategoryPage[] = seeds.map((seed) => ({
	slug: seed.slug,
	parentSection: seed.parentSection,
	parentLabel: seed.parentLabel,
	title: seed.title,
	subtitle: seed.subtitle,
	heroImage: seed.heroImage,
	cards: createCards(seed.slug, seed.title, seed.imagePool),
}));

export const getSubCategoryBySlug = (slug: string): SubCategoryPage | undefined =>
	subCategoryPages.find((page) => page.slug === slug);

