import './player.scss';
import { useSelector } from 'react-redux';
import { Pause, Play } from 'react-feather';

const Player = () => {
  const radioStream = useSelector ((state) => state.radioStream);
  const handleStopRadioStream = () => {
    radioStream.pause();
  };
  const handlePlayRadioStream = () => {
    radioStream.play();
  };

  return (
    <div className="player">
      <div className="player__Btn" onClick={handleStopRadioStream}><Pause color="white" size={20} /></div>
      <div className="player__Btn" onClick={handlePlayRadioStream}><Play color="white" size={20} /></div>
    </div>
  );
};

export default Player;
