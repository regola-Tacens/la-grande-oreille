const Radio = ({handleSound, radio}) => {
  const {name, url, favicon,tags} = radio;

  return(
    <div className="radiosList__radio" onClick={() => handleSound(url, name)}>
      { favicon && <img className="radiosList__radio__favicon" src={favicon} /> }
      <div className="radiosList__radio__content">
        <div className="radiosList__radio__content__name">{name}</div>
        <div className="radiosList__radio__content__tags">
          {
            tags.split(',').map((tag) => (
              <div className="radiosList__radio__content__tags__tag">{tag}</div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Radio;
