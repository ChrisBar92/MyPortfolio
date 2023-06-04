import proj1 from '../../images/weather-1920.jpg'
import proj2 from '../../images/myportfolio.jpg'
import proj3 from '../../images/tyber1920.jpg'
import proj4 from '../../images/fitness-page.jpg'
import proj5 from '../../images/ingredients.jpg'
import proj6 from '../../images/drums-1920.jpg'

const ProjectsData = [
	{
		imgsrc: proj1,
		altsrc: 'zdjęcie aplikacji pogodowej',
		heading: 'App Weather',
		text: '	Aplikacja pogodowa umowżliwiająca sprawdzenie temperatury, ciśnienia, siły wiatru, wilgotności i tempreatury odczuwalnej w dowolnym miejscu na świecie. Wyświetlana jest również data, której dana pogoda dotyczy. Daną lokalizację można wpisać używając lub nie polskich znaków.  Projekt ma na celu pokazanie umiejętności korzystania z zewnętrznego API.',
		link: 'https://chrisbar92.github.io/AppWeather_v2/',
		git: 'https://github.com/ChrisBar92/AppWeather_v2',
	},
	{
		imgsrc: proj2,
		altsrc: 'zdjęcie portfolio',
		heading: 'My Portfolio',
		text: '	Projekt przedstawiający portfolio autora, napisany we frameworku React. Strona internetowa zawiera linki do stron, a także repozytoriów pozostałych aplikacji. W projekcie użyto dodatkowo Email JS, dzięki czemu po wypełnieniu prawidłowo formularza i wysłaniu wiadomości, autor otrzyma daną wiadomość na e-mailu z informacją o nadawcy, temacie i treści wiadomości   ',
		link: 'https://chrisbar92.github.io/MyPortfolio/',
		git: 'https://github.com/ChrisBar92/MyPortfolio',
	},
	{
		imgsrc: proj3,
		altsrc: 'zdjęcie Rzymu',
		heading: 'Perfect Italy',
		text: '	Strona internetowa napisana w HTML, Scss i JS, przedstawiająca krótki poradnik, dlaczego warto odwiedzić Włochy. W projekcie główną miarę przyłożoną do sfery wizualnej, aby sama strona była przyjemna dla oka. Zastosowano zewnętrzne biblioteki do różnego rodzaju sliderów. JS w tym projekcie skupia się wokół zewnętrznych bibliotek, a także menu hamburgerowego. ',
		link: 'https://chrisbar92.github.io/PerfectItaly/',
		git: 'https://github.com/ChrisBar92/PerfectItaly',
	},
	{
		imgsrc: proj4,
		altsrc: 'zdjęcie strony fitness',
		heading: 'Fitness Page',
		text: '	Aplikacja pogodowa umowżliwiająca sprawdzenie temperatury, ciśnienia, siły wiatru, wilgotności i tempreatury odczuwalnej w dowolnym miejscu na świecie. Wyświetlana jest również data, której dana pogoda dotyczy. Daną lokalizację można wpisać używając lub nie polskich znaków.  Projekt ma na celu pokazanie umiejętności korzystania z zewnętrznego API.',
		link: 'https://chrisbar92.github.io/fitness-page/',
		git: 'https://github.com/ChrisBar92/fitness-page',
	},
	{
		imgsrc: proj5,
		altsrc: 'zdjęcie składników do posiłku',
		heading: 'Recipe App',
		text: '	Aplikacja do szukania przepisów, dodawania ich do listy ulubionych, a także możliwość sprawdzenia historii otwieranych przepisów. Wyszukiwanie odbywa się poprzez wpisanie całego posiłku lub któregoś ze składników. W projekcie użyto zewnętrzego API, dzięki któremu pobrano wiele informacji, jak choćby rodzaj diety, ilość składników odżywczych czy ilość kalorii.',
		link: 'https://chrisbar92.github.io/RecipeApp/',
		git: 'https://github.com/ChrisBar92/RecipeApp',
	},
	{
		imgsrc: proj6,
		altsrc: 'zdjęcie perkusji',
		heading: 'Drum Machine',
		text: 'Projekt ten umożliwia symulację gry na perkusji. Użytkownik ma do wyboru 9 przycisków i klikając myszką w dane miejsce, lub za pomocą klawiszy na klawiaturze, naciśnięty element perkusji odtworzy dźwięk. Kilka dźwięków można wciskać jednocześnie. Projekt miał na celu praktykę w JS poprzez dynamiczne tworzenie przycisków i przypisanie każdemu konkretnych dźwięków.',
		link: 'https://chrisbar92.github.io/DrumMachine/',
		git: 'https://github.com/ChrisBar92/DrumMachine',
	},
]

export default ProjectsData
