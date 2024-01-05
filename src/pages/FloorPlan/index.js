import logo from './logo.svg';
import './LocalStyles.css';
import { sortRuData } from '../../utils/RuDataFormatter';
import GridQuadrant from '../../components/GridQuadrant'

function App() {
  let data = sortRuData()
  console.log("DATA", data)
  return (
    <div className="Floor-Plan">
      <div className='top-header'>
        TAPE-IN DB VIEW
      </div>
      <div className='middle-headers'>
        <div className='grid-1'> Grid </div>
        <div className='diode-1'> Diode </div>
        <div className='unmask-1'> Unmask</div>
        <div className='ru-num-1'> RU# </div>
        <div className='seat-uuid'> Seat UUID</div>
        <div className='ru-num-2'> RU# </div>
        <div className='unmask-2'> Unmask</div>
        <div className='diode-2'> Diode </div>
        <div className='grid-2'> Grid </div>
      </div>
      <div>
        <GridQuadrant data={data} quadType='1' />
      </div>
    </div>
  );
}

export default App;
