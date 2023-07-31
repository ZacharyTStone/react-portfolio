import quote from "../images/projects/quote.webp";
import blog from "../images/projects/blog.webp";
import prefecture from "../images/projects/prefecture.webp";
import anime from "../images/projects/anime.webp";
import haku from "../images/projects/haku.webp";
import niceRiff from "../images/projects/niceRiff.jpeg";

export const BLOG_CONTENT = {
	English: {
		mainTitle: "Featured Blog Posts",
		posts: [
			{
				title: "Three Simple Tricks I Use To Make My Sites Load Faster",
				image: "https://media.giphy.com/media/vLUhsxMfdVfS8/giphy.gif",
				link: "https://zachinjapan.com/Three%20Simple%20Tricks%20I%20Use%20To%20Make%20My%20Sites%20Load%20Faster/",
			},
			{
				title:
					"Understanding Array References and Creating Copies of Objects in JavaScript",
				image: "https://media.giphy.com/media/ZxzzPzlimXj9k1M262/giphy.gif",
				link: "https://zachinjapan.com/Understanding%20Array%20References%20and%20Creating%20Copies%20in%20JavaScript/",
			},
			{
				title: "Higher Order Functions",
				image: "https://media.giphy.com/media/QpVUMRUJGokfqXyfa1/giphy.gif",
				link: "https://zachinjapan.com/Higher%20Order%20Functions/",
			},
			{
				title: "Using Recursion to Insert Values Into a Sorted Binary Tree",
				image: "https://media.giphy.com/media/qcy6cSzrtP7ybXvZvn/giphy.gif",
				link: "https://zachinjapan.com/Using%20Recursion%20to%20Insert%20Values%20Into%20a%20Sorted%20Binary%20Tree/",
			},
			{
				title: "this.concept = important",
				image: "https://media.giphy.com/media/26FLgGTPUDH6UGAbm/giphy.gif",
				link: "https://zachinjapan.com/This.Concept%20=%20important/",
			},
			{
				title: "count++ !== ++count",
				image: "https://media.giphy.com/media/3o6nV5TdYIA48G7VYI/giphy.gif",
				link: "https://zachinjapan.com/count++%20!=%20++count/",
			},
		],
	},
	Japanese: {
		mainTitle: "ブログ記事",
		posts: [
			{
				title: "サイトの読み込みを高速化するため3つの簡単なコツ（英語）",
				image: "https://media.giphy.com/media/vLUhsxMfdVfS8/giphy.gif",
				link: "https://zachinjapan.com/Three%20Simple%20Tricks%20I%20Use%20To%20Make%20My%20Sites%20Load%20Faster/",
			},
			{
				title:
					"JavaScriptにおける配列の参照の理解とオブジェクトのコピーの作成 (日本語)",
				image: "https://media.giphy.com/media/ZxzzPzlimXj9k1M262/giphy.gif",
				link: "https://zachinjapan.com/Understanding%20Array%20References%20and%20Creating%20Copies%20in%20JavaScript/",
			},
			{
				title: "高階関数　（英語）",
				image: "https://media.giphy.com/media/QpVUMRUJGokfqXyfa1/giphy.gif",
				link: "https://zachinjapan.com/Higher%20Order%20Functions/",
			},
			{
				title: "再帰を使用して、Sorted Binary Treeに番号を挿入方法 （英語）",
				image: "https://media.giphy.com/media/qcy6cSzrtP7ybXvZvn/giphy.gif",
				link: "https://zachinjapan.com/Using%20Recursion%20to%20Insert%20Values%20Into%20a%20Sorted%20Binary%20Tree/",
			},
			{
				title: "this.concept = important （英語）",
				image: "https://media.giphy.com/media/26FLgGTPUDH6UGAbm/giphy.gif",
				link: "https://zachinjapan.com/This.Concept%20=%20important/",
			},
			{
				title: "count++ !== ++count （英語）",
				image: "https://media.giphy.com/media/3o6nV5TdYIA48G7VYI/giphy.gif",
				link: "https://zachinjapan.com/count++%20!=%20++count/",
			},
		],
	},
};

