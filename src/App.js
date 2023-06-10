import './base.scss'
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
	return (
		<div className="App">
			<Navbar />
			<Header />
			<AboutMe />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</div>
	)
}

export default App
