import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useState } from 'react';
import Loading from './compoments/Loading';
import Home from './compoments/Home';

const App = () => {
  const [loading, setLoading] = useState(true)
  setTimeout(()=>{setLoading(false)}, 4000);
  return (
      <Router>
        <Routes> 
          <Route path={'/diceProject'} element={loading ? ( <Loading/>) : (<Home/>)}/>
        </Routes>
      </Router>
  );
};
export default App;