import { Route, Routes } from 'react-router-dom';
import './App.css';
import Biodata from './Biodata';
import Headbar from './Headbar';
import Home from './Home';
function App() {
  return (
    <>
      <Headbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Biodata" element={<Biodata />}></Route>
      </Routes>
      
    </>
  );
}

export default App;
