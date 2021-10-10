import './header.scss';
import { useSelector, useDispatch } from 'react-redux';
import ear from './ear.svg';
import { UpdateSearchByNameValue, SearchByName } from '../../store/actions';

const Header = () => {
  const isLoading = useSelector((state) => state.isLoading);
  const name = useSelector((state) => state.radioSearchName);
  const dispatch = useDispatch();

  const handleInputSearchValue = (event) => {
    
    dispatch(UpdateSearchByNameValue(event.target.value));
  };

  const handleSubmitSearchValue = (event) => {
    event.preventDefault();
    dispatch(SearchByName());
  };

  return(
    <header className="header">
      <img className="header__image" src={ear} />
      <form onSubmit= {handleSubmitSearchValue}>
        <input className="header__searchBar" placeholder="search..." value={name} onChange={handleInputSearchValue} />
      </form>
      <h1 className="header__title">La Grande Oreille</h1>
      <p className="header__subtitle">-- plus de 28000 radios stream !! --</p>
      {isLoading && <div className='loader'></div>}
    </header>
  );
};

export default Header;
