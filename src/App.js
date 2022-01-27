import './App.css';
import { animal } from './data';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header greeting='Ari' />
      <Main animals= {animal} />
      <Footer email='mine@mine.eu' />
    </div>
  );
}

export default App;
