import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import InfoSection  from '../InfoSection/InfoSection';
import Cards from '../Cards/Cards'
function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
     <Cards/>
    </>
  );
}

export default Home;
