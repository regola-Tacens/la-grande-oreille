const PageCount = ({ actualOffset, radiosQuantity}) => (
  <div className="pageCount">
    <div className="pageCount__counter">{1+ actualOffset/10} / {Math.ceil(radiosQuantity/10)}</div>
  </div>
);

export default PageCount;
