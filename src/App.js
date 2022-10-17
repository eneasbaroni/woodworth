import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import { LanguageProvider } from './context/languageContext';
import Sucess from './pages/Success/Sucess';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>} /> 
            <Route path='/success' element={<Sucess/>} /> 
          </Routes>
        <Footer/>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
