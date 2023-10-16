import { Routes, Route } from 'react-router-dom';

import './Categories.css';

import Catalog from '../Catalog';
import In_1 from '../In_1';
import In_2 from '../In_2';
import In_3 from '../In_3';
import Equipment from '../Equipment';
import Location from '../Location';

function Categories(props) {
  return (
    <>
      <main className="main">
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/in-1/*" element={<In_1/>} />
          <Route path="/in-2/*" element={<In_2/>} />
          <Route path="/in-3/*" element={<In_3/>} />
          <Route path="/equipment/*" element={<Equipment onOpen={props.onOpen}/>} />
        </Routes>
        <Location selectorName="padding__top" />
      </main>
    </>
  );
}

export default Categories;
