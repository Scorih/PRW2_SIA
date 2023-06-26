import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUsPage from './pages/about_us';
import HomePage from './pages/home_page';
import { HeaderPage } from './pages/header';
import { FooterPage } from './pages/footer';
import LightPage from './pages/light';
import GeometryPage from './pages/geometry';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HeaderPage />
      <Routes>
        <Route path={'/'} element={''} />
        <Route path={'/home_page'} element={<HomePage/>} />
        <Route path={'/light'} element={<LightPage/>} />
        <Route path={'/geometry'} element={<GeometryPage/>} />
        <Route path={'/other_entities'} element={<HomePage/>} />
        <Route path={'/optimization'} element={<HomePage/>} />
        <Route path={'/about_us'} element={<AboutUsPage/>} />
      </Routes>
      <FooterPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
