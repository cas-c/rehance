import React from 'react';

import UserIcon from './UserIcon';
import StatisticsContainer from './StatisticsContainer';
import ProjectsContainer from './ProjectsContainer';
import WorkExperienceContainer from './WorkExperienceContainer';
import MiniProfilesWrapper from './MiniProfiles';

import './ProfilePage.css';

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: true,
            background: ''
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.user !== this.props.user) {
            this.props.getAllUserData(this.props.user.username);
        };
        if (prevProps.background !== this.props.background) {
            this.setState({ background: this.props.background });
        }
    }
    render() {
        if (!this.props.user.username) return <div />;
        return (
            <div className='profile-page'>
                <div className='profile-page-bg' style={{ backgroundImage: `url('${this.props.background}')` }}/>
                <div className='columns is-desktop'>
                    <div className='profile-page-info column is-narrow'>
                        <div className='columns is-centered'>
                            <div className='column is-narrow-desktop'>
                                <UserIcon fullName={this.props.user.display_name} url={this.props.user.images[138]} />
                            </div>
                            <div className='column profile-page-details has-text-right-tablet'>
                                <strong>User Information</strong><br />
                                <span>{ this.props.user.display_name }<span> ({ this.props.user.username })</span></span><br />
                                { this.props.user.occupation }<br />
                                { this.props.user.city } { this.props.user.state && `, ${this.props.user.state}`}<br />
                                { this.props.user.country }<br />
                                Member since { new Date(this.props.user.created_on * 1000).toLocaleDateString() }
                            </div>
                        </div>
                        <div className='columns'>
                            <StatisticsContainer />
                        </div>
                        <WorkExperienceContainer />
                    </div>
                    <div className='profile-page-projects column'>
                        <ProjectsContainer />
                        <hr />
                        <MiniProfilesWrapper followers={this.props.followers} following={this.props.following}/>
                    </div>
                </div>
                <br />
            </div>
        );
    }
}

// Maps to api /users/$username .user
ProfilePage.defaultProps = {
    followers: [],
    following: []
}
export default ProfilePage;