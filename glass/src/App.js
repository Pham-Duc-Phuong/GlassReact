import logo from './logo.svg';
import './App.css';
import data from '../src/Component/dataGlasses.json'
import Header from './Component/Header';
import Carousel from './Component/Carousel';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Carousel glass={data}/>
      </div>
    </div>
  );
}

export default App;
