import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './grilla.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import { LanguageProvider } from './context/languageContext';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>} /> 
          </Routes>
        <Footer/>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
