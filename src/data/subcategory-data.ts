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

const cardRatingTemplates = ['4.9', '4.8', '4.9', '5.0', '4.8', '4.7', '4.9', '4.8', '5.0', '4.9', '4.8', '4.9'];
const cardReviewTemplates = [124, 89, 203, 145, 92, 178, 112, 198, 134, 167, 105, 142, 189, 95];

const createCards = (slug: string, title: string, imagePool: string[]): SubCategoryCard[] => {
	const baseTitle = title.trim();
	return imagePool.map((image, index) => {
		let cardTitle = '';
		if (slug === 'kids-cocomelon-theme') {
			cardTitle = `Cocomelon ${index + 1}`;
		} else if (slug === 'kids-baby-shark-theme') {
			cardTitle = `Baby Shark ${index + 1}`;
		} else if (slug === 'kids-boss-baby-theme') {
			cardTitle = `Boss Baby ${index + 1}`;
		} else if (slug === 'kids-jungle-theme') {
			cardTitle = `Jungle theme ${index + 1}`;
		} else if (slug === 'kids-frozen-theme') {
			cardTitle = `Frozen ${index + 1}`;
		} else if (slug === 'kids-mermaid-theme') {
			cardTitle = `Mermaid ${index + 1}`;
		} else if (slug === 'romantic-canopy') {
			cardTitle = `Canopy ${index + 1}`;
		
		} else {
			cardTitle = `${baseTitle} ${index + 1}`;
		}
		return {
			id: `${slug}-card-${index + 1}`,
			title: cardTitle,
			image: image,
			rating: ['4.9', '4.8', '5.0', '4.7'][index % 4],
			reviews: [120, 85, 200, 140, 95][index % 5],
			tags: index % 2 === 0 ? ['Indoor', 'Theme Based'] : ['Premium', 'Popular'],
		};
	});
};

