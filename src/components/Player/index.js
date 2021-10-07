import './player.scss';
import './equalizer.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Pause, Play } from 'react-feather';
import { StartEqualizer, stopEqualizer } from '../../store/actions';


const Player = () => {
  const radioStream = useSelector ((state) => state.radioStream);
  const startEqualizer = useSelector((state) => state.startEqualizer);
  const dispatch = useDispatch();

  const handleStopRadioStream = () => {
    radioStream.pause();
    dispatch(stopEqualizer());

  };
  const handlePlayRadioStream = () => {
    radioStream.play();
    dispatch(StartEqualizer());
  };

  return (
    <>
      <div className="player">
        { startEqualizer && <div className="equalizer"></div>}
        <div className="player__Btn" onClick={handleStopRadioStream}><Pause color="white" size={20} /></div>
        <div className="player__Btn" onClick={handlePlayRadioStream}><Play color="white" size={20} /></div>
      </div>
    </>
  );
};

export default Player;
