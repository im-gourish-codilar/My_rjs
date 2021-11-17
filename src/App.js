import BottomContent from './Bottom/ABottompage.js';
import Navigation from './Head/navigation';
import Carouselcontainer from './Carousel/carousel.js';
import Search from './Carousel/search.js';
import Middle from './midpart/middlepart.js';
import './main.css';
import './glob.css'
function App() {
  return (
        <div className="container">
          <Navigation/>
          <Carouselcontainer/>
          <Search/>
          <Middle/>
          <BottomContent/>
        </div>
   
  );
}

export default App;
