import './header.scss';
import { useSelector } from 'react-redux';

const Header = () => {
  const isLoading = useSelector((state) => state.isLoading);
  return(
    <header className="header">
      <h1 className="header__title">La Grande Oreille</h1>
      {isLoading && <div className='loader'></div>}
    </header>
  );
};

export default Header;
