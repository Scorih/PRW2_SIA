import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUsPage from './pages/about_us';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path={'/'} element={''} />
        <Route path={'/about_us'} element={<AboutUsPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
