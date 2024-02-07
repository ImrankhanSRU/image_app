import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Page from './Page/Page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="page" element={<Page />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
