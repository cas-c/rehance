import { connect } from 'react-redux';
import Home from './Home';
import { search } from '../store/middleware';

const mapStateToProps = state => ({
    results: state.results
});

const mapDispatchToProps = dispatch => ({
    selectUser: (username, results) => {
        dispatch({ type: 'SET_DISPLAY_USER', user: results.find(r => r.username === username) });
    },
    searchForUser: searchTerm => {
        return search(searchTerm);
    },
    setResults: results => {
        dispatch({ type: 'SET_RESULTS', results });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
