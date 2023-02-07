import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Record from './pages/Record';

function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/record' element={<Record/>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
