import { useSelector } from 'react-redux';
import './radioPlaying.scss';

const RadioPlaying = () => {
  const radioPlaying = useSelector((state) => state.radioName);
  const startEqualizer = useSelector((state) => state.startEqualizer);
  const isLoading = useSelector((state) => state.isLoading);
  const message = startEqualizer ? 'à l\'écoute' : 'en pause';

  return(
    <div  className="radioPlaying">
      { isLoading ?
        <p className="radioPlaying__status--chargement">CHARGEMENT...</p>
        :
        <p className="radioPlaying__status">{message}</p>
      }
      <h2 >{radioPlaying}</h2>
    </div>

  ); 
};

export default RadioPlaying;
