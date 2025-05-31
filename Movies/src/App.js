import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import ListMovies from './Pages/Home/home';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import MyNavBar from './components/MyNavbar';
import NotFound from './Pages/NotFound/NotFound';
import Favorites from './Pages/Favorites/Favorites';
import MovieDet from './Pages/MovieDet/MovieDet';
import { useState } from 'react';
import { languageContext } from './Context/changeLang';



function App() {

  const [myLang, setmyLang] = useState("En")


  return (
    <div>
      <languageContext.Provider value={{myLang, setmyLang}}>
        <BrowserRouter>
          <MyNavBar />
          <div className='container'>
            <Routes>
              <Route path="/" element={<ListMovies />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />}  />
              <Route path="/view/:id" element={<MovieDet />} />
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </languageContext.Provider>
    </div>
  );
}

export default App;
