import './index.css';
import Labs from "./Labs/lab3";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import { HashRouter } from 'react-router-dom';
import { Routes, Route} from 'react-router';
import Assignment3 from './Labs/a3';

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Labs/>}/>
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/Labs/*" element={<Assignment3/>} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
export default App;