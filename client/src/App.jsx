import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import About from './pages/About';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing';
import Search from './pages/Search';

//components
import Header from './components/Header.component';
import PrivateRoute from './components/PrivateRoute.component';
import Footer from './components/Footer.component';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='/sign-in'
                    element={<SignIn />}
                />
                <Route
                    path='/sign-up'
                    element={<SignUp />}
                />
                <Route
                    path='/about'
                    element={<About />}
                />
                <Route
                    path='/search'
                    element={<Search />}
                />
                <Route
                    path='/listing/:listingId'
                    element={<Listing />}
                />
                <Route element={<PrivateRoute />}>
                    <Route
                        path='/profile'
                        element={<Profile />}
                    />
                    <Route
                        path='/create-listing'
                        element={<CreateListing />}
                    />
                    <Route
                        path='/update-listing/:listingId'
                        element={<UpdateListing />}
                    />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
