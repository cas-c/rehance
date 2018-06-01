import React from 'react';

const UserIcon = ({ url, fullName }) => (
    <div title={fullName} >
        <img src={url} alt={fullName} className='profile-page-icon'/>
    </div>
);

export default UserIcon;
