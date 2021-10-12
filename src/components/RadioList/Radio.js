
const Radio = ({handleSound, radio,handleRadioTag}) => {
  const {name, url, favicon,tags} = radio;

  return(
    <div className="radiosList__radio">
      { favicon && <img className="radiosList__radio__favicon" src={favicon} /> }
      <div className="radiosList__radio__content">
        <div className="radiosList__radio__content__name">{name}</div>
        <button className="radiosList__radio__content__playBtn" onClick={() => handleSound(url, name)}>play</button>
        <div className="radiosList__radio__content__tags">
          {
            tags.split(',').map((tag) => (
              <div key={tags} className="radiosList__radio__content__tags__tag" onClick={()=>handleRadioTag(tag)}>{tag}</div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Radio;
