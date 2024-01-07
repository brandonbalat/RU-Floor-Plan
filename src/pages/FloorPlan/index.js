import logo from './logo.svg';
import './LocalStyles.css';
import { sortRuData } from '../../utils/RuDataFormatter';
import React from 'react';
import CombinedGrid from '../../components/CombinedGrid';

function App() {
  let data = sortRuData()
  return (
    <CombinedGrid data={data} />
  );
}

export default App;
