import './App.css';
import Header from './components/common/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/about/About';
import Communitychat from './components/communitychat/Communitychat'
import Resources from './components/resources/Resources';
import Team from './components/team/Team';
// import Pricing from "./components/pricing/Pricing"
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/common/footer/Footer';
import Home from './components/home/Home';
import Programming from './components/resources/Programming/Programming';
import Dsa from './components/resources/DSA/Dsa';
import Webdev from './components/resources/WebDev/Webdev';
import Androiddev from './components/resources/AndroidDev/Androiddev';
import Aiml from './components/resources/AI&ML/Aiml';
import Cybersecurity from './components/resources/CyberSecurity/Cybersecurity';
import ScrollToTop from './ScrollToTop';
import { useLocation } from 'react-router-dom'; // Import useLocation

function AppContent() {
	const location = useLocation(); // Use the useLocation hook here

	return (
		<>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/community-chat" component={Communitychat} />
				<Route exact path="/resources" component={Resources} />
				<Route exact path="/team" component={Team} />
				{/* <Route exact path='/pricing' component={Pricing} /> */}
				<Route exact path="/blog" component={Blog} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/resources/programming" component={Programming} />
				<Route exact path="/resources/dsa" component={Dsa} />
				<Route exact path="/resources/web-dev" component={Webdev} />
				<Route exact path="/resources/android-dev" component={Androiddev} />
				<Route exact path="/resources/ai-ml" component={Aiml} />
				<Route exact path="/resources/cybersecurity" component={Cybersecurity} />
			</Switch>
			{/* Conditionally render the Footer */}
			{location.pathname !== "/community-chat" && <Footer />}
		</>
	);
}

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Header />
			<AppContent /> {/* Use the new AppContent component */}
		</Router>
	);
}

export default App;
