import './styles/index.scss';
import Header from './components/Header';
import RadioSelector from './components/RadioSelector';
import RadioList from './components/RadioList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <RadioSelector />
      <RadioList />
      <Footer />
    </div>
  );
}

export default App;
