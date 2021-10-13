import './popup.scss';
import { useDispatch } from 'react-redux';
import { SetloadErrorFalse } from '../../store/actions';
const Popup = () => {
  const dispatch = useDispatch();
  const handleSetLoadErrorToFalse = () => {
    dispatch(SetloadErrorFalse());
  };
  return(
    <div className="popup">
      <h3>Cette radio ne réponds pas</h3>
      <button className="popup__closeBtn" onClick={handleSetLoadErrorToFalse}>x</button>
    </div>
  );
};

export default Popup;
