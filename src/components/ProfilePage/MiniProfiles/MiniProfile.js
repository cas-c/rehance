import React from 'react';

const MiniProfile = ({ user }) => (
    <div className='card mini-profile'>
        <div className='card-content'>
            <div className='media'>
                <div className='media-left'>
                    <figure className='image is-48x48'>
                        <img alt='' src={user.images['115']} />
                    </figure>
                </div>
                <div className='media-content'>
                    <p className='title is-5'>{user.display_name}</p>
                    <p className='subtitle is-6'>{user.username}</p>
                </div>
            </div>
        </div>
    </div>
);

export default MiniProfile;
