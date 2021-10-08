import { useSelector, useDispatch } from 'react-redux';
import { Howl, Howler } from 'howler';
import {
  changePage,
  getRadiosFromAPI,
  startLoader,
  stopLoader,
  storeNewSound,
} from '../../store/actions';
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
  const radiosQuantity = useSelector ((state) => state.radiosQuantity);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();

  const handleSound = (src, radioName) => {
    dispatch(startLoader());
    if (radioStream) radioStream.unload();
    const sound = new Howl({
      src: src,
      html5: true,
      format: ['webm', 'mp3', 'aac', 'aac+', 'ogg'],
    });
    sound.once('play', () => dispatch(stopLoader()));
    dispatch(storeNewSound(sound, radioName));
  };

  const handleChangePage = (direction) => {
    const newOffset = actualOffset + direction;
    // on vérifie qu'il est possible de passer à la page suivante ou à la page précédente
    if(newOffset >= 0 && (newOffset)<radiosQuantity) dispatch(changePage(newOffset));
    dispatch(getRadiosFromAPI());
  };

  return (
    <div className='radiosList'>
      {radios.length > 0 && (
        <Title
          radiosQuantity={radiosQuantity}
          radioName={radioName}
          isLoading={isLoading}
          actualOffset={actualOffset}
        />
      )}
      { radios.map((radio) => <Radio handleSound={handleSound} radio={radio} />) }

      {/* -----bouttons pour changer de page ---------- */}
      {radios.length > 0 && (
        <>
          <button
            className='radiosList__pageBtn back'
            onClick={() => handleChangePage(-10)}
          >
            <ArrowLeftCircle size={20} />
          </button>
          <button
            className='radiosList__pageBtn forward'
            onClick={() => handleChangePage(10)}
          >
            <ArrowRightCircle size={20} />
          </button>
        </>
      )}

    </div>
  );
};

export default RadioList;
