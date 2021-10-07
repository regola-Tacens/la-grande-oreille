const Title = ({radioName, isLoading}) => (
  <>
    {radioName && (
      <div>
        <h2>Playing : {radioName}</h2>
      </div>
    )}
    {isLoading && <div className='loader'></div>}
  </>
);

export default Title;