const seeds: SubCategorySeed[] = [
    {
    "slug": "kids-cocomelon-theme",
    "parentSection": "kids-special",
    "parentLabel": "Kids Special",
    "title": "Cocomelon Theme",
    "subtitle": "Colorful and playful decor setups inspired by Cocomelon party vibes.",
    "heroImage": "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/cocomlelon%20theme%20decoration/CocoMelon%20(15).webp",
    "imagePool": [
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/cocomlelon%20theme%20decoration/CocoMelon%20(1).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/cocomlelon%20theme%20decoration/CocoMelon%20(2).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/cocomlelon%20theme%20decoration/CocoMelon%20(3).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/cocomlelon%20theme%20decoration/CocoMelon%20(4).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/cocomlelon%20theme%20decoration/CocoMelon%20(5).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/cocomlelon%20theme%20decoration/CocoMelon%20(6).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/cocomlelon%20theme%20decoration/CocoMelon%20(7).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/cocomlelon%20theme%20decoration/CocoMelon%20(8).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/cocomlelon%20theme%20decoration/CocoMelon%20(9).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/cocomlelon%20theme%20decoration/CocoMelon%20(10).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/cocomlelon%20theme%20decoration/CocoMelon%20(11).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/cocomlelon%20theme%20decoration/CocoMelon%20(12).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/cocomlelon%20theme%20decoration/CocoMelon%20(13).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/cocomlelon%20theme%20decoration/CocoMelon%20(14).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/cocomlelon%20theme%20decoration/CocoMelon%20(15).webp"
]
  },
    {
    "slug": "kids-baby-shark-theme",
    "parentSection": "kids-special",
    "parentLabel": "Kids Special",
    "title": "Baby Shark Theme",
    "subtitle": "Fun ocean-style birthday themes with bright balloon styling and props.",
    "heroImage": "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/baby%20shark%20theme/baby%20shark%20(6).webp",
    "imagePool": [
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/baby%20shark%20theme/baby%20shark%20(1).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/baby%20shark%20theme/baby%20shark%20(2).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/baby%20shark%20theme/baby%20shark%20(3).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/baby%20shark%20theme/baby%20shark%20(4).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/baby%20shark%20theme/baby%20shark%20(5).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/baby%20shark%20theme/baby%20shark%20(6).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/baby%20shark%20theme/baby%20shark%20(7).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/baby%20shark%20theme/baby%20shark%20(8).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/baby%20shark%20theme/baby%20shark%20(9).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/baby%20shark%20theme/baby%20shark%20(10).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/baby%20shark%20theme/baby%20shark%20(12).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/baby%20shark%20theme/baby%20shark%20(13).webp"
]
  },
    {
    "slug": "kids-boss-baby-theme",
    "parentSection": "kids-special",
    "parentLabel": "Kids Special",
    "title": "Boss Baby Theme",
    "subtitle": "Smart and stylish kids party setups with charming Boss Baby decor concepts.",
    "heroImage": "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Boss_Baby_Theme/BOSS%20(21).webp",
    "imagePool": [
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Boss_Baby_Theme/BOSS%20(1).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Boss_Baby_Theme/BOSS%20(2).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Boss_Baby_Theme/BOSS%20(3).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Boss_Baby_Theme/BOSS%20(4).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Boss_Baby_Theme/BOSS%20(5).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Boss_Baby_Theme/BOSS%20(6).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Boss_Baby_Theme/BOSS%20(7).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Boss_Baby_Theme/BOSS%20(8).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Boss_Baby_Theme/BOSS%20(9).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Boss_Baby_Theme/BOSS%20(10).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Boss_Baby_Theme/BOSS%20(11).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Boss_Baby_Theme/BOSS%20(12).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Boss_Baby_Theme/BOSS%20(13).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Boss_Baby_Theme/BOSS%20(14).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Boss_Baby_Theme/BOSS%20(15).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Boss_Baby_Theme/BOSS%20(16).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Boss_Baby_Theme/BOSS%20(17).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Boss_Baby_Theme/BOSS%20(18).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Boss_Baby_Theme/BOSS%20(19).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Boss_Baby_Theme/BOSS%20(20).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Boss_Baby_Theme/BOSS%20(21).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Boss_Baby_Theme/BOSS%20(22).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Boss_Baby_Theme/BOSS%20(23).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Boss_Baby_Theme/BOSS%20(24).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Boss_Baby_Theme/BOSS%20(25).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Boss_Baby_Theme/BOSS%20(26).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Boss_Baby_Theme/BOSS%20(27).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Boss_Baby_Theme/BOSS%20(28).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Boss_Baby_Theme/BOSS%20(29).webp"
]
  },
    {
    "slug": "kids-jungle-theme",
    "parentSection": "kids-special",
    "parentLabel": "Kids Special",
    "title": "Jungle Theme",
    "subtitle": "Wildlife-inspired kids decor themes with premium balloon backdrops.",
    "heroImage": "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/jungle%20theme/Jungle%20(11).webp",
    "imagePool": [
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/jungle%20theme/Jungle%20(1).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/jungle%20theme/Jungle%20(2).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/jungle%20theme/Jungle%20(3).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/jungle%20theme/Jungle%20(4).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/jungle%20theme/Jungle%20(5).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/jungle%20theme/Jungle%20(6).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/jungle%20theme/Jungle%20(7).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/jungle%20theme/Jungle%20(8).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/jungle%20theme/Jungle%20(9).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/jungle%20theme/Jungle%20(10).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/jungle%20theme/Jungle%20(11).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/jungle%20theme/Jungle%20(12).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/jungle%20theme/Jungle%20(13).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/jungle%20theme/Jungle%20(14).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/jungle%20theme/Jungle%20(15).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/jungle%20theme/Jungle%20(16).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/jungle%20theme/Jungle%20(17).webp"
]
  },
    {
    "slug": "kids-frozen-theme",
    "parentSection": "kids-special",
    "parentLabel": "Kids Special",
    "title": "Frozen Theme",
    "subtitle": "Snowy pastel Frozen-inspired setups designed for magical birthday moments.",
    "heroImage": "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(9).webp",
    "imagePool": [
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(1).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(2).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(3).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(4).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(5).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(6).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(7).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(8).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(9).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(10).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(11).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(12).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(13).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(14).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(15).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(16).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(17).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(18).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(19).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(20).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(21).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(22).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(23).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(24).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(25).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(26).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(27).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(28).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(29).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(30).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(31).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(32).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(33).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(34).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(35).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(36).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(37).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(38).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(39).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(40).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Frozen_Theme/FROZ%20(41).webp"
]
  },
    {
    "slug": "kids-mermaid-theme",
    "parentSection": "kids-special",
    "parentLabel": "Kids Special",
    "title": "Mermaid Theme",
    "subtitle": "Underwater fantasy theme decoration with soft colors and ocean accents.",
    "heroImage": "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(22).webp",
    "imagePool": [
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(1).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(2).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(3).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(4).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(5).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(6).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(7).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(8).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(9).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(10).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(11).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(12).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(13).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(14).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(15).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(16).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(17).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(18).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(19).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(20).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(21).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(22).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(23).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(24).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(25).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(26).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(27).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(28).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(29).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(30).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(31).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(32).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(33).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(34).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Mermaid_Theme/MEM%20(35).webp"
]
  },
  {
    "slug": "wedding-bridal-shower",
    "parentSection": "wedding-collection",
    "parentLabel": "The Wedding Collection",
    "title": "Bridal Shower",
    "subtitle": "Elegant bridal shower setups designed for stylish pre-wedding celebrations.",
    "heroImage": "https://camsstorage2026abcd.blob.core.windows.net/balooon/Categories/Bridal%20Shower.jpeg",
    "imagePool": []
  },
  {
    "slug": "wedding-haldi-decor",
    "parentSection": "wedding-collection",
    "parentLabel": "The Wedding Collection",
    "title": "Haldi Decor",
    "subtitle": "Traditional haldi setup styles with vibrant yellow floral and balloon themes.",
    "heroImage": "https://camsstorage2026abcd.blob.core.windows.net/balooon/Categories/Haldi%20Ceremony.jpeg",
    "imagePool": []
  },
  {
    "slug": "wedding-mehndi-decor",
    "parentSection": "wedding-collection",
    "parentLabel": "The Wedding Collection",
    "title": "Mehndi Decor",
    "subtitle": "Festive mehndi decoration with premium seating and colorful backdrop styling.",
    "heroImage": "https://camsstorage2026abcd.blob.core.windows.net/balooon/Categories/Mehndi%20.jpeg",
    "imagePool": []
  },
  {
    "slug": "wedding-bride-welcome",
    "parentSection": "wedding-collection",
    "parentLabel": "The Wedding Collection",
    "title": "Bride Welcome",
    "subtitle": "Beautiful bride welcome setups to make the first home entry memorable.",
    "heroImage": "https://camsstorage2026abcd.blob.core.windows.net/balooon/Categories/Welcome%20Bride.jpeg",
    "imagePool": []
  },
  {
    "slug": "wedding-first-night",
    "parentSection": "wedding-collection",
    "parentLabel": "The Wedding Collection",
    "title": "First Night",
    "subtitle": "Romantic first night room styling with elegant floral and balloon combinations.",
    "heroImage": "https://camsstorage2026abcd.blob.core.windows.net/balooon/Categories/Room%20Decor%20New.webp",
    "imagePool": []
  },
  {
    "slug": "wedding-festival-decoration",
    "parentSection": "wedding-collection",
    "parentLabel": "The Wedding Collection",
    "title": "Festival Decoration",
    "subtitle": "Traditional and festive balloon backdrops for major Indian festivals.",
    "heroImage": "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Festival_Decoration/FEST%20(15).webp",
    "imagePool": []
  },
  {
    "slug": "romantic-anniversary",
    "parentSection": "romantic-decor",
    "parentLabel": "Romantic Decor",
    "title": "Anniversary",
    "subtitle": "Romantic anniversary decor themes with rich red and pastel styling.",
    "heroImage": "https://camsstorage2026abcd.blob.core.windows.net/balooon/Categories/Anniversary%20Decor.webp",
    "imagePool": []
  },
    {
    "slug": "romantic-canopy",
    "parentSection": "romantic-decor",
    "parentLabel": "Romantic Decor",
    "title": "Canopy",
    "subtitle": "Cosy and magical canopy balloon styling setups for dates and celebrations.",
    "heroImage": "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Canopy/Canopy%20(1).webp",
    "imagePool": [
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Canopy/Canopy%20(1).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Canopy/Canopy%20(2).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Canopy/Canopy%20(3).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Canopy/Canopy%20(4).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Canopy/Canopy%20(5).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Canopy/Canopy%20(6).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Canopy/Canopy%20(7).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Canopy/Canopy%20(8).webp",
    "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Canopy/Canopy%20(9).webp"
]
  },
    {
    "slug": "romantic-room-decor",
    "parentSection": "romantic-decor",
    "parentLabel": "Romantic Decor",
    "title": "Room Decor",
    "subtitle": "Romantic room decoration setups with balloons, lights, and flower accents.",
    "heroImage": "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Romantic_Room_Decoration/ROM%20(23).webp",
    "imagePool": []
  },
  {
    "slug": "romantic-proposal",
    "parentSection": "romantic-decor",
    "parentLabel": "Romantic Decor",
    "title": "Proposal",
    "subtitle": "Proposal setups tailored for intimate moments and unforgettable surprises.",
    "heroImage": "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Proposal_Decoration/PROP%20(23).webp",
    "imagePool": []
  },
  {
    "slug": "romantic-car-boot-decor",
    "parentSection": "romantic-decor",
    "parentLabel": "Romantic Decor",
    "title": "Car Boot Decor",
    "subtitle": "Creative car boot decoration styles for surprise dates and proposals.",
    "heroImage": "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Car_Decoration/CAR%20(3).webp",
    "imagePool": []
  },
  {
    "slug": "romantic-candle-light-dinner",
    "parentSection": "romantic-decor",
    "parentLabel": "Romantic Decor",
    "title": "Candle Light Dinner",
    "subtitle": "Candle light dinner decor ideas to create the perfect romantic atmosphere.",
    "heroImage": "https://camsstorage2026abcd.blob.core.windows.net/balooon/New-Images/Festival_Decoration/FEST%20(15).webp",
    "imagePool": []
  }
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
