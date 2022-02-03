import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Games from 'components/Games';
import Header from './components/Header';
import Characters from './components/Characters';
import Home from './components/Home';
import SApp from './style';
import './reset.css';
import Footer from './components/Footer';
import Comments from './components/Comments';

function App() {
  return (
    <SApp>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Accueil" element={<Home />} />
          <Route path="/Personnages" element={<Characters />} />
          <Route path="/Jeux" element={<Games />} />
        </Routes>
        <ToastContainer />
        <Comments />
        <Footer />
      </BrowserRouter>
    </SApp>
  );
}

export default App;
