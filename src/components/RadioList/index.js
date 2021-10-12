import { useSelector, useDispatch } from 'react-redux';
import { Howl, Howler } from 'howler';
import {
  changePage,
  getRadiosFromAPI,
  getRadiosByTagFromAPI,
  startLoader,
  stopLoader,
  storeNewSound,
  resetPageSetting,
  stopEqualizer,
  SetloadErrorTrue,
} from '../../store/actions';
import './radioList.scss';
import '../../styles/loader.scss';
import Radio from './Radio';
import PageCount from './PageCount';
import PageButtons from './PageButtons';

const RadioList = () => {
  Howler.autoUnlock = false;
  const radios = useSelector((state) => state.radios);
  const radioStream = useSelector((state) => state.radioStream);
  const actualOffset = useSelector((state) => state.pageOffset);
  const radiosQuantity = useSelector ((state) => state.radiosQuantity);
  const dispatch = useDispatch();

  const handleSound = (src, radioName) => {
    dispatch(startLoader());
    if (radioStream) radioStream.unload();
    const sound = new Howl({
      src: src,
      html5: true,
      format: ['webm', 'mp3', 'aac', 'aac+', 'ogg'],
    });
    sound.once('loaderror', () =>{
      dispatch(stopLoader());
      dispatch(stopEqualizer());
      dispatch(SetloadErrorTrue());
    }
    );
    sound.once('play', () => dispatch(stopLoader()));
    dispatch(storeNewSound(sound, radioName));
  };

  const handleChangePage = (direction) => {
    const newOffset = actualOffset + direction;
    window.scrollTo({ top: 0, behavior :'smooth'});
    // on vérifie qu'il est possible de passer à la page suivante ou à la page précédente
    newOffset >= 0 && (newOffset) < radiosQuantity && dispatch(changePage(newOffset));
    dispatch(getRadiosFromAPI());
  };

  const handleRadioTag= (tag) => {
    window.scrollTo({ top: 0, behavior :'smooth'});
    dispatch(resetPageSetting());
    dispatch(getRadiosByTagFromAPI(tag));
  };

  return (
    <div className='radiosList'>
      { radios.map((radio) => <Radio key={radio.stationuuid} handleSound={handleSound} radio={radio} handleRadioTag ={handleRadioTag} />)}
      { radios.length > 0 && <PageCount radiosQuantity={radiosQuantity} actualOffset={actualOffset}/>} 
      <PageButtons radios={radios} handleChangePage={handleChangePage} />
    </div>
  );
};

export default RadioList;
  