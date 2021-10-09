import './header.scss';
import { useSelector } from 'react-redux';
import ear from './ear.svg';

const Header = () => {
  const isLoading = useSelector((state) => state.isLoading);
  return(
    <header className="header">
      <img className="header__image" src={ear} />
      <h1 className="header__title">La Grande Oreille</h1>
      <p className="header__subtitle">-- plus de 28000 radios stream !! --</p>
      {isLoading && <div className='loader'></div>}
    </header>
  );
};

export default Header;
