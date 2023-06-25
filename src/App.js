import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUsPage from './pages/about_us';
import HomePage from './pages/home_page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path={'/'} element={''} />
        <Route path={'/about_us'} element={<AboutUsPage/>} />
        <Route path={'/home_page'} element={<HomePage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
