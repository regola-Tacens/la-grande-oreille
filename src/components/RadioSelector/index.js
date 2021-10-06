import { useDispatch } from 'react-redux';
import { selectEra, selectGenre, getRadiosFromAPI } from '../../store/actions';
import './radioSelector.scss';

const RadioSelector = () => {
  const dispatch = useDispatch();

  const handleEraSelect = (event) => {
    dispatch(selectEra(event.target.value));

  };
  const handleGenreSelect = (event) => {
    dispatch(selectGenre(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getRadiosFromAPI());
  };

  return (
    <div className="selector">
      <form className="selector__form" onSubmit={handleSubmit}>
        <select className="selector__form__select" name="era" onChange={handleEraSelect}>
          <option>60s</option>
          <option>70s</option>
          <option>80s</option>
          <option>90s</option>
        </select>
        <select className="selector__form__select" name="genre" onChange={handleGenreSelect}>
          <option>disco</option>
          <option>pop</option>
          <option>jazz</option>
          <option>soul</option>
          <option>hiphop</option>
          <option>rock</option>
          <option>electronic</option>
          <option>folk</option>
          <option>indie</option>
          <option>ambiant</option>
          <option>funk</option>
          <option>reggae</option>
          <option>blues</option>
          <option>rap</option>
        </select>
        <button className="selector__form__submitBtn" > go! </button>
      </form>
    </div>
  );
};

export default RadioSelector;
