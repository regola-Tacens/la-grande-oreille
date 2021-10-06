import { useSelector, useDispatch} from 'react-redux';
import {Howl} from 'howler';
import { storeNewSound } from '../../store/actions';

const RadioList = () => {
  const radios = useSelector ((state) => state.radios);
  const radioStream = useSelector((state) => state.radioStream);
  const dispatch = useDispatch();

  const handleSound = ( src ) => {
    if(radioStream) radioStream.unload();
    const sound = new Howl({
      src : src,
      html5: true,
      format: ['mp3', 'aac']
    });
    dispatch(storeNewSound(sound));

    // sound.play();
  };

  
  return(
    <>
      {radios.map(radio =>(
        <div>{radio.name}
          <button onClick={() => handleSound(radio.url_resolved)}>écouter </button>
        </div>
      ))}
    
    </>
  );
    

};

export default RadioList;
