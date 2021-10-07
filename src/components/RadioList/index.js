import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Howl, Howler } from 'howler';
import { storeNewSound } from '../../store/actions';
import './radioList.scss';
import '../../styles/loader.scss';

const RadioList = () => {
  Howler.autoUnlock = false;
  const radios = useSelector((state) => state.radios);
  const radioStream = useSelector((state) => state.radioStream);
  const radioName = useSelector((state) => state.radioName);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleSound = (src, radioName) => {
    setIsLoading(true);
    if (radioStream) radioStream.unload();
    const sound = new Howl({
      src: src,
      html5: true,
      format: ['webm', 'mp3', 'aac', 'aac+', 'ogg'],
    });
    sound.once('play', () => setIsLoading(false));
    dispatch(storeNewSound(sound, radioName));
  };

  return (
    <div className='radiosList'>
      {radioName && (
        <div>
          <h2>Playing : {radioName}</h2>
        </div>
      )}
      {isLoading && <div className='loader'></div>}
      {radios.map((radio) => (
        <div className='radiosList__radio'>
          <div className='radiosList__radio__name'>{radio.name}</div>
          <button
            className='radiosList__radio__playBtn'
            onClick={() => handleSound(radio.url, radio.name)}
          >
            play
          </button>
        </div>
      ))}
    </div>
  );
};

export default RadioList;
