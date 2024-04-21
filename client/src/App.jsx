import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
const Home = lazy(() => import('./pages/Home'));
const Profile = lazy(() => import('./pages/Profile'));
const Listing = lazy(() => import('./pages/Listing'));
const About = lazy(() => import('./pages/About'));
const Search = lazy(() => import('./pages/Search'));
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';

//components
import Header from './components/Header.component';
import PrivateRoute from './components/PrivateRoute.component';
import Footer from './components/Footer.component';
import Spinner from './components/Spinner.component';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Suspense fallback={<Spinner />}>
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
            </Suspense>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
