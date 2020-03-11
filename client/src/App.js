import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import jwtDecode from 'jwt-decode';
// noinspection ES6CheckImport
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/reducers';
import Search from './components/Search';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Landing from './components/Auth/Landing';
import { setCurrentUser } from './redux/authReducer';
import WordContentWrapper from './components/WordContent/WordContentWrapper';
import GlobalStyleWrapper from './components/utils/theme/ThemeWrapper';

(function keepUserLoggedIn() {
    if (localStorage.jwtToken) {
        const token = localStorage.jwtToken;
        const decoded = jwtDecode(token);
        store.dispatch(setCurrentUser(decoded));
    }
})();

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Route exact path="/" component={Landing} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/home">
                    <GlobalStyleWrapper>
                        <div className="App">
                            <Search />
                            <WordContentWrapper />
                        </div>
                    </GlobalStyleWrapper>
                </Route>
            </Router>
        </Provider>
    );
};

export default App;