export const PROJECTS = {
	English: {
		mainTitle: "Personal Projects",

		projects: [
			{
				title: "My Anime Collection",
				description: "Find and keep track of your favorite anime.",
				image: anime,
				link: "https://www.my-anime-collection.com/landing",
				linkText: "Live Demo",
				github: "https://github.com/zachinjapan/my-anime-collection",
				tech: "Tech",
				tags: [
					"React",
					"CSS",
					"Node",
					"API",
					"Authentication",
					"MongoDB",
					"Heroku",
				],
				youtube: "https://www.youtube.com/embed/D_lXDfCJf6k",
				english: true,
				japanese: true,
			},

			{
				title: "Zach In Japan",
				description:
					"Read about coding concepts, Japan, and all things related to being a web developer.",
				image: blog,
				link: "https://zachinjapan.com",
				linkText: "Live Demo",
				github: "https://github.com/zachinjapan/my-gatsby-blog",
				tech: "Tech",
				tags: ["Gatsby", "React", "CSS", "Markdown", "GraphQL", "Gatsby Cloud"],
				youtube: "https://www.youtube.com/embed/lt48zTXl6j0",
				english: true,
				japanese: false,
			},
			{
				title: `HAKU`,
				description: "Track and compare jobs during the interview process.",
				image: haku,
				link: "https://www.hakujobs.com",
				linkText: "Live Demo",
				github: "https://github.com/zachinjapan/haku",
				tech: "Tech",
				tags: [
					"React",
					"CSS",
					"Node",
					"API",
					"Authentication",
					"MongoDB",
					"Heroku",
				],
				youtube: "https://www.youtube.com/embed/q1rVbqMw0ug",
				english: true,
				japanese: false,
			},
			{
				title: "Riffs!",
				description:
					"A place to share your new songs, covers, and musical ideas with the world",
				image: niceRiff,
				link: "https://riffs.netlify.app/",
				linkText: "Live Demo",
				github: "https://github.com/zachinjapan/vue-music-app",
				tech: "Tech",
				tags: ["Vue", "CSS", "Firebase", "Authentication", "Netlify"],
				youtube: "https://www.youtube.com/embed/gBIhz-0Jkg8",
				english: true,
				japanese: true,
			},
			{
				title: "Quote Quiz",
				description:
					"Quiz your knowledge of famous quotes and share your favorite quotes on twitter.",
				image: quote,
				link: "https://quotequiz.netlify.app",
				linkText: "Live Demo",
				github: "https://github.com/zachinjapan/quotes",
				tech: "Tech",
				tags: ["React", "CSS", "API", "TypeScript", "Netlify"],
				english: true,
				japanese: false,
			},

			{
				title: "Prefecture Match",
				description:
					"Learn the Japanese prefectures using this fun matching game",
				image: prefecture,
				link: "https://prefecture-match.herokuapp.com",
				linkText: "Live Demo",
				github: "https://github.com/zachinjapan/prefecture-match",
				tech: "Tech",
				tags: ["React", "CSS", "JavaScript", "Heroku"],
				english: false,
				japanese: true,
			},
		],
	},
	Japanese: {
		mainTitle: "個人プロジェクト",
		projects: [
			{
				title: "マイ・アニメ・コレクション",
				description: "アニメの詳細を簡単に検索できるアプリケーションです。",
				image: anime,
				link: "https://www.my-anime-collection.com/landing",
				linkText: "ウェブサイト",
				github: "https://github.com/zachinjapan/my-anime-collection",
				tech: "技術",
				tags: [
					"React",
					"CSS",
					"Node",
					"API",
					"Authentication",
					"MongoDB",
					"Heroku",
				],
				youtube: "https://www.youtube.com/embed/D_lXDfCJf6k",
				english: true,
				japanese: true,
			},

			{
				title: "ザック・イン・ジャパン",
				description: "私のテクノロジーブログです。",
				image: blog,
				link: "https://zachinjapan.gatsbyjs.io",
				linkText: "ウェブサイト",
				github: "https://github.com/zachinjapan/my-gatsby-blog",
				tech: "技術",
				tags: ["Gatsby", "React", "CSS", "Markdown", "GraphQL", "Gatsby Cloud"],
				youtube: "https://www.youtube.com/embed/lt48zTXl6j0",
				english: true,
				japanese: false,
			},
			{
				title: `ハク`,
				description:
					"ハクは面接の過程でエントリ-した会社を追跡して比較できるアプリケーションです。",
				image: haku,
				link: "https://www.hakujobs.com",
				linkText: "ウェブサイト",
				github: "github.com/zachinjapan/haku",
				tech: "技術",
				tags: [
					"React",
					"CSS",
					"Node",
					"API",
					"Authentication",
					"MongoDB",
					"Heroku",
				],
				youtube: "https://www.youtube.com/embed/q1rVbqMw0ug",
				english: true,
				japanese: false,
			},
			{
				title: "リッフス",
				description:
					"新曲、カバー、音楽のアイデアを世界と共有するためのサイトです。",
				image: niceRiff,
				link: "https://riffs.netlify.app/",
				linkText: "ウェブサイト",
				github: "https://github.com/zachinjapan/vue-music-app",
				tech: "技術",
				tags: ["Vue", "CSS", "Firebase", "Authentication", "Netlify"],
				youtube: "https://www.youtube.com/embed/gBIhz-0Jkg8",
				english: true,
				japanese: true,
			},

			{
				title: "名言クイズ",
				description: "この名言を残した偉人の名前を選択してください。",
				image: quote,
				link: "https://quotequiz.netlify.app",
				linkText: "ウェブサイト",
				github: "https://github.com/zachinjapan/quotes",
				tech: "技術",
				tags: ["React", "CSS", "API", "Typescript", "Netlify"],
				english: true,
				japanese: false,
			},
			{
				title: "都道府県マッチング",
				description: "日本の都道府県を学ぶための、楽しいマッチングゲームです。",
				image: prefecture,
				link: "https://prefecture-match.herokuapp.com",
				linkText: "ウェブサイト",
				github: "https://github.com/zachinjapan/prefecture-match",
				tech: "技術",
				tags: ["React", "CSS", "JavaScript", "Heroku"],
				english: false,
				japanese: true,
			},
		],
	},
};

export const OVERLAY_COLORS: string[] = [
	"#3CCF48",
	"#3FD977",
	"#43C396",
	"#3FD9CE",
];

export const MOBILE_BREAKPOINT: string = "(max-width: 600px)";
export const LARGE_MOBILE_BREAKPOINT: string = "(max-width: 800px)";
export const TABLET_BREAKPOINT: string = "(max-width: 1000px)";
export const DESKTOP_BREAKPOINT: string = "(max-width: 1200px)";
export const LARGE_DESKTOP_BREAKPOINT: string = "(max-width: 1400px)";
export const EXTRA_LARGE_DESKTOP_BREAKPOINT: string = "(max-width: 1600px)";

export const MOBILE = 600;
export const LARGE_MOBILE = 800;
export const TABLET = 1000;
export const DESKTOP = 1200;
export const LARGE_DESKTOP = 1400;
export const EXTRA_LARGE_DESKTOP = 1600;
