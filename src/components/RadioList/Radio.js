const Radio = ({handleSound, radio}) => {
  const {name, url, favicon} = radio;

  return(
    <div className="radiosList__radio" onClick={() => handleSound(url, name)}>
      { favicon && <img className="radiosList__radio__favicon" src={favicon} /> }
      <div className="radiosList__radio__name">{name}</div>
      {/* <button
        className="radiosList__radio__playBtn"
        onClick={() => handleSound(url, name)}
      >
      play
      </button> */}
    </div>
  );
};

export default Radio;
