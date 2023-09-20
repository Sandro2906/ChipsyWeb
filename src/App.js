import Home from "./pages/Home";
import Kolacici from "./pages/Kolacici";
import Kontakt from "./pages/Kontakt";

import {Route, Routes, BrowserRouter } from 'react-router-dom'
import OChipsybrendu from "./pages/OChipsybrendu";
import ChipsyAkademija from "./pages/ChipsyAkademija";
import Promocije from "./pages/Promocije";
import PromocijaPrva from "./pages/PromocijaPrva";
import PromocijaDruga from "./pages/PromocijaDruga";
import PromocijaTri from "./pages/PromocijeTri";
import ProizvodiPage from "./pages/ProizvodiPage";
import ChipshyClassic from "./pages/ChipshyClassic";
import ChipshyDomacinski from "./pages/ChipsyDomacinski";
import ChipshyOverbacked from "./pages/ChipsyOverbacked";
import ChipsyStick from './pages/ChipsyStick';
import ChipshyRebrasti from "./pages/ChipsyReabrasti";

function App() {
  return (
  <div className="overflow-hidden">
    
    <BrowserRouter>
      <Routes>
        <Route element={<Kolacici />} path="/kolacici" />
        <Route element={<Home />} path="/" />
        <Route element={<Kontakt />} path="/kontakt" />
        <Route element={<OChipsybrendu />} path="/about" />
        <Route element={<ChipsyAkademija />} path="/akademija" />
        <Route element={<Promocije />} path="/promocije" />
        <Route element={<PromocijaPrva />} path="/promocijaOne" />
        <Route element={<PromocijaDruga />} path="promocijaTwo" />
        <Route element={<PromocijaTri />} path="/promocijaThree" />
        <Route element={<ProizvodiPage />} path="/proizvodi" />
        <Route element={<ChipshyClassic />} path="/chipsyclassic" />
        <Route element={<ChipshyDomacinski />} path="/chipsydomacinski" />
        <Route element={<ChipshyOverbacked />} path="/chipsyoverbacked" />
        <Route element={<ChipsyStick />} path="/chipsystick" />
        <Route element={<ChipshyRebrasti />} path="/chipsyrebrastichily" />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
