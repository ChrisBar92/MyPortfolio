import proj1 from '../../images/tyber1920.jpg'
import proj2 from '../../images/myportfolio.jpg'
import proj3 from '../../images/fitness-page.jpg'
import proj4 from '../../images/ingredients.jpg'
import proj5 from '../../images/notes-app.jpg'
import proj6 from '../../images/weather-1920.jpg'
import proj7 from '../../images/drums-1920.jpg'

const ProjectsData = [
	{
		imgsrc: proj1,
		altsrc: 'zdjęcie Rzymu',
		heading: 'Perfect Italy',
		text: '	Landing Page przedstawiający krótki poradnik, dlaczego warto odwiedzić Włochy. W projekcie główną miarę przyłożoną do sfery wizualnej, aby strona była przyjemna dla oka. Zastosowano zewnętrzne biblioteki do różnego rodzaju sliderów. ',
		tools: 'HTML | CSS | SASS | JavaScript | RWD',
		link: 'https://chrisbar92.github.io/PerfectItaly/',
		git: 'https://github.com/ChrisBar92/PerfectItaly',
	},
	{
		imgsrc: proj2,
		altsrc: 'zdjęcie portfolio',
		heading: 'My Portfolio',
		text: '	Projekt przedstawiający portfolio autora. Strona zawiera odnośniki do podglądu live, a także ich repozytoriów. W projekcie skorzystano z Email JS, dzięki czemu po wypełnieniu formularza i wysłaniu wiadomości, autor otrzyma daną wiadomość na e-mail.   ',
		tools: 'React | CSS | SASS | RWD | EmailJS',
		link: 'https://chrisbar92.github.io/MyPortfolio/',
		git: 'https://github.com/ChrisBar92/MyPortfolio',
	},
	{
		imgsrc: proj3,
		altsrc: 'zdjęcie strony fitness',
		heading: 'Fitness Page',
		text: '	Aplikacja pozwalająca wyszukać ćwiczenia na konkretne partie ciała za pomocą listy lub wyszukiwarki. Po wybraniu ćwiczenia pojawia się animacja symulująca ruch, video z jego poprawnym wykonaniem, a także ćwiczenia zbliżone oraz wykorzystujące podobny ekwipunek.',
		tools: 'React | MUI | SASS | API',
		link: 'https://chrisbar92.github.io/fitness-page/',
		git: 'https://github.com/ChrisBar92/fitness-page',
	},
	{
		imgsrc: proj4,
		altsrc: 'zdjęcie składników do posiłku',
		heading: 'Recipe App',
		text: '	Aplikacja do szukania przepisów, dodawania ich do listy ulubionych, z możliwością sprawdzenia historii otwieranych przepisów. Wyszukiwanie odbywa się poprzez wpisanie całego posiłku lub któregoś ze składników, rodzaju kuchni lub rodzaju diety.',
		tools: 'HTML | CSS | SASS | JavaScript | API',
		link: 'https://chrisbar92.github.io/RecipeApp/',
		git: 'https://github.com/ChrisBar92/RecipeApp',
	},
	{
		imgsrc: proj5,
		altsrc: 'zdjęcie aplikacji do notowania',
		heading: 'Notes App',
		text: '	Prosta aplikacja do tworzenia krótkich notatek. Istnieje możliwość tworzenia nowych notatek, edycji dotychczasowych, usuwania poszczególnych. Lupka po wpisaniu litery filtruje tytuły notatek zawierającej daną literę. Dzięki LocalStorage notatki po odświeżeniu strony nie znikają.',
		tools: 'React | CSS | SASS | RWD | LocalStorage',
		link: 'https://chrisbar92.github.io/notes-app/',
		git: 'https://github.com/ChrisBar92/notes-app',
	},
	{
		imgsrc: proj6,
		altsrc: 'zdjęcie aplikacji pogodowej',
		heading: 'App Weather',
		text: '	Aplikacja pogodowa umożliwiająca sprawdzenie temperatury, ciśnienia, wilgotności i innych parametrów w dowolnym miejscu na świecie z bieżącą datą, która jest wyświetlana. Lokalizacja jest szukana niezależnie od używania polskich znaków językowych.',
		tools: 'HTML | SASS | JavaScript | RWD | API',
		link: 'https://chrisbar92.github.io/AppWeather_v2/',
		git: 'https://github.com/ChrisBar92/AppWeather_v2',
	},
	{
		imgsrc: proj7,
		altsrc: 'zdjęcie perkusji',
		heading: 'Drum Machine',
		text: 'Prosta aplikacja symulująca grę na perkusji. Do wyboru jest 9 przycisków i klikając myszką w dane miejsce, lub za pomocą klawiszy na klawiaturze, naciśnięty element perkusji odtworzy dźwięk. Kilka dźwięków można wciskać jednocześnie.',
		tools: 'HTML | CSS | SASS | JavaScript',
		link: 'https://chrisbar92.github.io/DrumMachine/',
		git: 'https://github.com/ChrisBar92/DrumMachine',
	},
]

export default ProjectsData
