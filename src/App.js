import { useEffect} from 'react';
import { useSelector } from 'react-redux';
import './styles/index.scss';
import Header from './components/Header';
import RadioSelector from './components/RadioSelector';
import RadioList from './components/RadioList';
import Footer from './components/Footer';
import Player from './components/Player';
import RadioPlaying from './components/RadioPlaying';
import Popup from './components/Popup';

function App() {
  const radioStream = useSelector( (state) => state.radioStream);
  const isLoadError = useSelector((state) => state.loadError);

  useEffect(()=> {
    if(radioStream) radioStream.play();
  },[radioStream]);

  return (
    <div className="App">
      <Header />
      {isLoadError && <Popup /> }
      <RadioSelector />
      {radioStream && <RadioPlaying />}
      <RadioList />
      {radioStream && <Player /> }
      <Footer />
    </div>
  );
}

export default App;
