import { sortRuData } from '../../utils/RuDataFormatter';
import React from 'react';
import CombinedGrid from '../../components/CombinedGrid';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

//Main page, simply calls the data sorter and feeds that data to the Combined Grid component
function App() {
  let data = sortRuData()
  return (
    <>
      <Header />
      <CombinedGrid data={data} />
      <Footer />
    </>
  );
}

export default App;
