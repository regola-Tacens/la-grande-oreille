import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather';

const PageButtons = ({ radios, handleChangePage}) => (
  <>
    {radios.length > 0 && (
      <>
        <button
          className='radiosList__pageBtn back'
          onClick={() => handleChangePage(-10)}
        >
          <span className="back__icon"><ArrowLeftCircle size={20} /></span>
        </button>
        <button
          className='radiosList__pageBtn forward'
          onClick={() => handleChangePage(10)}
        >
          <span className="forward__icon"><ArrowRightCircle size={20} /></span>
        </button>
      </>
    )}
  </>
);

export default PageButtons;
