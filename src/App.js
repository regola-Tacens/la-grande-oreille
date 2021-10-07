import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './styles/index.scss';
import Header from './components/Header';
import RadioSelector from './components/RadioSelector';
import RadioList from './components/RadioList';
import Footer from './components/Footer';
import Player from './components/Player';

function App() {
  const radioStream = useSelector( (state) => state.radioStream);

  useEffect(()=> {
    if(radioStream) radioStream.play();
  },[radioStream]);

  return (
    <div className="App">
      <Header />
      <RadioSelector />
      <RadioList />
      {radioStream && <Player /> }
      <Footer />
    </div>
  );
}

export default App;
