import React from 'react';
import MiniProfilesColumn from './MiniProfilesColumn';

const MiniProfilesWrapper = ({ following, followers }) => (
    <div className='columns is-desktop'>
        <MiniProfilesColumn data={followers} label='Followers' emptyString='This user has no followers.' />
        <MiniProfilesColumn data={following} label='Following' emptyString='This user is not following anyone.' />
    </div>
);

export default MiniProfilesWrapper;