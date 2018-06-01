import { connect } from 'react-redux';
import WorkExperience from './WorkExperience';

const mapStateToProps = state => ({
    experience: state.workExperience
});

const mapDispatchToProps = dispatch => ({
    selectUser: (username, results) => {
        dispatch({ type: 'SET_DISPLAY_USER', user: results.find(r => r.username === username) });
    },
    setBackground: bg => {
        dispatch({ type: 'SET_BACKGROUND', bg });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkExperience);
