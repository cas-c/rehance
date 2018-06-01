import { connect } from 'react-redux';
import Projects from './Projects';

const mapStateToProps = state => ({
    projects: state.projects
});

const mapDispatchToProps = dispatch => ({
    selectUser: (username, results) => {
        dispatch({ type: 'SET_DISPLAY_USER', user: results.find(r => r.username === username) });
    },
    setBackground: bg => {
        dispatch({ type: 'SET_BACKGROUND', bg });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
