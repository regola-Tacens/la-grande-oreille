import { useDispatch } from 'react-redux';
import { selectEra, selectGenre, getRadiosFromAPI, selectCountry, resetPageSetting } from '../../store/actions';
import './radioSelector.scss';

const RadioSelector = () => {
  const dispatch = useDispatch();

  const handleEraSelect = (event) => {
    dispatch(selectEra(event.target.value));

  };
  const handleGenreSelect = (event) => {
    dispatch(selectGenre(event.target.value));
  };

  const handleCountrySelect = (event) => {
    dispatch(selectCountry(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(resetPageSetting());
    dispatch(getRadiosFromAPI());
  };

  return (
    <div className="selector">
      <form className="selector__form" onSubmit={handleSubmit}>
        <div className='selector__form__era'>
          <label className="label" htmlFor="era">Year</label>
          <select className="selector__form__select" name="era" onChange={handleEraSelect}>
            <option value="">--</option>
            <option>60s</option>
            <option>70s</option>
            <option>80s</option>
            <option>90s</option>
          </select>
        </div> 
        <div className='selector__form__genre'>
          <label className="label" htmlFor="genre">Genre</label>
          <select className="selector__form__select" name="genre" onChange={handleGenreSelect}>
            <option value="">--</option>
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
        </div>
        <div className='selector__form__country'>
          <label className="label" htmlFor="country">Country</label>
          <select name="country" className="selector__form__select" onChange={handleCountrySelect}>
            <option value="">--</option>
            <option value='US'>United States</option>
            <option value='DE'>Germany</option>
            <option value="IT">Italy</option>
            <option value="FR">France</option>
            <option value="RU">Russia</option>
            <option value="CA">Canada</option>
            <option value="GB">United Kingdom</option>
            <option value="ES">Spain</option>
            <option value="BR">Brazil</option>
            <option value="ES">Spain</option>
            <option value="AU">Australia</option>
          </select>
        </div>

        <button className="selector__form__submitBtn" > go! </button>
      </form>
    </div>
  );
};

export default RadioSelector;
