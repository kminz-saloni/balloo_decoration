export type DecorCard = {
	id: string;
	title: string;
	image: string;
	rating: string;
	reviews: number;
	tags: string[];
};

export type CategoryPageData = {
	slug: string;
	title: string;
	subtitle: string;
	heroImage: string;
	cards: DecorCard[];
};

const cardTitleTemplates = [
	'Signature Setup',
	'Premium Theme Setup',
	'Elegant Backdrop Setup',
	'Grand Entry Setup',
	'Classic Celebration Setup',
	'Luxury Balloon Styling',
	'Minimal Chic Setup',
	'Deluxe Party Styling',
];

const cardTagTemplates = [
	['Premium', 'Indoor', 'Quick Setup'],
	['Theme Based', 'Indoor', 'Popular'],
	['Elegant', 'Home Event', 'Quick Setup'],
	['Grand', 'Outdoor', 'Premium'],
	['Classic', 'Home Event', 'Value Pick'],
	['Luxury', 'Indoor', 'Photogenic'],
	['Minimal', 'Indoor', 'Budget Friendly'],
	['Deluxe', 'Outdoor', 'Trending'],
];

const cardRatingTemplates = ['4.9', '4.8', '4.9', '4.7', '4.8', '4.9', '4.7', '4.8'];
const cardReviewTemplates = [128, 94, 112, 78, 101, 137, 83, 96];

const createCards = (slug: string, title: string, imagePool: string[]): DecorCard[] => {
	const baseTitle = title.replace('Decoration', '').trim();

	return cardTitleTemplates.map((template, index) => ({
		id: `${slug}-${index + 1}`,
		title: `${baseTitle} ${template}`.trim(),
		image: imagePool[index % imagePool.length],
		rating: cardRatingTemplates[index],
		reviews: cardReviewTemplates[index],
		tags: cardTagTemplates[index],
	}));
};

const categoryDefinitions = [
	{
		slug: 'birthday-decoration',
		title: 'Birthday Decoration',
		subtitle: 'Stylish birthday setups crafted for memorable celebrations in Jaipur.',
		heroImage: '/Categories/Birthday.webp',
		imagePool: ['/Categories/Birthday.webp', '/Categories/Kids%20Special.webp', '/Categories/Room%20Decor%20New.webp'],
	},
	{
		slug: 'kids-theme-decoration',
		title: 'Kids Theme Decoration',
		subtitle: 'Colorful and joyful theme concepts designed especially for kids events.',
		heroImage: '/Categories/Kids%20Special.webp',
		imagePool: ['/Categories/Kids%20Special.webp', '/Categories/Baby%20Welcome.webp', '/Categories/Birthday.webp'],
	},
	{
		slug: 'anniversary-decoration',
		title: 'Anniversary Decoration',
		subtitle: 'Elegant anniversary decor options for intimate and grand moments.',
		heroImage: '/Categories/Anniversary%20Decor.webp',
		imagePool: ['/Categories/Anniversary%20Decor.webp', '/Categories/Room%20Decor%20New.webp', '/Categories/Canopy%20Decor.webp'],
	},
	{
		slug: 'romantic-room-decoration',
		title: 'Romantic Room Decoration',
		subtitle: 'Romantic themes with soft lighting and premium styling for couples.',
		heroImage: '/Categories/Room%20Decor%20New.webp',
		imagePool: ['/Categories/Room%20Decor%20New.webp', '/Categories/Canopy%20Decor.webp', '/Categories/Proposal%20Decor.jpeg'],
	},
	{
		slug: 'welcome-baby-decoration',
		title: 'Welcome Baby Decoration',
		subtitle: 'Warm and adorable welcome setups crafted for your newborn celebration.',
		heroImage: '/Categories/Baby%20Welcome.webp',
		imagePool: ['/Categories/Baby%20Welcome.webp', '/Categories/Baby%20Shower.webp', '/Categories/Kids%20Special.webp'],
	},
	{
		slug: 'baby-shower-decoration',
		title: 'Baby Shower Decoration',
		subtitle: 'Pastel and festive baby shower setups with beautiful photo moments.',
		heroImage: '/Categories/Baby%20Shower.webp',
		imagePool: ['/Categories/Baby%20Shower.webp', '/Categories/Baby%20Welcome.webp', '/Categories/Canopy%20Decor.webp'],
	},
	{
		slug: 'first-night-decoration',
		title: 'First Night Decoration',
		subtitle: 'Graceful and romantic first night room decor designed with care.',
		heroImage: '/Categories/Room%20Decor%20New.webp',
		imagePool: ['/Categories/Room%20Decor%20New.webp', '/Categories/Anniversary%20Decor.webp', '/Categories/Canopy%20Decor.webp'],
	},
	{
		slug: 'proposal-decoration',
		title: 'Proposal Decoration',
		subtitle: 'Dreamy proposal setups that turn your yes-moment into a memory.',
		heroImage: '/Categories/Proposal%20Decor.jpeg',
		imagePool: ['/Categories/Proposal%20Decor.jpeg', '/Categories/Canopy%20Decor.webp', '/Categories/Room%20Decor%20New.webp'],
	},
	{
		slug: 'wedding-decoration',
		title: 'Wedding Decoration',
		subtitle: 'From haldi to reception, complete wedding decor collections in Jaipur.',
		heroImage: '/Categories/Ceremony%20Decor.webp',
		imagePool: ['/Categories/Ceremony%20Decor.webp', '/Categories/Festival%20Decor.webp', '/Categories/Bride%20to%20be.webp'],
	},
	{
		slug: 'bachelorette-decoration',
		title: 'Bachelorette Decoration',
		subtitle: 'Trendy and vibrant bachelorette themes for unforgettable parties.',
		heroImage: '/Categories/Bride%20to%20be.webp',
		imagePool: ['/Categories/Bride%20to%20be.webp', '/Categories/Proposal%20Decor.jpeg', '/Categories/Room%20Decor%20New.webp'],
	},
	{
		slug: 'corporate-office-decoration',
		title: 'Corporate & Office Decoration',
		subtitle: 'Professional office and corporate event decor with fast setup support.',
		heroImage: '/Categories/Corporate%20event.webp',
		imagePool: ['/Categories/Corporate%20event.webp', '/Categories/Festival%20Decor.webp', '/Categories/Ceremony%20Decor.webp'],
	},
	{
		slug: 'shop-opening-decoration',
		title: 'Shop Opening Decoration',
		subtitle: 'Attractive opening-day decor to create a strong first impression.',
		heroImage: '/Categories/Festival%20Decor.webp',
		imagePool: ['/Categories/Festival%20Decor.webp', '/Categories/Corporate%20event.webp', '/Categories/Birthday.webp'],
	},
	{
		slug: 'festival-decoration',
		title: 'Festival Decoration',
		subtitle: 'Festive and cultural decoration themes tailored for every occasion.',
		heroImage: '/Categories/Festival%20Decor.webp',
		imagePool: ['/Categories/Festival%20Decor.webp', '/Categories/Ceremony%20Decor.webp', '/Categories/Birthday.webp'],
	},
	{
		slug: 'car-decoration',
		title: 'Car Decoration',
		subtitle: 'Premium car styling options for weddings, surprises and celebrations.',
		heroImage: '/Categories/Car%20Boot.webp',
		imagePool: ['/Categories/Car%20Boot.webp', '/Categories/Car%20Boot.png', '/Categories/Ceremony%20Decor.webp'],
	},
	{
		slug: 'hotel-room-decoration',
		title: 'Hotel Room Decoration',
		subtitle: 'Elegant hotel room decor for birthdays, anniversaries and surprises.',
		heroImage: '/Categories/Room%20Decor%20New.webp',
		imagePool: ['/Categories/Room%20Decor%20New.webp', '/Categories/Canopy%20Decor.webp', '/Categories/Proposal%20Decor.jpeg'],
	},
	{
		slug: 'surprise-decoration',
		title: 'Surprise Decoration',
		subtitle: 'Creative surprise setups planned for wow moments and reactions.',
		heroImage: '/Categories/Proposal%20Decor.jpeg',
		imagePool: ['/Categories/Proposal%20Decor.jpeg', '/Categories/Room%20Decor%20New.webp', '/Categories/Birthday.webp'],
	},
	{
		slug: 'balloon-hampers',
		title: 'Balloon Hampers',
		subtitle: 'Gift-ready balloon hamper ideas for birthdays and special celebrations.',
		heroImage: '/Categories/Birthday.webp',
		imagePool: ['/Categories/Birthday.webp', '/Categories/Kids%20Special.webp', '/Categories/Baby%20Welcome.webp'],
	},
];

