import { useSelector, useDispatch} from 'react-redux';
import {Howl} from 'howler';
import { storeNewSound } from '../../store/actions';
import './radioList.scss';

const RadioList = () => {
  const radios = useSelector ((state) => state.radios);
  const radioStream = useSelector((state) => state.radioStream);
  const radioName = useSelector((state) => state.radioName);
  const dispatch = useDispatch();

  const handleSound = ( src, radioName ) => {
    if(radioStream) radioStream.unload();
    const sound = new Howl({
      src : src,
      html5: true,
      format: ['webm','mp3','aac','aac+','ogg']
    });
    dispatch(storeNewSound(sound, radioName));

  };

  
  return(
    <div className="radiosList">
      <h2>Playing : {radioName}</h2>
      {radios.map(radio =>(
        <div className="radiosList__radio">
          <div className="radiosList__radio__name">{radio.name}</div>
          <button className="radiosList__radio__playBtn" onClick={() => handleSound(radio.url,radio.name)}>play</button>
        </div>
      ))}
    
    </div>
  );
    

};

export default RadioList;
