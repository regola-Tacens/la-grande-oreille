import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './styles/index.scss';
import Header from './components/Header';
import RadioSelector from './components/RadioSelector';
import RadioList from './components/RadioList';
import Footer from './components/Footer';

function App() {
  const radioStream = useSelector( (state) => state.radioStream);

  useEffect(()=> {
    console.log('radiostream',radioStream);
    if(radioStream) radioStream.play();
  },[radioStream]);

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
