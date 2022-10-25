
import './app.scss'
import Home from "./pages/home/Home"
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  const user = true
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={user ? <Home /> : <Register />}></Route>
        <Route exact path='/register' element={!user ? <Register /> : <Home />}></Route>
        <Route exact path='/login' element={!user ? <Login /> : <Home />}></Route>
        {user && (
          <>
            <Route path='/movies' element={<Home type="movies" />}></Route>
            <Route path='/series' element={<Home type="series" />}></Route>
            <Route path='/watch' element={<Watch />}></Route>
          </>
        )}
      </Routes>
    </Router>
  )
};

export default App;