const Radio = ({handleSound, radio}) => {
  const {name, url} = radio;

  return(
    <div className="radiosList__radio">
      <div className="radiosList__radio__name">{name}</div>
      <button
        className="radiosList__radio__playBtn"
        onClick={() => handleSound(url, name)}
      >
      play
      </button>
    </div>
  );
};

export default Radio;
