import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import About from './pages/About';

//components
import Header from './components/Header.component';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
