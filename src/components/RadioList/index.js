import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Howl, Howler } from 'howler';
import { changePage, getRadiosFromAPI, storeNewSound } from '../../store/actions';
import './radioList.scss';
import '../../styles/loader.scss';
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather';
import Radio from './Radio';
import Title from './Title';

const RadioList = () => {
  Howler.autoUnlock = false;
  const radios = useSelector((state) => state.radios);
  const radioStream = useSelector((state) => state.radioStream);
  const radioName = useSelector((state) => state.radioName);
  const actualOffset = useSelector((state) => state.pageOffset);
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

  const handleChangePage = (direction) => {
    const newOffset = actualOffset + direction;
    // si le nombre d'entrée est supérieur à10, on peut décroitre le nombre d'entrée
    newOffset >= 0 &&  dispatch(changePage(newOffset));
    dispatch(getRadiosFromAPI());
  };

  return (
    <div className='radiosList'>
      <Title radioName={radioName} isLoading={isLoading} />
      {radios.map(radio => <Radio  handleSound={handleSound} radio={radio}/>)}
      {radios.length >0 &&( <><button className="radiosList__pageBtn back" onClick={()=>handleChangePage(-10)}><ArrowLeftCircle size={20} /></button>
        <button className="radiosList__pageBtn forward" onClick={()=>handleChangePage(10)}><ArrowRightCircle size={20} /></button> </>)}
    </div>
  );
};

export default RadioList;
