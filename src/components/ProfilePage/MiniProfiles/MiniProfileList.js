import React from 'react';
import PropTypes from 'prop-types';
import MiniProfile from './MiniProfile';

const MiniProfiles = ({ users }) => users.slice(0, 5).map((u, i) => <MiniProfile user={u} key={`mini-user-${i}`} />);

MiniProfiles.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object)
};

MiniProfiles.defaultProps = {
    users: []
}

export default MiniProfiles;
