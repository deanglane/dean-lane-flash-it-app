// Import: CSS
import '../../styles.css';

// Import: pages
import Header from './Header.js';
import Intro from './Intro.js';
import Feature from './Feature.js';
import CallToAction from './CallToAction.js';
import Articles from './Articles.js';
import Footer from '../../components/Footer.js';

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Intro />
        <Feature />
        <CallToAction />
        <Articles />
      </main>
      <Footer />
    </>
  );
}

export default App;
