import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/homepage/Home';
import Record from './pages/recordpage/Record';
import Hobbies from './pages/hobbiespage/Hobbies'

function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route path='/record' element={<Record/>}></Route>
            <Route path='/Hobbies' element={<Hobbies/>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
