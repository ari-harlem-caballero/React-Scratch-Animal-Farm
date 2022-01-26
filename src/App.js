import './App.css';
import { animal } from './data';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header greeting='Hello' />
      <Main animals= {animal} />
      <Footer email='mine@mine' />
      <h1>Hello</h1>
    </div>
  );
}

export default App;
