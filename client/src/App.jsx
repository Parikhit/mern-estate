import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import About from './pages/About';

//components
import Header from './components/Header.component';
import PrivateRoute from './components/PrivateRoute.component';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/about' element={<About />} />
                <Route element={<PrivateRoute />}>
                    <Route path='/profile' element={<Profile />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
