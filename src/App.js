import './App.css';
import { animal } from './data';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

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
