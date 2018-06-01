import { connect } from 'react-redux';
import ProfilePage from './ProfilePage';
import { getAllUserData } from '../store/middleware';

const mapStateToProps = state => ({
    background: state.background,
    followers: state.followers,
    following: state.following,
    user: state.user,
    workExperience: state.workExperience
});

const mapDispatchToProps = dispatch => ({
    getAllUserData: username => {
        getAllUserData(dispatch)(username);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
