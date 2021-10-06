import { useSelector } from 'react-redux';

const RadioList = () => {
  const radios = useSelector ((state) => state.radios);
  return(
    <div>ok{JSON.stringify(radios)}</div>
  );

};

export default RadioList;
