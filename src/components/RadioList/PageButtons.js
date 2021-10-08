import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather';

const PageButtons = ({ radios, handleChangePage}) => (
  <>
    {radios.length > 0 && (
      <>
        <button
          className='radiosList__pageBtn back'
          onClick={() => handleChangePage(-10)}
        >
          <ArrowLeftCircle size={20} />
        </button>
        <button
          className='radiosList__pageBtn forward'
          onClick={() => handleChangePage(10)}
        >
          <ArrowRightCircle size={20} />
        </button>
      </>
    )}
  </>
);

export default PageButtons;
