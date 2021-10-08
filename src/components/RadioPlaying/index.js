import { useSelector } from 'react-redux';
import './radioPlaying.scss';

const RadioPlaying = () => {
  const radioPlaying = useSelector((state) => state.radioName);
  return(
    <h2 className="radioPlaying">{radioPlaying}</h2>

  ); 
};

export default RadioPlaying;
