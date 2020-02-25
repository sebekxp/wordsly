import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/reducers';
import Search from './components/Search';
// noinspection ES6CheckImport
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Landing from './components/Auth/Landing';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './redux/authReducer';
import { fetchWords } from './actions/words/fetchWordsCollection';
import styled from 'styled-components';
import Colors from './components/utils/Colors';
import ProgressBar from './components/ProgressBar';
import BookmarksBar from './components/BookmarkBar';
import WordContentContainer from './components/WordContent';


void function keepUserLoggedIn() {
    if (localStorage.jwtToken) {
        const token = localStorage.jwtToken;
        const decoded = jwtDecode(token);
        store.dispatch(setCurrentUser(decoded));
    }
}();

const App = () => {

    const Container = styled.div`
    width: 68.75rem;
    height: 35rem;
    padding: 0;
    border-radius: 10px;
    box-shadow: ${Colors.BOX_SHADOW}
    margin: auto;
    position: fixed;
    top: 180px;
    left: 0;
    right: 0;
`;
    const Wrapper = styled.div`
        display: flex;
    `;

    store.dispatch(fetchWords());

    return (
        <Provider store={store}>
            <Router>
                <Route exact path="/" component={Landing}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/home'>
                    <div className="App">
                        <Search/>
                        <Container>
                            <Wrapper>
                                <ProgressBar/>
                                <BookmarksBar/>
                            </Wrapper>
                            <WordContentContainer/>
                        </Container>
                    </div>
                </Route>
            </Router>
        </Provider>
    );
};

export default App;