export const categoryCatalog: CategoryPageData[] = categoryDefinitions.map((category) => ({
	slug: category.slug,
	title: category.title,
	subtitle: category.subtitle,
	heroImage: category.heroImage,
	cards: createCards(category.slug, category.title, category.imagePool),
}));

export const getCategoryBySlug = (slug: string): CategoryPageData | undefined =>
	categoryCatalog.find((category) => category.slug === slug);

const slugByTitle = new Map(categoryCatalog.map((category) => [category.title.toLowerCase(), category.slug]));

const categoryAliases: Record<string, string> = {
	'balloon decoration': 'birthday-decoration',
	'anniversary decoration': 'anniversary-decoration',
	'baby shower': 'baby-shower-decoration',
	'baby welcome': 'welcome-baby-decoration',
	'kids special': 'kids-theme-decoration',
	wedding: 'wedding-decoration',
	'festival decor': 'festival-decoration',
	'corporate events': 'corporate-office-decoration',
	'other decorations': 'surprise-decoration',
	'candle light dinner': 'first-night-decoration',
	'kids decoration': 'kids-theme-decoration',
	'newborn welcome': 'welcome-baby-decoration',
	'wedding decor': 'wedding-decoration',
	'bride to be': 'bachelorette-decoration',
	'canopy decor': 'proposal-decoration',
	'car boot decor': 'car-decoration',
	'room decor': 'romantic-room-decoration',
	anniversary: 'anniversary-decoration',
	canopy: 'proposal-decoration',
	proposal: 'proposal-decoration',
	birthday: 'birthday-decoration',
};

export const resolveCategorySlug = (label: string): string | undefined => {
	const normalizedLabel = label.trim().toLowerCase();
	return slugByTitle.get(normalizedLabel) ?? categoryAliases[normalizedLabel];
};

export const categoryHref = (label: string): string => {
	const slug = resolveCategorySlug(label);
	return slug ? `/category/${slug}` : '/explore';
};

