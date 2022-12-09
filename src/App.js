import { Navigation } from './components/navigation/Navigation.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home } from './pages/home/Home.jsx';
import { About } from './pages/about/About.jsx';
import { TopCities } from './pages/topCity/TopCities.jsx';
import { Testimonial } from './pages/testimonial/Testimonial.jsx';
import { Subscription } from './pages/subscription/Subscription.jsx';
import { Footer } from './components/footer/Footer.jsx';

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Home />
        <About />
        <TopCities />
        <Testimonial />
        <Subscription />
        <Footer />
      </Router>
    </>
  );
};

export default App;
