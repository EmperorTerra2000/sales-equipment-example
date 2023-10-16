import Lead from '../Lead';
import About from '../About';
import Categ from '../Categ';
import Location from '../Location';

import './Home.css';

function Home() {
  return (
    <>
      <main className="main">
        <Lead />
        <About />
        <Categ />
        <Location />
      </main>
    </>
  );
}

export default Home;
