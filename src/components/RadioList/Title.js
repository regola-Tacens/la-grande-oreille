const Title = ({radioName, isLoading, actualOffset}) => (
  <div className="title">
    {radioName && (
      <div>
        <h2>Playing : {radioName}</h2>
      </div>
    )}
    <div className="title__page">page {actualOffset/10}</div>
    {isLoading && <div className='loader'></div>}
  </div>
);

export default Title;
