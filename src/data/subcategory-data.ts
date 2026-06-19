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
		heroImage: '/Categories/Cocomelon Party Theme.jpeg',
		imagePool: ['/Categories/Cocomelon Party Theme.jpeg', '/Categories/Kids Special.webp', '/Categories/Birthday.webp'],
	},
	{
		slug: 'kids-baby-shark-theme',
		parentSection: 'kids-special',
		parentLabel: 'Kids Special',
		title: 'Baby Shark Theme',
		subtitle: 'Fun ocean-style birthday themes with bright balloon styling and props.',
		heroImage: '/Categories/Baby Shark Theme.jpeg',
		imagePool: ['/Categories/Baby Shark Theme.jpeg', '/Categories/Birthday.webp', '/Categories/Baby Welcome.webp'],
	},
	{
		slug: 'kids-boss-baby-theme',
		parentSection: 'kids-special',
		parentLabel: 'Kids Special',
		title: 'Boss Baby Theme',
		subtitle: 'Smart and stylish kids party setups with charming Boss Baby decor concepts.',
		heroImage: '/Categories/Boss Baby Theme.jpeg',
		imagePool: ['/Categories/Boss Baby Theme.jpeg', '/Categories/Kids Special.webp', '/Categories/Birthday.webp'],
	},
	{
		slug: 'kids-jungle-theme',
		parentSection: 'kids-special',
		parentLabel: 'Kids Special',
		title: 'Jungle Theme',
		subtitle: 'Wildlife-inspired kids decor themes with premium balloon backdrops.',
		heroImage: '/Categories/Jungle theme.jpeg',
		imagePool: ['/Categories/Jungle theme.jpeg', '/Categories/Kids Special.webp', '/Categories/Baby Shower.webp'],
	},
	{
		slug: 'kids-frozen-theme',
		parentSection: 'kids-special',
		parentLabel: 'Kids Special',
		title: 'Frozen Theme',
		subtitle: 'Snowy pastel Frozen-inspired setups designed for magical birthday moments.',
		heroImage: '/Categories/Frozen Theme.jpeg',
		imagePool: ['/Categories/Frozen Theme.jpeg', '/Categories/Baby Welcome.webp', '/Categories/Kids Special.webp'],
	},
	{
		slug: 'kids-mermaid-theme',
		parentSection: 'kids-special',
		parentLabel: 'Kids Special',
		title: 'Mermaid Theme',
		subtitle: 'Underwater fantasy theme decoration with soft colors and ocean accents.',
		heroImage: '/Categories/Mermaid Theme.jpeg',
		imagePool: ['/Categories/Mermaid Theme.jpeg', '/Categories/Proposal Decor.jpeg', '/Categories/Kids Special.webp'],
	},
	{
		slug: 'wedding-bridal-shower',
		parentSection: 'wedding-collection',
		parentLabel: 'The Wedding Collection',
		title: 'Bridal Shower',
		subtitle: 'Elegant bridal shower setups designed for stylish pre-wedding celebrations.',
		heroImage: '/Categories/Bridal Shower.jpeg',
		imagePool: ['/Categories/Bridal Shower.jpeg', '/Categories/Bride to be.webp', '/Categories/Ceremony Decor.webp'],
	},
	{
		slug: 'wedding-haldi-decor',
		parentSection: 'wedding-collection',
		parentLabel: 'The Wedding Collection',
		title: 'Haldi Decor',
		subtitle: 'Traditional haldi setup styles with vibrant yellow floral and balloon themes.',
		heroImage: '/Categories/Haldi Ceremony.jpeg',
		imagePool: ['/Categories/Haldi Ceremony.jpeg', '/Categories/Festival Decor.webp', '/Categories/Bride to be.webp'],
	},
	{
		slug: 'wedding-mehndi-decor',
		parentSection: 'wedding-collection',
		parentLabel: 'The Wedding Collection',
		title: 'Mehndi Decor',
		subtitle: 'Festive mehndi decoration with premium seating and colorful backdrop styling.',
		heroImage: '/Categories/Mehndi .jpeg',
		imagePool: ['/Categories/Mehndi .jpeg', '/Categories/Ceremony Decor.webp', '/Categories/Birthday.webp'],
	},
	{
		slug: 'wedding-wedding-car',
		parentSection: 'wedding-collection',
		parentLabel: 'The Wedding Collection',
		title: 'Wedding Car',
		subtitle: 'Premium wedding car decoration concepts for entry and departure moments.',
		heroImage: '/Categories/Car Decor.jpeg',
		imagePool: ['/Categories/Car Decor.jpeg', '/Categories/Audi Decor.jpeg', '/Categories/Rolls Royce.jpeg', '/Categories/Toyota .jpeg', '/Categories/White Car.jpeg'],
	},
	{
		slug: 'wedding-bride-welcome',
		parentSection: 'wedding-collection',
		parentLabel: 'The Wedding Collection',
		title: 'Bride Welcome',
		subtitle: 'Beautiful bride welcome setups to make the first home entry memorable.',
		heroImage: '/Categories/Welcome Bride.jpeg',
		imagePool: ['/Categories/Welcome Bride.jpeg', '/Categories/Ceremony Decor.webp', '/Categories/Festival Decor.webp'],
	},
	{
		slug: 'wedding-first-night',
		parentSection: 'wedding-collection',
		parentLabel: 'The Wedding Collection',
		title: 'First Night',
		subtitle: 'Romantic first night room styling with elegant floral and balloon combinations.',
		heroImage: '/Categories/Room Decor New.webp',
		imagePool: ['/Categories/Room Decor New.webp', '/Categories/Canopy Decor.webp', '/Categories/Anniversary Decor.webp'],
	},
	{
		slug: 'romantic-anniversary',
		parentSection: 'romantic-decor',
		parentLabel: 'Romantic Decor',
		title: 'Anniversary',
		subtitle: 'Romantic anniversary decor themes with rich red and pastel styling.',
		heroImage: '/Categories/Anniversary Decor.webp',
		imagePool: ['/Categories/Anniversary Decor.webp', '/Categories/Room Decor New.webp', '/Categories/Proposal Decor.jpeg'],
	},
	{
		slug: 'romantic-canopy',
		parentSection: 'romantic-decor',
		parentLabel: 'Romantic Decor',
		title: 'Canopy',
		subtitle: 'Canopy romance setups crafted for dreamy and private celebrations.',
		heroImage: '/Categories/Canopy Decor.webp',
		imagePool: ['/Categories/Canopy Decor.webp', '/Categories/Room Decor New.webp', '/Categories/Proposal Decor.jpeg'],
	},
	{
		slug: 'romantic-room-decor',
		parentSection: 'romantic-decor',
		parentLabel: 'Romantic Decor',
		title: 'Room Decor',
		subtitle: 'Couple room decoration options with elegant styling and warm ambience.',
		heroImage: '/Categories/Room Decor New.webp',
		imagePool: ['/Categories/Room Decor New.webp', '/Categories/Anniversary Decor.webp', '/Categories/Canopy Decor.webp'],
	},
	{
		slug: 'romantic-proposal',
		parentSection: 'romantic-decor',
		parentLabel: 'Romantic Decor',
		title: 'Proposal',
		subtitle: 'Proposal setups tailored for intimate moments and unforgettable surprises.',
		heroImage: '/Categories/Proposal Decor.jpeg',
		imagePool: ['/Categories/Proposal Decor.jpeg', '/Categories/Canopy Decor.webp', '/Categories/Room Decor New.webp'],
	},
	{
		slug: 'romantic-car-boot-decor',
		parentSection: 'romantic-decor',
		parentLabel: 'Romantic Decor',
		title: 'Car Boot Decor',
		subtitle: 'Creative car boot decoration styles for surprise dates and proposals.',
		heroImage: '/Categories/Car Boot.webp',
		imagePool: ['/Categories/Car Boot.webp', '/Categories/Audi Decor.jpeg', '/Categories/White Car.jpeg', '/Categories/Toyota .jpeg'],
	},
	{
		slug: 'romantic-candle-light-dinner',
		parentSection: 'romantic-decor',
		parentLabel: 'Romantic Decor',
		title: 'Candle Light Dinner',
		subtitle: 'Candle light dinner decor ideas to create the perfect romantic atmosphere.',
		heroImage: '/Categories/Canopy Decor.webp',
		imagePool: ['/Categories/Canopy Decor.webp', '/Categories/Room Decor New.webp', '/Categories/Anniversary Decor.webp'],
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

