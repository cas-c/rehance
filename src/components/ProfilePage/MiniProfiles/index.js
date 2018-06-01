import React from 'react';
import MiniProfile from './MiniProfile';
import './MiniProfiles.css';

const MiniProfiles = ({ users }) => users.slice(0, 5).map((u, i) => <MiniProfile user={u} key={`mini-user-${i}`} />);

const MiniProfilesColumn = ({ label, data, emptyString }) => (
    <div className='column'>
        <div className='is-size-3 profile-page-header'>
            { label }
        </div>
        {
            data.length > 0 ?
                <MiniProfiles users={data} /> :
                <div className='has-text-centered'>{ emptyString }</div>
        }
        { data.length > 5 && <div className='has-text-right'><a>View all...</a></div> }
    </div>
);

const MiniProfilesWrapper = ({ following, followers }) => (
    <div className='columns is-desktop'>
        <MiniProfilesColumn data={followers} label='Followers' emptyString='This user has no followers.' />
        <MiniProfilesColumn data={following} label='Following' emptyString='This user is not following anyone.' />
    </div>
);

export default MiniProfilesWrapper;
