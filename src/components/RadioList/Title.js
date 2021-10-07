const Title = ({radioName, isLoading, actualOffset, radiosQuantity}) => (
  <div className="title">
    {radioName && (
      <div>
        <h2>Playing : {radioName}</h2>
      </div>
    )}
    <div className="title__page">page {1+ actualOffset/10} / {Math.ceil(radiosQuantity/10)}</div>
    {isLoading && <div className='loader'></div>}
  </div>
);

export default Title;
