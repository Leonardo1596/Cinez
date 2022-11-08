import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Movies from './pages/Movies/Movies';
import PlayScreen from './pages/PlayScreen/PlayScreen';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PrivateRouteMovies from './components/Movies-components/PrivateRoute/PrivateRoute';
import PrivateRouteLogin from './components/Login-components/PrivateRoute/PrivateRoute';
import PrivateRouteRegister from './components/Register-components/PrivateRoute/PrivateRoute';
import PrivateRouteMyList from './components/MyList-components/PrivateRoute/PrivateRoute';
import PrivateRoutePlayScreen from './components/PlayScreen-components/PrivateRoute/PrivateRoute';
import PrivateRouteMovie from './components/Movie-components/PrivateRoute/PrivateRoute';
import MyList from './pages/MyList/MyList';
import Movie from './pages/Movie/Movie';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/filmes" element={
          <PrivateRouteMovies>
            <Movies />
          </PrivateRouteMovies>
        }
        />
        <Route path="/assistir" element={
          <PrivateRoutePlayScreen>
            <PlayScreen />
          </PrivateRoutePlayScreen>
        }
        />
        <Route path="/minha-lista" element={
          <PrivateRouteMyList>
            <MyList />
          </PrivateRouteMyList>
        }
        />
        <Route path="/login" element={
          <PrivateRouteLogin>
            <Login />
          </PrivateRouteLogin>
        }
        />
        <Route path="/cadastro" element={
          <PrivateRouteRegister>
            <Register />
          </PrivateRouteRegister>
        }
        />
        <Route path="/filme" element={
          <PrivateRouteMovie>
            <Movie />
          </PrivateRouteMovie>
        }
        />
      </Routes>
    </Router>
  )
}

export default App